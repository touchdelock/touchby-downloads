/* Presentation only. No analytics, cookies, storage, or network requests. */
(function(){
'use strict';
const icon=k=>`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${k==='lock'?'<rect x="11" y="21" width="26" height="22" rx="5"/><path d="M16 21v-9a8 8 0 0 1 16 0v9"/><path d="M24 29v6"/>':'<circle cx="24" cy="25" r="15"/><path d="M24 16v10l7 4M9 5 3 11M39 5l6 6M14 38l-3 6m23-6 3 6"/>'}</svg>`;
const scene=(kind='both')=>`<div class="tb-scene" data-kind="${kind}" role="img" aria-label="スマートフォンと専用タグを表したイラスト"><div class="tb-orbit"></div><div class="tb-time">${kind==='lock'?'21:00':'07:00'}<small>A LITTLE TOUCH. YOUR OWN TIME.</small></div><div class="tb-phone">${icon(kind==='alarm'?'alarm':'lock')}<small>TOUCHBY</small><b>${kind==='alarm'?'朝を、はじめよう。':'じぶんの時間へ。'}</b><i></i><i></i><i></i></div><div class="tb-tag tb-tag--lock">${icon('lock')}</div><div class="tb-tag tb-tag--alarm">${icon('alarm')}</div><span class="tb-scene-caption">専用タグのイメージ</span></div>`;
const action=(url,label)=>`<a class="tb-button" href="${url}">${label}</a>`;
const cta=u=>`<section class="tb-cta"><div><h2>準備できたら、アプリから。</h2><p>対応するスマートフォンと、現在の配布状況をご確認ください。</p></div>${action(u('/p/00002'),'ダウンロードへ')}</section>`;
const home=(u,faq)=>`<div class="tb-root"><section class="tb-hero"><div><p class="tb-eyebrow">スマホと、ちょうどいい距離。</p><h1>ひとタッチで、<br><em>じぶんの時間へ。</em></h1><p class="tb-lead">使いすぎる時間に、ひと区切り。<br>二度寝しがちな朝に、動きだすきっかけを。<br>専用NFCタグとアプリが、毎日の切り替えを支えます。</p><div class="tb-actions">${action('#tb-products','2つの商品を見る')}<a class="tb-link" href="${u('/p/00002')}">アプリをダウンロード</a></div><p class="tb-hero-note">タッチbyロック ／ タッチbyアラーム</p></div>${scene()}</section><div class="tb-rule"><span>スマートフォン × 専用NFCタグ</span><span>専用アプリは無料</span><a href="${u('/p/00002')}">Android・iPhoneの対応条件 ↗</a></div><section class="tb-section" id="tb-products"><div class="tb-section-head"><h2>ふたつのタッチ。<br>ふたつの、いい習慣。</h2><p>似ているけれど、役割はそれぞれ。<br>あなたの毎日に合う方を。</p></div><div class="tb-products"><article class="tb-product"><div class="tb-product-top"><span>01 / FOCUS</span><span>LOCK</span></div><div class="tb-product-art"><div class="tb-disc">${icon('lock')}</div></div><h3>タッチbyロック</h3><p class="tb-product-copy">スマホより、<br>いまに集中。</p><p class="tb-product-desc">選んだアプリや対応するWebサイトをロック。<br>もう一度、専用タグにタッチして解除します。</p><a href="${u('/p/00005')}">タッチbyロックを詳しく見る</a></article><article class="tb-product tb-product--alarm"><div class="tb-product-top"><span>02 / WAKE UP</span><span>ALARM</span></div><div class="tb-product-art"><div class="tb-disc">${icon('alarm')}</div></div><h3>タッチbyアラーム</h3><p class="tb-product-copy">朝の一歩を、<br>タッチから。</p><p class="tb-product-desc">ベッドから離れた専用タグの場所へ。<br>設定した枚数を読み取って、アラームを完了。</p><a href="${u('/p/00004')}">タッチbyアラームを詳しく見る</a></article></div><p class="tb-fine">ロックとアラームは別の商品です。それぞれに対応する専用NFCタグをお使いください。</p></section><section class="tb-section tb-how"><div class="tb-section-head"><h2>スマホの中の約束を、<br>手で触れるきっかけに。</h2><p>むずかしい毎日の操作を増やさず、<br>切り替える動作をひとつ。</p></div><div class="tb-steps"><div class="tb-step"><span>01</span><h3>使い方を選ぶ。</h3><p>集中する時間にはロック。朝の一歩にはアラーム。対応するアプリと専用タグを用意します。</p></div><div class="tb-step"><span>02</span><h3>タグの場所を決める。</h3><p>机、リビング、玄関。スマホとの距離をつくりたい場所に、専用タグを置きます。</p></div><div class="tb-step"><span>03</span><h3>アプリを開いて、タッチ。</h3><p>初回の設定を済ませたら、アプリでタグを読み取ります。読み取り方は端末と商品により異なります。</p></div></div></section><section class="tb-faq"><div class="tb-faq-intro"><p class="tb-eyebrow">QUESTIONS</p><h2>はじめる前に、<br>気になること。</h2><p>対応端末やタグについてのご案内です。</p><a class="tb-link" href="${u('/inquiry')}">解決しないときは、お問い合わせ</a></div><div>${faq}</div></section>${cta(u)}</div>`;
const hero=(kind,u,title,intro)=>`<section class="tb-root tb-hero tb-product-hero"><div><p class="tb-eyebrow">${kind==='lock'?'01 / FOCUS TIME':'02 / A NEW MORNING'}</p><h1>${title}</h1><div class="tb-lead">${intro}</div><div class="tb-actions">${action(u('/p/00002'),'アプリの入手方法')}<a class="tb-link" href="#tb-details">使い方を見る</a></div><p class="tb-hero-note">専用NFCタグ + 無料アプリ</p></div>${scene(kind)}</section>`;
const footer=u=>`<div class="tb-footer"><div><a class="tb-footer-brand" href="${u('')}" aria-label="タッチby ホーム">タッチby</a><p>スマホを置く時間も、<br>起きるきっかけも。</p></div><nav class="tb-footer-links" aria-label="フッターナビゲーション"><a href="${u('/p/00005')}">タッチbyロック</a><a href="${u('/p/00004')}">タッチbyアラーム</a><a href="${u('/p/00002')}">ダウンロード</a><a href="${u('/inquiry')}">お問い合わせ</a><a href="${u('/p/00007')}">アプリのプライバシーポリシー</a></nav></div>`;
window.TouchbyDesign={icon,home,hero,footer,cta};
window.dispatchEvent(new Event('touchby:design'));
})();

