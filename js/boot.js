/* Runs in <head> before first paint: flags JS support and decides
   whether the splash screen shows (once per browser session). */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var seen = false;
  try { seen = sessionStorage.getItem('saw_splash') === '1'; } catch (e) {}
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!seen && !reduced) root.classList.add('splash-on');
})();
