/**
 * Beatpoly — Shared Navigation
 * Drop <div id="nav-root"></div> + <script src="/nav.js"></script> on any page.
 * Automatically adjusts paths based on page depth.
 */
(function() {
  const KALSHI = "https://kalshi.com/sign-up/?referral=534cc285-9ffd-4cb4-9314-3e0d892e21af";
  const POLY   = "https://polymarket.com/?r=beatpoly";
  const INSTA  = "https://www.instagram.com/beatpoly_com";
  const TIKTOK = "https://www.tiktok.com/@beatpoly";
  const YT     = "https://youtube.com/@beatpoly";

  // Detect depth: are we inside /learn/ ?
  const inLearn = window.location.pathname.includes('/learn/');
  const r  = inLearn ? '../' : '';        // root prefix
  const lp = inLearn ? ''   : 'learn/';  // learn prefix

  const nav = `
<nav id="site-nav">
  <div class="nav-inner">
    <a href="${r}index.html" class="nav-logo">
      <div class="nav-logo-mark">BP</div>
      BEATPOLY
    </a>
    <ul class="nav-links">
      <li>
        <a href="${r}${lp}index.html">Learn &#9660;</a>
        <div class="dropdown">
          <div class="dropdown-section">
            <span class="dropdown-heading">Beginner</span>
            <a href="${r}${lp}what-is-a-prediction-market.html" class="dropdown-item">
              <span class="dropdown-item-num">01</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Prediction Markets 101</span>
                <span class="dropdown-item-sub">What they are, how contracts work</span>
                <span class="dropdown-item-badge live">4 live</span>
              </span>
            </a>
            <a href="${r}${lp}kalshi-explained.html" class="dropdown-item">
              <span class="dropdown-item-num">02</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Your Platforms</span>
                <span class="dropdown-item-sub">Kalshi &amp; Polymarket</span>
                <span class="dropdown-item-badge live">3 live</span>
              </span>
            </a>
            <a href="${r}${lp}expected-value.html" class="dropdown-item">
              <span class="dropdown-item-num">03</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">The Math Foundation</span>
                <span class="dropdown-item-sub">EV, FLB, 72% Rule, Psychology</span>
                <span class="dropdown-item-badge live">4 live</span>
              </span>
            </a>
            <a href="${r}${lp}index.html#ch4" class="dropdown-item">
              <span class="dropdown-item-num">04</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Core Strategies</span>
                <span class="dropdown-item-sub">Free Donut, 88&#162; Rule, Maker Edge</span>
                <span class="dropdown-item-badge">Soon</span>
              </span>
            </a>
          </div>
          <div class="dropdown-section">
            <span class="dropdown-heading">Advanced</span>
            <a href="${r}${lp}kalshi-strategies.html" class="dropdown-item">
              <span class="dropdown-item-num">05</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Kalshi Strategies</span>
                <span class="dropdown-item-badge">Soon</span>
              </span>
            </a>
            <a href="${r}${lp}polymarket-strategies.html" class="dropdown-item">
              <span class="dropdown-item-num">06</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Polymarket Strategies</span>
                <span class="dropdown-item-badge">Soon</span>
              </span>
            </a>
            <a href="${r}${lp}risk-management.html" class="dropdown-item">
              <span class="dropdown-item-num">07</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Risk &amp; Bankroll</span>
                <span class="dropdown-item-badge">Soon</span>
              </span>
            </a>
            <a href="${r}${lp}advanced-algorithmic.html" class="dropdown-item">
              <span class="dropdown-item-num">08</span>
              <span class="dropdown-item-text">
                <span class="dropdown-item-title">Advanced &amp; Algo</span>
                <span class="dropdown-item-badge">Soon</span>
              </span>
            </a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-footer">
              <a href="${r}${lp}index.html">View full curriculum &#8594;</a>
              <a href="${r}${lp}what-is-a-prediction-market.html">Start Ch.01 &#8594;</a>
            </div>
          </div>
        </div>
      </li>
      <li><a href="${r}index.html#videos">Videos</a></li>
      <li><a href="${r}about.html">About</a></li>
      <li><a href="${r}index.html#community">Community</a></li>
      <li><a href="${r}index.html#platforms">Get Started</a></li>
    </ul>
    <a href="${KALSHI}" class="nav-cta" target="_blank" rel="noopener">GET BONUS &#8594;</a>
    <button class="nav-mobile-toggle" id="nav-toggle" aria-label="Open menu">&#9776; Menu</button>
  </div>
</nav>

<div class="nav-mobile-menu" id="mob-menu">
  <span class="mobile-section-title">Chapters — Live Now</span>
  <a href="${r}${lp}what-is-a-prediction-market.html" class="mobile-link">Ch.01 &#8212; Prediction Markets 101</a>
  <a href="${r}${lp}kalshi-explained.html" class="mobile-link">Ch.02 &#8212; Platform Guides</a>
  <a href="${r}${lp}expected-value.html" class="mobile-link">Ch.03 &#8212; The Math Foundation</a>
  <span class="mobile-section-title" style="margin-top:4px">Coming Soon</span>
  <a href="${r}${lp}index.html#ch4" class="mobile-link" style="opacity:0.6">Ch.04 &#8212; Core Strategies</a>
  <a href="${r}${lp}kalshi-strategies.html" class="mobile-link" style="opacity:0.6">Ch.05 &#8212; Kalshi Strategies</a>
  <a href="${r}${lp}polymarket-strategies.html" class="mobile-link" style="opacity:0.6">Ch.06 &#8212; Polymarket Strategies</a>
  <a href="${r}${lp}risk-management.html" class="mobile-link" style="opacity:0.6">Ch.07 &#8212; Risk Management</a>
  <a href="${r}${lp}advanced-algorithmic.html" class="mobile-link" style="opacity:0.6">Ch.08 &#8212; Advanced &amp; Algo</a>
  <span class="mobile-section-title" style="margin-top:4px">More</span>
  <a href="${r}about.html" class="mobile-link">About Beatpoly</a>
  <a href="${r}index.html#community" class="mobile-link">Community</a>
  <div style="display:flex;gap:12px;padding:12px 8px 4px">
    <a href="${INSTA}" target="_blank" rel="noopener" style="font-size:13px;color:#4B5563;font-family:monospace">Instagram</a>
    <a href="${TIKTOK}" target="_blank" rel="noopener" style="font-size:13px;color:#4B5563;font-family:monospace">TikTok</a>
    <a href="${YT}" target="_blank" rel="noopener" style="font-size:13px;color:#4B5563;font-family:monospace">YouTube</a>
  </div>
  <a href="${KALSHI}" class="mobile-cta" target="_blank" rel="noopener">GET KALSHI BONUS &#8594;</a>
</div>`;

  // Inject nav
  const root = document.getElementById('nav-root');
  if (root) root.outerHTML = nav;

  // Mobile toggle
  document.addEventListener('click', function(e) {
    const menu   = document.getElementById('mob-menu');
    const toggle = document.getElementById('nav-toggle');
    if (!menu || !toggle) return;
    if (toggle.contains(e.target)) {
      menu.classList.toggle('open');
    } else if (!menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  // Highlight active nav item
  document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    document.querySelectorAll('#site-nav .nav-links > li > a').forEach(function(a) {
      if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace(/^\.\.\//, ''))) {
        a.classList.add('active');
      }
    });
    if (path.includes('/learn/')) {
      const learnLink = document.querySelector('#site-nav a[href*="learn"]');
      if (learnLink) learnLink.classList.add('active');
    }
  });
})();
