/* Siddharth Web World — site behaviour */
(function () {
  'use strict';
  var WA_NUMBER = '918130172667';

  /* ---- Sticky header shadow ---- */
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 20);
    if (toTop) toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  function closeNav() {
    if (!nav) return;
    nav.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('no-scroll', open);
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    window.addEventListener('resize', function () { if (window.innerWidth > 980) closeNav(); });
  }
  /* Services megamenu: click toggles on touch / mobile */
  document.querySelectorAll('.has-mega > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.has-mega.open').forEach(function (li) {
      if (window.innerWidth > 980 && !li.contains(e.target)) { li.classList.remove('open'); li.firstElementChild.setAttribute('aria-expanded', 'false'); }
    });
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  /* ---- Counters ---- */
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var sep = el.hasAttribute('data-sep');
    var dur = 1800, t0 = null;
    function fmt(n) { return sep ? n.toLocaleString('en-IN') : String(n); }
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = fmt(Math.round(target * eased)) + '<em>' + suffix + '</em>';
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { runCounter(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---- Contact form → WhatsApp redirect ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    var params = new URLSearchParams(window.location.search);
    if (params.get('service')) {
      var sel = form.querySelector('select[name="service"]');
      if (sel) sel.value = params.get('service');
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('.field').forEach(function (f) {
        var input = f.querySelector('input, select, textarea');
        if (!input) return;
        var ok = input.value.trim() !== '' && (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()));
        f.classList.toggle('invalid', !ok);
        if (!ok) valid = false;
      });
      if (!valid) { var bad = form.querySelector('.invalid input, .invalid select, .invalid textarea'); if (bad) bad.focus(); return; }
      var d = new FormData(form);
      var text = 'Name: ' + d.get('name') + '\n' +
                 'Email: ' + d.get('email') + '\n' +
                 'Service: ' + d.get('service') + '\n' +
                 'Query: ' + d.get('message');
      var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank', 'noopener');
      var note = form.querySelector('.form-status');
      if (note) { note.textContent = 'Opening WhatsApp with your enquiry…'; note.hidden = false; }
    });
    form.addEventListener('input', function (e) { var f = e.target.closest('.field'); if (f) f.classList.remove('invalid'); });
  }

  /* ---- Footer year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
