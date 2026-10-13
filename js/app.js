(function () {
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.print-btn').forEach(function (b) {
    b.hidden = false; b.addEventListener('click', function () { window.print(); });
  });
  var q = document.getElementById('q'); if (!q) return;
  var aud = document.getElementById('aud'), cat = document.getElementById('cat');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.res'));
  var count = document.getElementById('count'), empty = document.getElementById('empty');
  function run() {
    var t = q.value.trim().toLowerCase(), n = 0;
    cards.forEach(function (c) {
      var okA = !aud.value || c.dataset.audience === aud.value || c.dataset.audience === 'both';
      var okC = !cat.value || c.dataset.category === cat.value;
      var okT = !t || t.split(/\s+/).every(function (w) { return c.dataset.text.indexOf(w) > -1; });
      var show = okA && okC && okT; c.hidden = !show; if (show) n++;
    });
    count.textContent = n + (n === 1 ? ' resource' : ' resources');
    empty.hidden = n !== 0;
  }
  [q, aud, cat].forEach(function (el) { el.addEventListener('input', run); el.addEventListener('change', run); });
})();
