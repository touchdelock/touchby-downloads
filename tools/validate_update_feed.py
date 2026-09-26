"""Check the public update feed, optionally against published GitHub assets."""

import argparse
import datetime
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
CHANNELS = {"android": "android-apk", "ios": "ios-public"}


def require(condition, message):
    if not condition:
        raise ValueError(message)


def official_url(value):
    require(isinstance(value, str), "URL must be a string")
    parsed = urlparse(value)
    require(parsed.scheme == "https" and not parsed.username and not parsed.password,
            "URL must use HTTPS without credentials")
    require(parsed.port in (None, 443), "URL port is not allowed")
    require(not parsed.query and "%" not in parsed.path and "\\" not in value,
            "URL must not contain a query or encoded path")
    require(not any(part in (".", "..") for part in parsed.path.split("/")),
            "URL must not contain path traversal")
    allowed = (
        parsed.hostname == "touchdelock.github.io"
        and parsed.path.startswith("/touchby-downloads/")
    ) or (
        parsed.hostname == "github.com"
        and parsed.path.startswith("/touchdelock/touchby-downloads/releases/")
    ) or (
        parsed.hostname == "touchdelock.base.shop"
        and parsed.path == "/p/00002"
    )
    require(allowed, "URL is not an official distribution path")
    return parsed


def validate(feed, online=False):
    require(type(feed.get("schemaVersion")) is int and feed["schemaVersion"] == 1,
            "Unsupported schemaVersion")
    timestamp = datetime.datetime.fromisoformat(feed["updatedAt"].replace("Z", "+00:00"))
    require(timestamp.tzinfo is not None, "updatedAt must include a timezone")
    checked = []
    releases = {}
    for product in ("lock", "alarm"):
        for platform, channel in CHANNELS.items():
            entry = feed["products"][product][platform]
            prefix = f"{product}/{platform}"
            require(entry.get("channel") == channel, f"{prefix}: wrong channel")
            require(type(entry.get("available")) is bool, f"{prefix}: available must be boolean")
            url = official_url(entry.get("url"))
            if not entry["available"]:
                require(not any(key in entry for key in ("version", "build", "notes")),
                        f"{prefix}: unavailable entries must not advertise a version")
                checked.append({"product": product, "platform": platform, "available": False})
                continue
            require(isinstance(entry.get("version"), str)
                    and re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", entry["version"]),
                    f"{prefix}: invalid version")
            require(type(entry.get("build")) is int and 0 < entry["build"] <= 2147483647,
                    f"{prefix}: invalid build")
            require(isinstance(entry.get("notes"), str) and 0 < len(entry["notes"]) <= 1000,
                    f"{prefix}: invalid notes")
            result = {"product": product, "platform": platform, "available": True,
                      "version": entry["version"], "build": entry["build"]}
            if platform == "android":
                parts = url.path.split("/")
                require(url.hostname == "github.com" and len(parts) == 7
                        and parts[1:5] == ["touchdelock", "touchby-downloads", "releases", "download"],
                        f"{prefix}: Android must link to a published APK")
                tag, name = unquote(parts[5]), unquote(parts[6])
                require(name == f"touchby-{product}-{entry['version']}-{entry['build']}.apk",
                        f"{prefix}: APK filename/version mismatch")
                if online:
                    if tag not in releases:
                        request = Request(
                            f"https://api.github.com/repos/touchdelock/touchby-downloads/releases/tags/{tag}",
                            headers={"Accept": "application/vnd.github+json", "User-Agent": "Touchby-Feed-Validation"})
                        with urlopen(request, timeout=20) as response:
                            releases[tag] = json.load(response)
                    release = releases[tag]
                    require(release.get("draft") is False and release.get("published_at"),
                            f"{prefix}: release is not published")
                    assets = [asset for asset in release["assets"] if asset["name"] == name]
                    require(len(assets) == 1 and assets[0]["browser_download_url"] == entry["url"],
                            f"{prefix}: published asset missing or wrong URL")
                    require(assets[0]["size"] > 0 and assets[0].get("digest", "").startswith("sha256:"),
                            f"{prefix}: asset size/digest missing")
                    result.update(size=assets[0]["size"], digest=assets[0]["digest"],
                                  releasePublishedAt=release["published_at"])
            else:
                require(not online, "Verify iOS public availability independently before publishing its feed entry")
            checked.append(result)
    return checked


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--online", action="store_true")
    parser.add_argument("--feed", type=Path, default=ROOT / "docs/updates/v1.json")
    args = parser.parse_args()
    data = args.feed.read_bytes()
    require(len(data) <= 65536, "Feed exceeds 64 KiB")
    results = validate(json.loads(data), online=args.online)
    print(json.dumps({"ok": True, "bytes": len(data), "online": args.online,
                      "entries": results}, ensure_ascii=False, indent=2))
