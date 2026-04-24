/**
 * Beatpoly — footer.js v3
 * HTML injection only. CSS lives in footer.css (linked in <head>).
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

  var html =
    '<footer id="site-footer">' +
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
        '<div class="bp-footer-col"><h4>Platform</h4><ul>' +
          '<li><a href="' + r + 'platform.html">Platform Overview</a></li>' +
          '<li><a href="' + r + 'api.html">API Reference</a></li>' +
          '<li><a href="' + r + 'methodology.html">Methodology</a></li>' +
          '<li><a href="' + r + 'use-cases.html">Use Cases</a></li>' +
        '</ul>' +
        '<h4 style="margin-top:24px">Company</h4><ul>' +
          '<li><a href="' + r + 'index.html">Home</a></li>' +
          '<li><a href="' + r+lp + 'index.html">Curriculum</a></li>' +
          '<li><a href="' + r + 'about.html">About</a></li>' +
          '<li><a href="' + r + 'consultancy.html">Premium Access</a></li>' +
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

  var root = document.getElementById('footer-root');
  if (root) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    while (tmp.firstChild) {
      root.parentNode.insertBefore(tmp.firstChild, root);
    }
    root.parentNode.removeChild(root);
  }
})();
