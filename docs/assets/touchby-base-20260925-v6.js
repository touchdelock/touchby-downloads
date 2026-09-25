/* Original presentation code. Existing product logos are used without redrawing. */
(function(){
'use strict';
const base=(location.hostname==='localhost'||location.hostname==='127.0.0.1')?'/assets/':'https://touchdelock.github.io/touchby-downloads/assets/';
const name=k=>k==='lock'?'タッチbyロック':'タッチbyアラーム';
const icon=k=>`<img class="tb-app-icon" src="${base}${k}.png" width="64" height="64" alt="" loading="lazy">`;
const card=k=>`<img class="tb-card-face" src="${base}touchby-${k}-card-20260925.svg" width="856" height="540" alt="白地の中央に${k==='lock'?'青いNFC南京錠':'オレンジのNFC目覚まし'}のロゴを配置した、${name(k)}のカードデザイン">`;
const items={lock:'159352373',alarm:'159352397'};
const itemUrl=(k,u)=>u('/items/'+items[k]);
const action=(url,label,secondary=false)=>`<a class="tb-button${secondary?' tb-button--secondary':''}" href="${url}">${label}<span aria-hidden="true">↗</span></a>`;
const price=()=>'<p class="tb-price"><strong>¥1,980</strong><span>1枚・税込・国内送料込み</span></p>';
const availability='<p class="tb-stock-note">在庫・販売状況は購入ページでご確認ください。</p>';
const purchase=(k,u)=>`<section class="tb-purchase" id="tb-purchase" aria-labelledby="tb-purchase-title"><div><h2 id="tb-purchase-title">${name(k)}のカード</h2><p>専用NFCカード 1枚</p></div><div class="tb-purchase-order">${price()}${action(itemUrl(k,u),'購入ページへ')}${availability}</div></section>`;
const cta=u=>`<section class="tb-cta"><h2>アプリを手に入れる。</h2><div><p>対応端末と、現在の配布状況をご確認ください。</p>${action(u('/p/00002'),'ダウンロード')}</div></section>`;
const product=(k,u)=>`<article class="tb-product tb-product--${k}"><a class="tb-product-visual" href="${u(k==='lock'?'/p/00005':'/p/00004')}" aria-label="${name(k)}の詳細">${card(k)}</a><div class="tb-product-heading"><h3>${name(k)}</h3></div><p class="tb-product-desc">${k==='lock'?'使わないアプリを選ぶ。カードにタッチしてロック。<br>もう一度タッチすると、解除できます。':'ベッドから離れた場所にカードを置く。<br>読み取りに行くことが、起きるきっかけに。'}</p><div class="tb-product-links"><a class="tb-text-link" href="${u(k==='lock'?'/p/00005':'/p/00004')}">詳しく見る<span aria-hidden="true">↗</span></a><a class="tb-text-link" href="${itemUrl(k,u)}">カードを購入<span aria-hidden="true">↗</span></a></div></article>`;
const home=(u,faq)=>`<div class="tb-root"><section class="tb-home-hero"><h1><span>スマホを置く。</span><span>朝をはじめる。</span></h1><div class="tb-home-intro"><p>スマホを置く。<br>ベッドから起きる。<br>そのきっかけを、一枚のカードに。</p><a class="tb-text-link" href="#tb-products">2つの商品を見る<span aria-hidden="true">↓</span></a></div></section><section class="tb-section tb-product-section" id="tb-products"><div class="tb-section-label"><h2>ふたつのカード。</h2><p>専用NFCカードと、無料のアプリ。</p></div><div class="tb-products">${product('lock',u)}${product('alarm',u)}</div></section><section class="tb-how"><h2>3ステップで使えます。</h2><div class="tb-steps"><div class="tb-step"><span>01</span><div><h3>カードを選ぶ。</h3><p>アプリの利用を区切りたいときはロック。朝、起きるきっかけにはアラーム。商品に対応する専用アプリを用意します。</p></div></div><div class="tb-step"><span>02</span><div><h3>置く場所を決める。</h3><p>机、リビング、玄関。ロック用は手を伸ばさないと届かない場所に。アラーム用はベッドから離れた場所に。</p></div></div><div class="tb-step"><span>03</span><div><h3>アプリで、読み取る。</h3><p>初回の設定を済ませたら、カードにタッチ。読み取り方や必要な許可は、端末と商品によって異なります。</p></div></div></div></section><section class="tb-faq"><div class="tb-faq-intro"><h2>よくあるご質問。</h2><a class="tb-text-link" href="${u('/inquiry')}">お問い合わせ<span aria-hidden="true">↗</span></a></div><div>${faq}</div></section>${cta(u)}</div>`;
const hero=(kind,u,title,intro)=>`<section class="tb-root tb-product-hero"><div class="tb-product-title"><h1>${title.replace('by','<span class="tb-by">by</span>')}</h1></div><div class="tb-product-hero-body"><figure class="tb-product-visual tb-product-visual--${kind}">${card(kind)}<figcaption>カードのデザインイメージ</figcaption></figure><div class="tb-product-intro"><div class="tb-lead">${intro}</div><div class="tb-product-order">${price()}<div class="tb-actions">${action(itemUrl(kind,u),'カードを購入')}${action(u('/p/00002'),'アプリのダウンロード',true)}<a class="tb-text-link tb-how-link" href="#tb-details">使い方<span aria-hidden="true">↓</span></a></div>${availability}</div></div></div></section>`;
const footer=u=>`<div class="tb-footer"><div><a class="tb-footer-brand" href="${u('')}" aria-label="タッチby ホーム">タッチ<span>by</span></a><p>日々の切り替えを、一枚のカードから。</p></div><nav class="tb-footer-links" aria-label="フッターナビゲーション"><a href="${u('/p/00005')}">タッチbyロック</a><a href="${u('/p/00004')}">タッチbyアラーム</a><a href="${u('/p/00002')}">ダウンロード</a><a href="${u('/inquiry')}">お問い合わせ</a><a href="${u('/p/00007')}">アプリのプライバシーポリシー</a></nav></div>`;
window.TouchbyDesign={icon,card,home,hero,footer,cta,purchase};
window.dispatchEvent(new Event('touchby:design'));
})();