/* Safe enhancement of the existing BASE pages. Disabling this tag restores BASE. */
(function(){
'use strict';
function boot(){
 if(document.readyState==='loading'||!window.TouchbyDesign||document.documentElement.classList.contains('tb-ready'))return;
 const host=location.hostname,preview=location.pathname.match(/^\/shop_preview\/[^/]+/),local=host==='127.0.0.1'||host==='localhost';
 if(!(host==='touchdelock.base.shop'||host==='admin.thebase.com'&&preview||local))return;
 const main=document.querySelector('main.layout-main'),footer=document.querySelector('.layout-commonFooter');
 if(!main||!footer||location.pathname.includes('/cart'))return;
 const v=window.TouchbyDesign,base=preview?preview[0]:'',u=p=>base+(p||'/'),path=location.pathname.slice(base.length).replace(/\/$/,'')||'/';
 const kind=path==='/p/00005'?'lock':path==='/p/00004'?'alarm':path==='/p/00002'?'download':path==='/'?'home':'document';
 const parts=Array.from(main.querySelectorAll('[data-parts]'));
 const root=html=>{const d=document.createElement('div');d.innerHTML=html;return d;};
 const oldLink=p=>p.innerText.trim()==='アプリのプライバシーポリシー';
 const rewriteLinks=scope=>scope.querySelectorAll('a[href]').forEach(a=>{try{const x=new URL(a.href,location.href);if(x.hostname==='touchdelock.base.shop'){a.setAttribute('href',u(x.pathname+x.search+x.hash));a.removeAttribute('target');}}catch(_){}});
 try{
  if(kind==='home'){
   const faqPart=parts.find(p=>p.getAttribute('data-parts')==='text'&&p.innerText.includes('Q. 何を用意すれば'));
   if(!faqPart)return;
   const items=[];let item;
   faqPart.querySelectorAll('p').forEach(p=>{const text=p.textContent.trim();if(/^Q[.．]/.test(text)){item={q:text.replace(/^Q[.．]\s*/,''),answer:[]};items.push(item);}else if(item&&text)item.answer.push(p.outerHTML);});
   if(!items.length)return;
   const faqs=items.map(x=>{const s=document.createElement('span');s.textContent=x.q;return `<details><summary>${s.innerHTML}</summary><div class="tb-faq-answer">${x.answer.join('')}</div></details>`;}).join('');
   const next=root(v.home(u,faqs));
   const productGrids=parts.filter(p=>p.getAttribute('data-parts')==='items-grid'&&p.querySelector('a[href*="/items/"]'));
   const old=document.createElement('div');old.className='tb-original';while(main.firstChild)old.appendChild(main.firstChild);old.hidden=true;main.append(old,next);
   if(productGrids.length){const section=document.createElement('section');section.className='tb-section';section.innerHTML='<h2>専用タグ</h2>';productGrids.forEach(p=>section.appendChild(p));next.querySelector('#tb-products').after(section);}
  }else if(kind==='lock'||kind==='alarm'){
   const intro=parts.find(p=>p.getAttribute('data-parts')==='text');
   const title=parts.find(p=>p.getAttribute('data-parts')==='title');
   if(intro&&title){
    const paragraphs=Array.from(intro.querySelectorAll('p')).filter(p=>p.textContent.trim());
    const copy=paragraphs.slice(1).map(p=>p.outerHTML).join('');
    main.prepend(root(v.hero(kind,u,kind==='lock'?'タッチbyロック':'タッチbyアラーム',copy)));
    const firstImage=parts.find(p=>p.getAttribute('data-parts')==='image');if(firstImage)firstImage.hidden=true;intro.hidden=true;title.hidden=true;
    const nextTitle=parts.filter(p=>p.getAttribute('data-parts')==='title')[1];if(nextTitle)nextTitle.id='tb-details';
   }
   main.classList.add('tb-detail');
   main.appendChild(root(`<div class="tb-root">${v.cta(u)}</div>`));
  }else if(kind==='download'){
   const titleParts=parts.filter(p=>p.getAttribute('data-parts')==='title');
   const section=(name)=>{const p=titleParts.find(e=>e.innerText.trim()===name);return p?.nextElementSibling;};
   const lock=section('タッチbyロック'),alarm=section('タッチbyアラーム'),notice=section('ご利用前に');
   if(lock&&alarm&&notice){
    const next=root(`<div class="tb-root"><header class="tb-page-heading"><p class="tb-eyebrow">DOWNLOAD</p><h1>アプリを選んで、<br>はじめよう。</h1><p class="tb-lead">使いたい商品に対応する、無料の専用アプリをお選びください。<br>必要なOS・許可・配布状況をご確認のうえご利用ください。</p></header><div class="tb-download-grid"><section class="tb-download-card">${v.icon('lock')}<h2>タッチbyロック</h2>${lock.innerHTML}</section><section class="tb-download-card">${v.icon('alarm')}<h2>タッチbyアラーム</h2>${alarm.innerHTML}</section></div><section class="tb-notice"><h2>ご利用前に</h2>${notice.innerHTML}</section></div>`);
    const old=document.createElement('div');old.className='tb-original';while(main.firstChild)old.appendChild(main.firstChild);old.hidden=true;main.append(old,next);
   }
  }else{
   main.classList.add('tb-document');
   if(path==='/inquiry'){const h=main.querySelector('h1');if(h&&/^contact$/i.test(h.textContent.trim()))h.textContent='お問い合わせ';}
  }
  const mark=document.querySelector('.layout-navHeader .cot-shopLogoText');if(mark){mark.innerHTML='タッチ<span>by</span>';mark.parentElement.setAttribute('aria-label','タッチby公式ストア ホーム');}
  document.querySelectorAll('.cot-navigation-itemLink').forEach(a=>{try{if(new URL(a.href).pathname.replace(/\/$/,'')===location.pathname.replace(/\/$/,''))a.setAttribute('aria-current','page');}catch(_){}});
  const foot=root(v.footer(u)).firstElementChild;footer.prepend(foot);
  parts.filter(oldLink).forEach(p=>p.hidden=true);
  rewriteLinks(main);rewriteLinks(foot);
  const skip=document.createElement('a');skip.className='tb-skip';skip.href='#tb-main';skip.textContent='本文へスキップ';main.id='tb-main';document.body.prepend(skip);
  document.documentElement.classList.add('tb-ready');document.documentElement.dataset.tbPage=kind;
  document.documentElement.dataset.tbDesign='2026-09-25.1';
 }catch(e){console.error('Touchby design could not be applied.',e);}
}
document.addEventListener('DOMContentLoaded',boot,{once:true});window.addEventListener('touchby:design',boot);boot();
})();
