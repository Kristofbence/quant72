/**
 * Beatpoly — Shared Navigation v2
 * Self-contained: injects its own CSS + HTML.
 * Usage: <div id="nav-root"></div><script src="nav.js"></script>
 *    or: <div id="nav-root"></div><script src="../nav.js"></script>
 */
(function () {
  var KALSHI = 'https://kalshi.com/sign-up/?referral=534cc285-9ffd-4cb4-9314-3e0d892e21af';
  var POLY   = 'https://polymarket.com/?r=beatpoly';
  var INSTA  = 'https://www.instagram.com/beatpoly_com';
  var TIKTOK = 'https://www.tiktok.com/@beatpoly';
  var YT     = 'https://youtube.com/@beatpoly';

  var inLearn = window.location.pathname.indexOf('/learn/') !== -1;
  var r  = inLearn ? '../' : '';
  var lp = inLearn ? ''   : 'learn/';

  /* ── INJECT CSS ── */
  var style = document.createElement('style');
  style.textContent = [
    '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap");',
    '#site-nav{position:fixed;top:0;left:0;right:0;z-index:500;background:rgba(255,255,255,0.96);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid #E5E8ED;height:60px;display:flex;align-items:center;font-family:"Inter",sans-serif;}',
    '.bp-nav-inner{max-width:1120px;margin:0 auto;padding:0 24px;width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;}',
    '.bp-nav-logo{display:flex;align-items:center;gap:9px;font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:14px;letter-spacing:0.04em;color:#0F1117;text-decoration:none;flex-shrink:0;}',
    '.bp-nav-mark{width:30px;height:30px;background:#1B6FF8;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:700;font-family:"IBM Plex Mono",monospace;}',
    '.bp-nav-links{display:flex;gap:2px;list-style:none;align-items:center;margin:0;padding:0;}',
    '.bp-nav-links > li{position:relative;}',
    '.bp-nav-links > li > a{display:flex;align-items:center;gap:4px;font-size:14px;font-weight:500;color:#4B5563;text-decoration:none;padding:7px 11px;border-radius:6px;transition:color 0.15s,background 0.15s;white-space:nowrap;cursor:pointer;}',
    '.bp-nav-links > li > a:hover,.bp-nav-links > li > a.bp-active{color:#0F1117;background:#F3F4F6;}',
    '.bp-caret{font-size:8px;transition:transform 0.2s;display:inline-block;}',
    '.bp-nav-links > li:hover > a .bp-caret{transform:rotate(180deg);}',
    /* DROPDOWN */
    '.bp-dropdown{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(-4px);background:#fff;border:1px solid #E5E8ED;border-radius:14px;padding:8px;width:580px;display:none;grid-template-columns:1fr 1fr;gap:2px;box-shadow:0 8px 40px rgba(0,0,0,0.10);z-index:600;}',
    '.bp-nav-links > li:hover .bp-dropdown{display:grid;transform:translateX(-50%) translateY(0);}',
    '.bp-dd-section{padding:8px;}',
    '.bp-dd-heading{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#9CA3AF;display:block;margin-bottom:6px;padding:0 6px;}',
    '.bp-dd-item{display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:8px;text-decoration:none;transition:background 0.12s;}',
    '.bp-dd-item:hover{background:#F9FAFB;}',
    '.bp-dd-num{font-family:"IBM Plex Mono",monospace;font-size:10px;color:#9CA3AF;flex-shrink:0;min-width:20px;margin-top:2px;}',
    '.bp-dd-text{display:flex;flex-direction:column;gap:3px;}',
    '.bp-dd-title{font-size:13px;font-weight:600;color:#0F1117;line-height:1.3;display:block;}',
    '.bp-dd-sub{font-size:11px;color:#6B7280;line-height:1.4;display:block;}',
    '.bp-dd-badge{font-family:"IBM Plex Mono",monospace;font-size:9px;border-radius:3px;padding:2px 6px;display:inline-block;letter-spacing:0.04em;width:fit-content;}',
    '.bp-dd-badge.live{color:#1B6FF8;background:#EEF4FF;border:1px solid rgba(27,111,248,0.2);}',
    '.bp-dd-badge.soon{color:#9CA3AF;background:#F9FAFB;border:1px solid #E5E8ED;}',
    '.bp-dd-divider{grid-column:1/-1;height:1px;background:#F3F4F6;margin:4px 8px;}',
    '.bp-dd-footer{grid-column:1/-1;padding:6px 10px;display:flex;justify-content:space-between;}',
    '.bp-dd-footer a{font-size:12px;color:#1B6FF8;font-weight:500;text-decoration:none;}',
    '.bp-dd-footer a:hover{text-decoration:underline;}',
    /* SOCIAL ICONS */
    '.bp-nav-socials{display:flex;align-items:center;gap:8px;}',
    '.bp-social-icon{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:6px;border:1px solid #E5E8ED;color:#6B7280;transition:border-color 0.15s,color 0.15s;text-decoration:none;}',
    '.bp-social-icon:hover{border-color:#1B6FF8;color:#1B6FF8;}',
    '.bp-social-icon svg{width:15px;height:15px;fill:currentColor;}',
    /* CTA */
    '.bp-nav-cta{background:#1B6FF8;color:#fff;font-size:13px;font-weight:600;padding:8px 18px;border-radius:7px;transition:opacity 0.15s;white-space:nowrap;text-decoration:none;letter-spacing:0.01em;flex-shrink:0;}',
    '.bp-nav-cta:hover{opacity:0.88;}',
    /* MOBILE TOGGLE */
    '.bp-mob-toggle{display:none;background:none;border:1px solid #E5E8ED;color:#6B7280;padding:6px 11px;border-radius:6px;cursor:pointer;font-size:13px;font-family:"Inter",sans-serif;}',
    /* MOBILE MENU */
    '.bp-mob-menu{display:none;position:fixed;top:60px;left:0;right:0;background:#fff;border-bottom:1px solid #E5E8ED;padding:16px;z-index:499;max-height:calc(100vh - 60px);overflow-y:auto;box-shadow:0 6px 24px rgba(0,0,0,0.07);}',
    '.bp-mob-menu.open{display:block;}',
    '.bp-mob-section{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#9CA3AF;padding:12px 8px 6px;display:block;}',
    '.bp-mob-link{display:block;padding:10px 8px;font-size:14px;font-weight:500;color:#4B5563;border-radius:6px;text-decoration:none;}',
    '.bp-mob-link:hover{color:#0F1117;background:#F9FAFB;}',
    '.bp-mob-socials{display:flex;gap:12px;padding:10px 8px 6px;}',
    '.bp-mob-social{font-size:13px;color:#6B7280;text-decoration:none;display:flex;align-items:center;gap:5px;}',
    '.bp-mob-social:hover{color:#1B6FF8;}',
    '.bp-mob-cta{display:block;background:#1B6FF8;color:#fff;font-size:14px;font-weight:600;padding:13px;border-radius:8px;text-align:center;margin-top:12px;text-decoration:none;}',
    '@media(max-width:960px){.bp-nav-links{display:none;}.bp-nav-socials{display:none;}.bp-mob-toggle{display:block;}}'
  ].join('');
  document.head.appendChild(style);

  /* ── SVG ICONS ── */
  var igSVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
  var ttSVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.85a4.85 4.85 0 01-1.07-.16z"/></svg>';
  var ytSVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';

  /* ── NAV HTML ── */
  var navHTML = '<nav id="site-nav">' +
    '<div class="bp-nav-inner">' +
      '<a href="' + r + 'index.html" class="bp-nav-logo"><div class="bp-nav-mark">BP</div>BEATPOLY</a>' +
      '<ul class="bp-nav-links">' +
        '<li>' +
          '<a href="' + r + lp + 'index.html">Learn <span class="bp-caret">&#9660;</span></a>' +
          '<div class="bp-dropdown">' +
            '<div class="bp-dd-section">' +
              '<span class="bp-dd-heading">Beginner</span>' +
              mkItem(r+lp+'what-is-a-prediction-market.html','01','Prediction Markets 101','What they are, how contracts work','live','4 live') +
              mkItem(r+lp+'kalshi-explained.html','02','Your Platforms','Kalshi &amp; Polymarket','live','3 live') +
              mkItem(r+lp+'expected-value.html','03','The Math Foundation','EV, FLB, 72% Rule, Psychology','live','4 live') +
              mkItem(r+lp+'index.html#ch4','04','Core Strategies','Free Donut, 88&#162; Rule, Maker Edge','soon','Soon') +
            '</div>' +
            '<div class="bp-dd-section">' +
              '<span class="bp-dd-heading">Advanced</span>' +
              mkItem(r+lp+'kalshi-strategies.html','05','Kalshi Strategies','','soon','Soon') +
              mkItem(r+lp+'polymarket-strategies.html','06','Polymarket Strategies','','soon','Soon') +
              mkItem(r+lp+'risk-management.html','07','Risk &amp; Bankroll','','soon','Soon') +
              mkItem(r+lp+'advanced-algorithmic.html','08','Advanced &amp; Algo','','soon','Soon') +
              '<div class="bp-dd-divider"></div>' +
              '<div class="bp-dd-footer"><a href="' + r+lp + 'index.html">View full curriculum &#8594;</a><a href="' + r+lp + 'what-is-a-prediction-market.html">Start Ch.01 &#8594;</a></div>' +
            '</div>' +
          '</div>' +
        '</li>' +
        '<li><a href="' + r + 'index.html#videos">Videos</a></li>' +
        '<li><a href="' + r + 'about.html">About</a></li>' +
        '<li><a href="' + r + 'index.html#community">Community</a></li>' +
        '<li><a href="' + r + 'index.html#platforms">Get Started</a></li>' +
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
    '<a href="' + r+lp + 'what-is-a-prediction-market.html" class="bp-mob-link">Ch.01 &#8212; Prediction Markets 101</a>' +
    '<a href="' + r+lp + 'kalshi-explained.html" class="bp-mob-link">Ch.02 &#8212; Platform Guides</a>' +
    '<a href="' + r+lp + 'expected-value.html" class="bp-mob-link">Ch.03 &#8212; The Math Foundation</a>' +
    '<span class="bp-mob-section" style="margin-top:4px">Coming Soon</span>' +
    '<a href="' + r+lp + 'index.html#ch4" class="bp-mob-link" style="opacity:0.55">Ch.04 &#8212; Core Strategies</a>' +
    '<a href="' + r+lp + 'kalshi-strategies.html" class="bp-mob-link" style="opacity:0.55">Ch.05 &#8212; Kalshi Strategies</a>' +
    '<a href="' + r+lp + 'polymarket-strategies.html" class="bp-mob-link" style="opacity:0.55">Ch.06 &#8212; Polymarket Strategies</a>' +
    '<a href="' + r+lp + 'risk-management.html" class="bp-mob-link" style="opacity:0.55">Ch.07 &#8212; Risk Management</a>' +
    '<a href="' + r+lp + 'advanced-algorithmic.html" class="bp-mob-link" style="opacity:0.55">Ch.08 &#8212; Advanced &amp; Algo</a>' +
    '<span class="bp-mob-section" style="margin-top:4px">More</span>' +
    '<a href="' + r + 'about.html" class="bp-mob-link">About Beatpoly</a>' +
    '<a href="' + r + 'index.html#community" class="bp-mob-link">Community &amp; Newsletter</a>' +
    '<div class="bp-mob-socials">' +
      '<a href="' + YT + '" class="bp-mob-social" target="_blank" rel="noopener">' + ytSVG.replace('width:15px;height:15px','width:14px;height:14px') + ' YouTube</a>' +
      '<a href="' + INSTA + '" class="bp-mob-social" target="_blank" rel="noopener">' + igSVG.replace('width:15px;height:15px','width:14px;height:14px') + ' Instagram</a>' +
      '<a href="' + TIKTOK + '" class="bp-mob-social" target="_blank" rel="noopener">' + ttSVG.replace('width:15px;height:15px','width:14px;height:14px') + ' TikTok</a>' +
    '</div>' +
    '<a href="' + KALSHI + '" class="bp-mob-cta" target="_blank" rel="noopener">GET KALSHI BONUS &#8594;</a>' +
  '</div>';

  function mkItem(href, num, title, sub, badgeClass, badgeText) {
    return '<a href="' + href + '" class="bp-dd-item">' +
      '<span class="bp-dd-num">' + num + '</span>' +
      '<span class="bp-dd-text">' +
        '<span class="bp-dd-title">' + title + '</span>' +
        (sub ? '<span class="bp-dd-sub">' + sub + '</span>' : '') +
        '<span class="bp-dd-badge ' + badgeClass + '">' + badgeText + '</span>' +
      '</span>' +
    '</a>';
  }

  /* ── INJECT ── */
  var root = document.getElementById('nav-root');
  if (root) {
    var div = document.createElement('div');
    div.innerHTML = navHTML;
    root.parentNode.insertBefore(div.firstChild, root);
    root.parentNode.insertBefore(div.firstChild, root);
    root.parentNode.removeChild(root);
  }

  /* ── MOBILE TOGGLE ── */
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
