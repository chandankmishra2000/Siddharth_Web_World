/* Services page — click a service to see its details in a panel. */
(function () {
  'use strict';
  var DATA = {
    web: { cat: 'Core Engineering', icon: 'web', title: 'Website Design & Development',
      tag: 'Customised, responsive websites built to represent your brand and convert visitors.',
      desc: 'We design and develop websites around your business goals — clean layouts, fast loading and a structure that makes it easy for customers to contact you.',
      inc: ['Custom design matched to your brand', 'Mobile-friendly, responsive build', 'SEO-ready structure and page speed basics', 'Contact forms and WhatsApp integration', 'Testing before launch and post-launch support'],
      fit: 'Businesses launching a new site or replacing an outdated one.' },
    ecommerce: { cat: 'Core Engineering', icon: 'cart', title: 'E-commerce Platforms',
      tag: 'Online stores designed to turn browsers into buyers.',
      desc: 'From product catalogues to checkout, we build digital storefronts that are easy to manage and simple for customers to shop on.',
      inc: ['Product catalogue and category management', 'Cart and checkout flow', 'Payment gateway integration', 'Order management basics', 'Mobile-first shopping experience'],
      fit: 'Retailers and brands ready to sell products online.' },
    mobile: { cat: 'Core Engineering', icon: 'mobile', title: 'Mobile App Development',
      tag: 'iOS and Android applications for your customers and your team.',
      desc: 'We plan, design and build mobile apps that are intuitive to use and built to grow with your business.',
      inc: ['Android and iOS development', 'UI/UX design for mobile', 'Backend and API integration', 'Testing across devices', 'Store submission guidance'],
      fit: 'Companies wanting a branded app or an internal mobile tool.' },
    crm: { cat: 'Core Engineering', icon: 'users', title: 'CRM Development',
      tag: 'A customer and lead management system shaped around how you sell.',
      desc: 'Instead of forcing your process into generic software, we build a CRM around your pipeline, team roles and reporting needs.',
      inc: ['Lead and customer database', 'Follow-up and task tracking', 'Team roles and permissions', 'Reports and dashboards', 'Integrations with your existing tools'],
      fit: 'Sales and service teams managing many leads or clients.' },
    erp: { cat: 'Core Engineering', icon: 'layers', title: 'ERP Development',
      tag: 'One platform to connect your operations.',
      desc: 'We build ERP systems that bring departments together — so data is entered once and visible to everyone who needs it.',
      inc: ['Modules matched to your operations', 'Centralised data and reporting', 'User roles and approvals', 'Scalable architecture', 'Training and support'],
      fit: 'Growing organisations juggling spreadsheets and disconnected tools.' },
    graphic: { cat: 'Design & Creative', icon: 'pen', title: 'Graphic Designing',
      tag: 'Creative visuals for digital and print.',
      desc: 'Social media creatives, promotional material and marketing collateral designed to look professional and stay consistent with your brand.',
      inc: ['Social media post and ad creatives', 'Brochures, flyers and banners', 'Presentation and document design', 'Source files for future edits'],
      fit: 'Brands needing regular, consistent visual content.' },
    uiux: { cat: 'Design & Creative', icon: 'layout', title: 'UI/UX Wireframing',
      tag: 'Plan the experience before a single line of code.',
      desc: 'We map user journeys and create wireframes and interface designs so you can review the structure and flow before development begins.',
      inc: ['User flow mapping', 'Wireframes for web and mobile', 'Interface (UI) design', 'Clickable prototypes where needed'],
      fit: 'Anyone building a website, app or software product.' },
    brand: { cat: 'Design & Creative', icon: 'badge', title: 'Brand Identity Kits',
      tag: 'A consistent identity across every touchpoint.',
      desc: 'We define how your brand looks — logo usage, colours, typography and supporting graphics — and package it into a kit your team can use.',
      inc: ['Logo and usage guidance', 'Colour palette and typography', 'Stationery and social templates', 'Brand guideline document'],
      fit: 'New businesses and brands refreshing their look.' },
    assets: { cat: 'Design & Creative', icon: 'image', title: 'Digital Assets',
      tag: 'Ready-to-use assets for every channel.',
      desc: 'Banners, icons, illustrations and web graphics prepared in the right sizes and formats for your website, ads and social profiles.',
      inc: ['Web and ad banners', 'Icons and illustrations', 'Social profile and cover graphics', 'Optimised file formats'],
      fit: 'Teams running campaigns across multiple platforms.' },
    strategy: { cat: 'Digital Marketing & Growth', icon: 'chart', title: 'Digital Marketing Strategy',
      tag: 'A clear plan tied to your goals and budget.',
      desc: 'We review your business, audience and competition, then recommend the channels and actions most likely to bring you enquiries.',
      inc: ['Audience and competitor review', 'Channel and budget recommendations', 'Content and campaign planning', 'Performance tracking setup'],
      fit: 'Businesses unsure where to focus their marketing effort.' },
    seo: { cat: 'Digital Marketing & Growth', icon: 'search', title: 'Search Engine Optimization (SEO)',
      tag: 'Get found by customers already searching for you.',
      desc: 'We improve your site\'s visibility in search results through on-page optimisation, technical fixes and content that matches what people search for.',
      inc: ['Keyword research', 'On-page and technical SEO', 'Content recommendations', 'Local search optimisation', 'Progress reporting'],
      fit: 'Businesses that want steady, organic enquiries.' },
    ads: { cat: 'Digital Marketing & Growth', icon: 'target', title: 'Google Ads Management',
      tag: 'Paid search campaigns built to convert.',
      desc: 'We set up and manage Google Ads campaigns — from keywords and ad copy to landing pages and ongoing optimisation.',
      inc: ['Campaign setup and keyword targeting', 'Ad copywriting', 'Conversion tracking', 'Budget and bid optimisation', 'Regular performance reports'],
      fit: 'Businesses wanting faster, measurable lead flow.' },
    smo: { cat: 'Digital Marketing & Growth', icon: 'share', title: 'Social Media Optimization (SMO)',
      tag: 'A consistent, engaging presence on social platforms.',
      desc: 'We optimise your profiles and plan content so your brand looks active, credible and easy to engage with.',
      inc: ['Profile setup and optimisation', 'Content calendar', 'Creative posts and captions', 'Community engagement guidance'],
      fit: 'Brands building awareness and trust on social media.' },
    paid: { cat: 'Digital Marketing & Growth', icon: 'mega', title: 'Social Media Paid Campaigns',
      tag: 'Targeted ads that put your offer in front of the right people.',
      desc: 'We plan and run paid campaigns on social platforms, including Meta ads, aimed at generating leads and sales.',
      inc: ['Audience targeting', 'Ad creative and copy', 'Lead forms and landing pages', 'A/B testing and optimisation', 'Spend and result reporting'],
      fit: 'Businesses ready to scale reach with paid promotion.' },
    whatsapp: { cat: 'Digital Marketing & Growth', icon: 'chat', title: 'WhatsApp Marketing',
      tag: 'Reach customers directly where they already chat.',
      desc: 'We help you use WhatsApp for promotions, updates and enquiries — including click-to-chat buttons and enquiry forms that open straight in WhatsApp.',
      inc: ['Click-to-WhatsApp setup', 'Campaign and broadcast planning', 'Message templates', 'Website-to-WhatsApp enquiry flow'],
      fit: 'Businesses that sell or support through conversations.' },
    leads: { cat: 'Digital Marketing & Growth', icon: 'star', title: 'Targeted Lead Generation',
      tag: 'Qualified prospects delivered to your inbox.',
      desc: 'We combine landing pages, ads and follow-up channels to attract people who are actually interested in what you offer.',
      inc: ['Landing page and offer setup', 'Targeted campaigns', 'Lead capture forms', 'Lead handover to WhatsApp or email'],
      fit: 'Teams that need a predictable flow of enquiries.' },
    trademark: { cat: 'Business Support', icon: 'shield', title: 'Trademark Registration',
      tag: 'Protect your brand name and logo.',
      desc: 'We guide you through registering your brand so your name and identity are legally protected as you grow.',
      inc: ['Brand name and logo guidance', 'Application filing support', 'Document preparation', 'Status follow-up'],
      fit: 'Businesses that want to secure their brand identity.' }
  };

  var modal = document.getElementById('svc-modal');
  if (!modal) return;
  var el = {
    icon: modal.querySelector('[data-f="icon"]'), cat: modal.querySelector('[data-f="cat"]'),
    title: modal.querySelector('[data-f="title"]'), tag: modal.querySelector('[data-f="tag"]'),
    desc: modal.querySelector('[data-f="desc"]'), inc: modal.querySelector('[data-f="inc"]'),
    fit: modal.querySelector('[data-f="fit"]'), cta: modal.querySelector('[data-f="cta"]'),
    rel: modal.querySelector('[data-f="rel"]')
  };
  var lastFocus = null;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function fill(key) {
    var d = DATA[key]; if (!d) return false;
    el.icon.innerHTML = '<svg aria-hidden="true"><use href="#i-' + d.icon + '"/></svg>';
    el.cat.textContent = d.cat;
    el.title.textContent = d.title;
    el.tag.textContent = d.tag;
    el.desc.textContent = d.desc;
    el.inc.innerHTML = d.inc.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('');
    el.fit.textContent = d.fit;
    el.cta.href = 'contact.html?service=' + encodeURIComponent(d.title);
    el.rel.innerHTML = Object.keys(DATA).filter(function (k) { return k !== key && DATA[k].cat === d.cat; })
      .map(function (k) { return '<button type="button" class="chip" data-svc="' + k + '">' + esc(DATA[k].title) + '</button>'; }).join('');
    modal.querySelector('.svc-modal__body').scrollTop = 0;
    return true;
  }

  function open(key, push) {
    if (!fill(key)) return;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('no-scroll');
    requestAnimationFrame(function () { modal.classList.add('is-open'); });
    modal.querySelector('.svc-modal__close').focus();
    document.querySelectorAll('.mini[aria-expanded]').forEach(function (b) { b.setAttribute('aria-expanded', String(b.dataset.svc === key)); });
    if (push !== false) { try { history.replaceState(null, '', '#' + key); } catch (e) {} }
  }
  function close() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { modal.hidden = true; }, 250);
    document.querySelectorAll('.mini[aria-expanded]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-svc]');
    if (t && !modal.hidden && modal.contains(t)) { fill(t.dataset.svc); try { history.replaceState(null, '', '#' + t.dataset.svc); } catch (x) {} return; }
    if (t) { open(t.dataset.svc); return; }
    if (e.target.closest('[data-close]')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') { // simple focus trap
      var f = modal.querySelectorAll('button, a[href]');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Deep links: services.html#seo or services.html?s=seo */
  function fromUrl() {
    var key = (location.hash || '').slice(1) || new URLSearchParams(location.search).get('s');
    if (key && DATA[key]) {
      var card = document.querySelector('.mini[data-svc="' + key + '"]');
      if (card) card.scrollIntoView({ block: 'center' });
      open(key, false);
    }
  }
  window.addEventListener('hashchange', fromUrl);
  fromUrl();
})();
