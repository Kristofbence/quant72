/**
 * Beatpoly — nav.js v4 (Enterprise)
 * HTML injection only. CSS in nav.css.
 */
(function () {
  var KALSHI = 'https://kalshi.com/sign-up/?referral=534cc285-9ffd-4cb4-9314-3e0d892e21af';
  var POLY   = 'https://polymarket.com/?r=beatpoly';
  var INSTA  = 'https://www.instagram.com/beatpoly_com';
  var TIKTOK = 'https://www.tiktok.com/@beatpoly';
  var YT     = 'https://www.youtube.com/@beatpoly_com';

  var inLearn = window.location.pathname.indexOf('/learn/') !== -1;
  var r  = inLearn ? '../' : '';
  var lp = inLearn ? '' : 'learn/';

  var igSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" style="display:block"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
  var ttSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" style="display:block"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.85a4.85 4.85 0 01-1.07-.16z"/></svg>';
  var ytSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" style="display:block"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';

  function dd(href, title, sub) {
    return '<a href="' + href + '" class="bp-dd-item">' +
      '<span class="bp-dd-text">' +
        '<span class="bp-dd-title">' + title + '</span>' +
        (sub ? '<span class="bp-dd-sub">' + sub + '</span>' : '') +
      '</span></a>';
  }

  var html =
    '<nav id="site-nav">' +
      '<div class="bp-nav-inner">' +
        '<a href="' + r + 'index.html" class="bp-nav-logo"><div class="bp-nav-mark">BP</div>BEATPOLY</a>' +
        '<ul class="bp-nav-links">' +

          /* Platform */
          '<li><a href="' + r + 'platform.html">Platform <span class="bp-caret">&#9660;</span></a>' +
            '<div class="bp-dropdown" style="width:480px">' +
              '<div class="bp-dd-section">' +
                '<span class="bp-dd-heading">Intelligence Engine</span>' +
                dd(r+'platform.html#resolution','Resolution Risk Scoring','Does this market resolve cleanly?') +
                dd(r+'platform.html#execution','Execution Cost Analytics','Does the edge survive fees and spread?') +
                dd(r+'platform.html#crossvenue','Cross-Venue Equivalence','Are two similar markets actually the same bet?') +
                dd(r+'platform.html#integrity','Market Integrity Alerts','Abnormal flow, whale moves, pre-event activity') +
              '</div>' +
              '<div class="bp-dd-section">' +
                '<span class="bp-dd-heading">API Access</span>' +
                dd(r+'api.html','API Reference','Endpoints, JSON schema, coverage') +
                dd(r+'api.html#request','Request Access','Get API credentials for your team') +
                '<div class="bp-dd-divider"></div>' +
                '<div class="bp-dd-footer"><a href="' + r + 'platform.html">View platform &#8594;</a><a href="' + r + 'api.html">API docs &#8594;</a></div>' +
              '</div>' +
            '</div>' +
          '</li>' +

          /* Use Cases */
          '<li><a href="' + r + 'use-cases.html">Use Cases <span class="bp-caret">&#9660;</span></a>' +
            '<div class="bp-dropdown" style="width:440px">' +
              '<div class="bp-dd-section">' +
                '<span class="bp-dd-heading">Who we serve</span>' +
                dd(r+'use-cases.html#funds','Funds &amp; Prop Shops','Tradeable signals that survive execution') +
                dd(r+'use-cases.html#compliance','Compliance &amp; Risk Teams','Insider flow detection and audit trails') +
                dd(r+'use-cases.html#media','Media &amp; Research','Know which prices are reliable enough to cite') +
                dd(r+'use-cases.html#operators','Data Platforms','Enrich raw feeds with reliability metadata') +
              '</div>' +
              '<div class="bp-dd-section">' +
                '<span class="bp-dd-heading">Resources</span>' +
                dd(r+'methodology.html','Methodology','Dataset, sources, scoring logic') +
                dd(r+'api.html#request','Request Access','') +
              '</div>' +
            '</div>' +
          '</li>' +

          /* Research */
          '<li><a href="' + r + 'research.html">Research</a></li>' +

          /* Learn */
          '<li><a href="' + r + lp + 'index.html">Learn <span class="bp-caret">&#9660;</span></a>' +
            '<div class="bp-dropdown" style="width:500px">' +
              '<div class="bp-dd-section">' +
                '<span class="bp-dd-heading">Research Tracks</span>' +
                dd(r+lp+'index.html#track1','Contract Mechanics &amp; Resolution','Resolution risk, oracle design, why markets resolve differently') +
                dd(r+lp+'index.html#track2','Execution Cost &amp; Liquidity','Spread, depth, fees, slippage, and market usability') +
                dd(r+lp+'index.html#track3','Market Reliability','Reliability scoring, price accuracy, when to trust a price') +
                dd(r+lp+'index.html#track4','Market Integrity &amp; Compliance','Abnormal flow, insider-risk categories, compliance surface') +
              '</div>' +
              '<div class="bp-dd-section">' +
                '<span class="bp-dd-heading">Resources</span>' +
                dd(r+lp+'index.html','Research Library','All articles and tracks') +
                dd(r+'research.html','Research Hub','Reports, case studies, methodology') +
                dd(r+lp+'index.html#devlab','Developer Lab','API integration and automation') +
              '</div>' +
            '</div>' +
          '</li>' +

          /* Company */
          '<li><a href="' + r + 'about.html">Company</a></li>' +

        '</ul>' +
        '<div class="bp-nav-socials">' +
          '<a href="' + YT + '" class="bp-social-icon" target="_blank" rel="noopener" title="YouTube">' + ytSVG + '</a>' +
          '<a href="' + INSTA + '" class="bp-social-icon" target="_blank" rel="noopener" title="Instagram">' + igSVG + '</a>' +
          '<a href="' + TIKTOK + '" class="bp-social-icon" target="_blank" rel="noopener" title="TikTok">' + ttSVG + '</a>' +
        '</div>' +
        '<a href="' + r + 'api.html#request" class="bp-nav-cta">Request Access</a>' +
        '<button class="bp-mob-toggle" id="bp-toggle" aria-label="Open menu">&#9776; Menu</button>' +
      '</div>' +
    '</nav>' +

    '<div class="bp-mob-menu" id="bp-mob">' +
      '<span class="bp-mob-section">Platform</span>' +
      '<a href="' + r + 'platform.html" class="bp-mob-link">Platform Overview</a>' +
      '<a href="' + r + 'platform.html#resolution" class="bp-mob-link">Resolution Risk Scoring</a>' +
      '<a href="' + r + 'platform.html#integrity" class="bp-mob-link">Market Integrity Alerts</a>' +
      '<a href="' + r + 'api.html" class="bp-mob-link">API Reference</a>' +
      '<span class="bp-mob-section">Use Cases</span>' +
      '<a href="' + r + 'use-cases.html#funds" class="bp-mob-link">Funds &amp; Prop Shops</a>' +
      '<a href="' + r + 'use-cases.html#compliance" class="bp-mob-link">Compliance &amp; Risk</a>' +
      '<a href="' + r + 'use-cases.html#media" class="bp-mob-link">Media &amp; Research</a>' +
      '<span class="bp-mob-section">Research Library</span>' +
      '<a href="' + r + lp + 'index.html" class="bp-mob-link">All Tracks</a>' +
      '<a href="' + r + 'research.html" class="bp-mob-link">Research Hub</a>' +
      '<a href="' + r + lp + 'how-contracts-work.html" class="bp-mob-link">How Contracts Work</a>' +
      '<a href="' + r + lp + 'kalshi-vs-polymarket.html" class="bp-mob-link">Kalshi vs. Polymarket</a>' +
      '<a href="' + r + lp + 'crowd-psychology.html" class="bp-mob-link">Market Biases</a>' +
      '<span class="bp-mob-section">Company</span>' +
      '<a href="' + r + 'about.html" class="bp-mob-link">About</a>' +
      '<a href="' + r + 'methodology.html" class="bp-mob-link">Methodology</a>' +
      '<div class="bp-mob-socials">' +
        '<a href="' + YT + '" class="bp-mob-social" target="_blank" rel="noopener">' + ytSVG + ' YouTube</a>' +
        '<a href="' + INSTA + '" class="bp-mob-social" target="_blank" rel="noopener">' + igSVG + ' Instagram</a>' +
        '<a href="' + TIKTOK + '" class="bp-mob-social" target="_blank" rel="noopener">' + ttSVG + ' TikTok</a>' +
      '</div>' +
      '<a href="' + r + 'api.html#request" class="bp-mob-cta">Request API Access &#8594;</a>' +
    '</div>';

  var root = document.getElementById('nav-root');
  if (root) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    while (tmp.firstChild) root.parentNode.insertBefore(tmp.firstChild, root);
    root.parentNode.removeChild(root);
  }

  document.addEventListener('click', function (e) {
    var menu = document.getElementById('bp-mob');
    var toggle = document.getElementById('bp-toggle');
    if (!menu || !toggle) return;
    if (toggle.contains(e.target)) { menu.classList.toggle('open'); }
    else if (!menu.contains(e.target)) { menu.classList.remove('open'); }
  });
})();