/* Safe enhancement of the existing BASE pages. Disabling this tag restores BASE. */
(function(){
'use strict';
function boot(){
 if(document.readyState==='loading'||!window.TouchbyDesign||document.documentElement.classList.contains('tb-ready'))return;
 const host=location.hostname,preview=location.pathname.match(/^\/shop_preview\/[^/]+/),local=host==='127.0.0.1'||host==='localhost';
 const publicContact=host==='thebase.com'&&/^\/inquiry\/touchdelock-base-shop(?:\/|$)/.test(location.pathname);
 if(!(host==='touchdelock.base.shop'||host==='admin.thebase.com'&&preview||publicContact||local))return;
 const designStyle=document.querySelector('link[rel="stylesheet"][href*="/assets/touchby-base-"]');
 if(designStyle&&!designStyle.sheet){designStyle.addEventListener('load',boot,{once:true});return;}
 const main=document.querySelector('main.layout-main'),footer=document.querySelector('.layout-commonFooter');
 if(!main||!footer||location.pathname.includes('/cart'))return;
 const v=window.TouchbyDesign,base=preview?preview[0]:'',shop='https://touchdelock.base.shop',contact='https://thebase.com/inquiry/touchdelock-base-shop';
 const u=p=>p==='/inquiry'&&!preview&&!local?contact:(publicContact?shop:base)+(p||'/');
 const path=publicContact?'/inquiry':location.pathname.slice(base.length).replace(/\/$/,'')||'/';
 const kind=path==='/p/00005'?'lock':path==='/p/00004'?'alarm':path==='/p/00002'?'download':path==='/'?'home':'document';
 const parts=Array.from(main.querySelectorAll('[data-parts]'));
 const root=html=>{const d=document.createElement('div');d.innerHTML=html;return d;};
 const oldLink=p=>p.getAttribute('data-parts')==='text'&&p.querySelector('a[href*="/p/00007"]')&&p.innerText.trim()==='アプリのプライバシーポリシー';
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
   const old=document.createElement('div');old.className='tb-original';while(main.firstChild)old.appendChild(main.firstChild);old.hidden=true;main.append(old,next);
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
   main.appendChild(root(`<div class="tb-root">${v.purchase(kind,u)}</div>`));
  }else if(kind==='download'){
   const titleParts=parts.filter(p=>p.getAttribute('data-parts')==='title');
   const section=(name)=>{const p=titleParts.find(e=>e.innerText.trim()===name);return p?.nextElementSibling;};
   const lock=section('タッチbyロック'),alarm=section('タッチbyアラーム'),notice=section('ご利用前に');
   if(lock&&alarm&&notice){
    const next=root(`<div class="tb-root"><header class="tb-page-heading"><h1>ダウンロード。</h1><p class="tb-lead">商品に対応するアプリをお選びください。<br>必要なOS・許可・現在の配布状況をご確認のうえご利用ください。</p></header><div class="tb-download-grid"><section class="tb-download-card">${v.icon('lock')}<h2>タッチbyロック</h2>${lock.innerHTML}</section><section class="tb-download-card">${v.icon('alarm')}<h2>タッチbyアラーム</h2>${alarm.innerHTML}</section></div><section class="tb-notice"><h2>ご利用前に</h2>${notice.innerHTML}</section></div>`);
    const old=document.createElement('div');old.className='tb-original';while(main.firstChild)old.appendChild(main.firstChild);old.hidden=true;main.append(old,next);
   }
  }else{
   main.classList.add('tb-document');
   if(path==='/inquiry'){
    main.classList.add('tb-contact');
    const h=main.querySelector('h1');if(h&&/^contact$/i.test(h.textContent.trim()))h.textContent='お問い合わせ';
    main.querySelectorAll('.inquirySection dt').forEach(dt=>{
     const input=dt.nextElementSibling?.querySelector('input[id],textarea[id]');
     if(input&&!dt.querySelector('label')){const label=document.createElement('label');label.htmlFor=input.id;while(dt.firstChild)label.appendChild(dt.firstChild);dt.appendChild(label);}
    });
   }
  }
  document.querySelectorAll('.cot-shopLogoText').forEach(mark=>{mark.innerHTML='タッチ<span>by</span>';mark.parentElement.setAttribute('aria-label','タッチby公式ストア ホーム');});
  const mobileMark=document.querySelector('.cot-spHeaderLogoText');if(mobileMark)mobileMark.innerHTML=`<a href="${u('')}" aria-label="タッチby ホーム">タッチ<span>by</span></a>`;
  document.querySelectorAll('.cot-navigation-itemLink').forEach(a=>{try{if(new URL(a.href).pathname.replace(/\/$/,'')===location.pathname.replace(/\/$/,''))a.setAttribute('aria-current','page');}catch(_){}});
  const foot=root(v.footer(u)).firstElementChild;footer.prepend(foot);
  parts.filter(oldLink).forEach(p=>p.hidden=true);
  rewriteLinks(main);rewriteLinks(foot);
  const skip=document.createElement('a');skip.className='tb-skip';skip.href='#tb-main';skip.textContent='本文へスキップ';main.id='tb-main';document.body.prepend(skip);
  document.documentElement.classList.add('tb-ready');document.documentElement.dataset.tbPage=kind;
  document.documentElement.dataset.tbDesign='2026-09-25.6';
 }catch(e){console.error('Touchby design could not be applied.',e);}
}
document.addEventListener('DOMContentLoaded',boot,{once:true});window.addEventListener('touchby:design',boot);boot();
})();
