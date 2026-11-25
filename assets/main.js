/* =========================================================
   全站共用脚本：导航、入场动效、技能条
   ========================================================= */
(function () {
  // 顶部导航：滚动加深 + 移动端折叠
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('is-solid');
    else header.classList.remove('is-solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // 移动端点导航后收起
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // 入场动效
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(function (el) { io.observe(el); });

  // 技能条按 data-value 涨到目标百分比
  var bars = document.querySelectorAll('.bar i');
  if (bars.length) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var v = el.getAttribute('data-value') || '0';
        el.style.width = v + '%';
        bio.unobserve(el);
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { bio.observe(b); });
  }
})();
