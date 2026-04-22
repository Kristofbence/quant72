/**
 * Beatpoly — nav.js v3
 * HTML injection only. CSS lives in nav.css (linked in <head>).
 */
(function () {
  var KALSHI = 'https://kalshi.com/sign-up/?referral=534cc285-9ffd-4cb4-9314-3e0d892e21af';
  var POLY   = 'https://polymarket.com/?r=beatpoly';
  var INSTA  = 'https://www.instagram.com/beatpoly_com';
  var TIKTOK = 'https://www.tiktok.com/@beatpoly';
  var YT     = 'https://youtube.com/@beatpoly';

  var inLearn = window.location.pathname.indexOf('/learn/') !== -1;
  var r  = inLearn ? '../' : '';
  var lp = inLearn ? '' : 'learn/';

  var igSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style="display:block;flex-shrink:0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
  var ttSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style="display:block;flex-shrink:0"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.85a4.85 4.85 0 01-1.07-.16z"/></svg>';
  var ytSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style="display:block;flex-shrink:0"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';

  function item(href, num, title, sub, cls, badge) {
    return '<a href="' + href + '" class="bp-dd-item">' +
      '<span class="bp-dd-num">' + num + '</span>' +
      '<span class="bp-dd-text">' +
        '<span class="bp-dd-title">' + title + '</span>' +
        (sub ? '<span class="bp-dd-sub">' + sub + '</span>' : '') +
        '<span class="bp-dd-badge ' + cls + '">' + badge + '</span>' +
      '</span></a>';
  }

  var html =
    '<nav id="site-nav">' +
      '<div class="bp-nav-inner">' +
        '<a href="' + r + 'index.html" class="bp-nav-logo"><div class="bp-nav-mark">BP</div>BEATPOLY</a>' +
        '<ul class="bp-nav-links">' +
          '<li><a href="' + lp+'index.html">Learn <span class="bp-caret">&#9660;</span></a>' +
            '<div class="bp-dropdown">' +
              '<div class="bp-dd-section"><span class="bp-dd-heading">Beginner</span>' +
                item(lp+'what-is-a-prediction-market.html','01','Prediction Markets 101','What they are &amp; how contracts work','live','4 live') +
                item(lp+'kalshi-explained.html','02','Your Platforms','Kalshi &amp; Polymarket','live','3 live') +
                item(lp+'expected-value.html','03','The Math Foundation','EV, FLB, 72% Rule, Psychology','live','4 live') +
                item(lp+'index.html#ch4','04','Core Strategies','Free Donut, 88&#162; Rule, Maker Edge','soon','Soon') +
              '</div>' +
              '<div class="bp-dd-section"><span class="bp-dd-heading">Advanced</span>' +
                item(lp+'kalshi-strategies.html','05','Kalshi Strategies','','soon','Soon') +
                item(lp+'polymarket-strategies.html','06','Polymarket Strategies','','soon','Soon') +
                item(lp+'risk-management.html','07','Risk &amp; Bankroll','','soon','Soon') +
                item(lp+'advanced-algorithmic.html','08','Advanced &amp; Algo','','soon','Soon') +
                '<div class="bp-dd-divider"></div>' +
                '<div class="bp-dd-footer">' +
                  '<a href="' + lp+'index.html">View full curriculum &#8594;</a>' +
                  '<a href="' + lp+'what-is-a-prediction-market.html">Start Ch.01 &#8594;</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</li>' +
          '<li><a href="' + r + 'index.html#videos">Videos</a></li>' +
          '<li><a href="' + r + 'about.html">About</a></li>' +
          '<li><a href="' + r + 'index.html#community">Community</a></li>' +
          '<li><a href="' + r + 'consultancy.html" style="color:#D97706;font-weight:600">Build a Bot &#8599;</a></li>' +
        '</ul>' +
        '<div class="bp-nav-socials">' +
          '<a href="' + YT + '" class="bp-social-icon" target="_blank" rel="noopener" title="YouTube">' + ytSVG + '</a>' +
          '<a href="' + INSTA + '" class="bp-social-icon" target="_blank" rel="noopener" title="Instagram">' + igSVG + '</a>' +
          '<a href="' + TIKTOK + '" class="bp-social-icon" target="_blank" rel="noopener" title="TikTok">' + ttSVG + '</a>' +
        '</div>' +
        '<a href="' + KALSHI + '" class="bp-nav-cta" target="_blank" rel="noopener">GET BONUS &#8594;</a>' +
        '<button class="bp-mob-toggle" id="bp-toggle" aria-label="Open menu">&#9776; Menu</button>' +
      '</div>' +
    '</nav>' +
    '<div class="bp-mob-menu" id="bp-mob">' +
      '<span class="bp-mob-section">Chapters &#8212; Live Now</span>' +
      '<a href="' + lp+'what-is-a-prediction-market.html" class="bp-mob-link">Ch.01 &#8212; Prediction Markets 101</a>' +
      '<a href="' + lp+'kalshi-explained.html" class="bp-mob-link">Ch.02 &#8212; Platform Guides</a>' +
      '<a href="' + lp+'expected-value.html" class="bp-mob-link">Ch.03 &#8212; The Math Foundation</a>' +
      '<span class="bp-mob-section">Coming Soon</span>' +
      '<a href="' + lp+'index.html#ch4" class="bp-mob-link" style="opacity:0.55">Ch.04 &#8212; Core Strategies</a>' +
      '<a href="' + lp+'kalshi-strategies.html" class="bp-mob-link" style="opacity:0.55">Ch.05 &#8212; Kalshi Strategies</a>' +
      '<a href="' + lp+'polymarket-strategies.html" class="bp-mob-link" style="opacity:0.55">Ch.06 &#8212; Polymarket Strategies</a>' +
      '<a href="' + lp+'risk-management.html" class="bp-mob-link" style="opacity:0.55">Ch.07 &#8212; Risk Management</a>' +
      '<a href="' + lp+'advanced-algorithmic.html" class="bp-mob-link" style="opacity:0.55">Ch.08 &#8212; Advanced &amp; Algo</a>' +
      '<span class="bp-mob-section">More</span>' +
      '<a href="' + r + 'about.html" class="bp-mob-link">About Beatpoly</a>' +
      '<a href="' + r + 'consultancy.html" class="bp-mob-link" style="color:#D97706;font-weight:600">&#128736; Build a Bot</a>' +
      '<a href="' + r + 'index.html#community" class="bp-mob-link">Community &amp; Newsletter</a>' +
      '<div class="bp-mob-socials">' +
        '<a href="' + YT + '" class="bp-mob-social" target="_blank" rel="noopener">' + ytSVG + ' YouTube</a>' +
        '<a href="' + INSTA + '" class="bp-mob-social" target="_blank" rel="noopener">' + igSVG + ' Instagram</a>' +
        '<a href="' + TIKTOK + '" class="bp-mob-social" target="_blank" rel="noopener">' + ttSVG + ' TikTok</a>' +
      '</div>' +
      '<a href="' + KALSHI + '" class="bp-mob-cta" target="_blank" rel="noopener">GET KALSHI BONUS &#8594;</a>' +
    '</div>';

  var root = document.getElementById('nav-root');
  if (root) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    while (tmp.firstChild) {
      root.parentNode.insertBefore(tmp.firstChild, root);
    }
    root.parentNode.removeChild(root);
  }

  document.addEventListener('click', function (e) {
    var menu   = document.getElementById('bp-mob');
    var toggle = document.getElementById('bp-toggle');
    if (!menu || !toggle) return;
    if (toggle.contains(e.target)) {
      menu.classList.toggle('open');
    } else if (!menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
})();
