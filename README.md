# タッチby ダウンロード

タッチbyロック／タッチbyアラームの公式配布ファイルと導入案内です。

- [公式ダウンロード案内](https://touchdelock.base.shop/p/00002)
- [先行配布の案内](https://touchdelock.github.io/touchby-downloads/)
- [プライバシーポリシー](https://touchdelock.base.shop/p/00007)
- [お問い合わせ](https://thebase.com/inquiry/touchdelock-base-shop)

Android版の先行配布を開始しました。ロック 1.0.0 (32)・アラーム 1.0.0 (10)のAPKと導入案内は[先行公開リリース](https://github.com/touchdelock/touchby-downloads/releases/tag/android-2026-09-25-rc1)に掲載しています。

製品署名・静的検査と自動テストは完了していますが、今回の公開版での通常ブラウザ導入、実物NFC、アラームの音・再鳴動の最終確認は残っています。先行版として、お使いの端末で短い動作確認を行ってから利用してください。

Android は署名済み APKを配布しています。iPhone は Apple の公証を通過した版を AltStore PAL 経由で配布する予定で、現在は準備中です。

製品ソースコードや署名鍵はこのリポジトリには含めません。アプリの素材・ライブラリの許諾は各アプリに同梱しています。

## アプリの更新情報

更新確認に対応するアプリ向けの静的フィードは [updates/v1.json](https://touchdelock.github.io/touchby-downloads/updates/v1.json) です。現行の配布版にこの機能があるという意味ではありません。

公開済みで取得可能な版だけを記載します。署名ビルドや審査中の版は、公開された後に更新します。`available: false` は一般向けの更新版を案内していない状態であり、TestFlightの配布状態とは別です。build番号は商品・OSごとに比較します。

反映前に `python tools/validate_update_feed.py --online` でスキーマ、公式URL、Android公開ファイルと版の対応を確認します。iPhoneの一般公開は別途配布先で確認する必要があります。

フィードは認証・Cookie・個人別パラメーター不要のHTTPS GETで提供します。アプリの設定、アラーム、カード識別情報を送信するAPIはありません。配信にはGitHub Pagesを利用するため、通常のWebアクセスに伴うIPアドレス等は配信サービスへ伝わります。
