/**
 * Beatpoly — Shared Footer v1
 * Self-contained: injects its own CSS + HTML.
 * Usage: <div id="footer-root"></div><script src="footer.js"></script>
 *    or: <div id="footer-root"></div><script src="../footer.js"></script>
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

  /* ── INJECT CSS ── */
  var style = document.createElement('style');
  style.textContent = [
    '#site-footer{background:#1F2937;padding:52px 0 0;margin-top:80px;font-family:"Inter",sans-serif;}',
    '.bp-footer-inner{max-width:1120px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr;gap:48px;padding-bottom:48px;}',
    '.bp-footer-brand-logo{display:flex;align-items:center;gap:9px;font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:14px;letter-spacing:0.04em;color:#fff;margin-bottom:12px;text-decoration:none;}',
    '.bp-footer-brand-mark{width:28px;height:28px;background:#1B6FF8;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700;font-family:"IBM Plex Mono",monospace;}',
    '.bp-footer-tagline{font-size:13px;color:rgba(255,255,255,0.4);max-width:220px;line-height:1.65;}',
    '.bp-footer-socials{display:flex;gap:10px;margin-top:20px;}',
    '.bp-footer-social{width:32px;height:32px;border-radius:7px;border:1px solid rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.45);text-decoration:none;transition:border-color 0.15s,color 0.15s;}',
    '.bp-footer-social:hover{border-color:#1B6FF8;color:#fff;}',
    '.bp-footer-social svg{width:14px;height:14px;fill:currentColor;}',
    '.bp-footer-col h4{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:14px;}',
    '.bp-footer-col ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;}',
    '.bp-footer-col a{font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;transition:color 0.15s;}',
    '.bp-footer-col a:hover{color:#fff;}',
    '.bp-footer-bottom{max-width:1120px;margin:0 auto;padding:22px 24px;border-top:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}',
    '.bp-footer-copy{font-family:"IBM Plex Mono",monospace;font-size:11px;color:rgba(255,255,255,0.25);}',
    '.bp-footer-disc{font-family:"IBM Plex Mono",monospace;font-size:10px;color:rgba(255,255,255,0.18);max-width:560px;line-height:1.6;}',
    '@media(max-width:900px){.bp-footer-inner{grid-template-columns:1fr 1fr;gap:32px;}}',
    '@media(max-width:540px){.bp-footer-inner{grid-template-columns:1fr;}.bp-footer-bottom{flex-direction:column;text-align:center;}}'
  ].join('');
  document.head.appendChild(style);

  /* ── SVG ICONS ── */
  var igSVG = '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
  var ttSVG = '<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.85a4.85 4.85 0 01-1.07-.16z"/></svg>';
  var ytSVG = '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';

  /* ── FOOTER HTML ── */
  var footerHTML = '<footer id="site-footer">' +
    '<div class="bp-footer-inner">' +
      '<div>' +
        '<a href="' + r + 'index.html" class="bp-footer-brand-logo"><div class="bp-footer-brand-mark">BP</div>BEATPOLY</a>' +
        '<p class="bp-footer-tagline">The anti-casino. Beat Polymarket and Kalshi with math, not luck.</p>' +
        '<div class="bp-footer-socials">' +
          '<a href="' + YT + '" class="bp-footer-social" target="_blank" rel="noopener" title="YouTube">' + ytSVG + '</a>' +
          '<a href="' + INSTA + '" class="bp-footer-social" target="_blank" rel="noopener" title="Instagram">' + igSVG + '</a>' +
          '<a href="' + TIKTOK + '" class="bp-footer-social" target="_blank" rel="noopener" title="TikTok">' + ttSVG + '</a>' +
        '</div>' +
      '</div>' +
      '<div class="bp-footer-col"><h4>Learn</h4><ul>' +
        '<li><a href="' + r+lp + 'what-is-a-prediction-market.html">Markets 101</a></li>' +
        '<li><a href="' + r+lp + 'kalshi-explained.html">Platform Guides</a></li>' +
        '<li><a href="' + r+lp + 'expected-value.html">Expected Value</a></li>' +
        '<li><a href="' + r+lp + 'favorite-longshot-bias.html">FLB Strategy</a></li>' +
        '<li><a href="' + r+lp + 'the-72-percent-rule.html">The 72% Rule</a></li>' +
        '<li><a href="' + r+lp + 'crowd-psychology.html">Crowd Psychology</a></li>' +
      '</ul></div>' +
      '<div class="bp-footer-col"><h4>Platforms</h4><ul>' +
        '<li><a href="' + KALSHI + '" target="_blank" rel="noopener">Kalshi (+ Bonus)</a></li>' +
        '<li><a href="' + POLY + '" target="_blank" rel="noopener">Polymarket (+ Bonus)</a></li>' +
      '</ul>' +
      '<h4 style="margin-top:24px">Site</h4><ul>' +
        '<li><a href="' + r + 'index.html">Home</a></li>' +
        '<li><a href="' + r+lp + 'index.html">Curriculum</a></li>' +
        '<li><a href="' + r + 'about.html">About</a></li>' +
        '<li><a href="' + r + 'privacy.html">Privacy</a></li>' +
      '</ul></div>' +
      '<div class="bp-footer-col"><h4>Follow Us</h4><ul>' +
        '<li><a href="' + YT + '" target="_blank" rel="noopener">YouTube &#8599;</a></li>' +
        '<li><a href="' + INSTA + '" target="_blank" rel="noopener">Instagram &#8599;</a></li>' +
        '<li><a href="' + TIKTOK + '" target="_blank" rel="noopener">TikTok &#8599;</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<div class="bp-footer-bottom">' +
      '<span class="bp-footer-copy">&#169; 2026 Beatpoly. All rights reserved.</span>' +
      '<span class="bp-footer-disc">Not financial advice. Trading involves risk. Affiliate links may result in compensation to Beatpoly.</span>' +
    '</div>' +
  '</footer>';

  /* ── INJECT ── */
  var root = document.getElementById('footer-root');
  if (root) {
    var div = document.createElement('div');
    div.innerHTML = footerHTML;
    root.parentNode.insertBefore(div.firstChild, root);
    root.parentNode.removeChild(root);
  }
})();
