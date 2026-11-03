/* Splash screen controller — shows branded loader, then reveals the site. */
(function () {
  var root = document.documentElement;
  var splash = document.getElementById('splash');
  if (!splash || !root.classList.contains('splash-on')) return;

  var DURATION = 3300; // ms the splash stays before hiding
  var done = false;
  document.body.classList.add('no-scroll');

  var status = splash.querySelector('.splash__status');
  var messages = ['Initialising', 'Loading experience', 'Almost ready'];
  var i = 0;
  var ticker = setInterval(function () {
    i = Math.min(i + 1, messages.length - 1);
    if (status) status.textContent = messages[i];
  }, 1000);

  function finish() {
    if (done) return;
    done = true;
    clearInterval(ticker);
    try { sessionStorage.setItem('saw_splash', '1'); } catch (e) {}
    splash.classList.add('is-hiding');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { root.classList.remove('splash-on'); splash.remove(); }, 800);
  }

  var start = Date.now();
  function ready() { setTimeout(finish, Math.max(0, DURATION - (Date.now() - start))); }
  if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready);
  setTimeout(finish, DURATION + 2500); // hard fallback
  splash.addEventListener('click', finish);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') finish(); });
})();
