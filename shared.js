// Shared navigation and footer for all pages
// Include via: <script src="shared.js"></script>

function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('jiu-jitsu')) return 'bjj';
  if (path.includes('muay-thai')) return 'muaythai';
  if (path.includes('mma')) return 'mma';
  if (path.includes('schedule')) return 'schedule';
  if (path.includes('about')) return 'about';
  if (path.includes('contact')) return 'contact';
  return 'home';
}

function isActive(page) {
  return getActivePage() === page ? 'class="active"' : '';
}

document.addEventListener('DOMContentLoaded', function() {
  const active = getActivePage();

  // Inject nav
  const navEl = document.getElementById('pg-nav');
  if (navEl) {
    navEl.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="images/logo.png" width="220" height="88" alt="Proving Grounds Fight Club">
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links">
          <li><a href="index.html" ${active==='home'?'class="active"':''}>Home</a></li>
          <li><a href="jiu-jitsu.html" ${active==='bjj'?'class="active"':''}>Jiu Jitsu</a></li>
          <li><a href="muay-thai.html" ${active==='muaythai'?'class="active"':''}>Muay Thai</a></li>
          <li><a href="mma.html" ${active==='mma'?'class="active"':''}>MMA</a></li>
          <li><a href="schedule.html" ${active==='schedule'?'class="active"':''}>Schedule</a></li>
          <li><a href="about.html" ${active==='about'?'class="active"':''}>About</a></li>
          <li><a href="contact.html" ${active==='contact'?'class="active"':''}>Contact</a></li>
          <li><a href="https://provinggroundsjj.sites.zenplanner.com/freeTrial.cfm" target="_blank" class="nav-cta">Free Trial</a></li>
        </ul>
        <a href="tel:5868948640" class="nav-phone">586-894-8640</a>
      </div>
    `;

    document.getElementById('nav-toggle').addEventListener('click', function() {
      document.getElementById('nav-links').classList.toggle('open');
    });
  }

  // Inject footer
  const footerEl = document.getElementById('pg-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo"><img src="images/logo.png" width="240" height="96" alt="Proving Grounds Fight Club"></a>
            <p>Macomb County's premier martial arts academy. Home of Michigan's first Black Belt World Champion. 6,000 sq ft of world-class training.</p>
            <br>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=100072875904135" target="_blank" class="social-link">f</a>
              <a href="https://www.instagram.com/p/CUIM5S4F5EY/" target="_blank" class="social-link">ig</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Disciplines</h4>
            <ul>
              <li><a href="jiu-jitsu.html">Brazilian Jiu Jitsu</a></li>
              <li><a href="muay-thai.html">Muay Thai</a></li>
              <li><a href="mma.html">MMA</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Gym</h4>
            <ul>
              <li><a href="schedule.html">Schedule</a></li>
              <li><a href="about.html">The Team</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="https://provinggroundsjj.sites.zenplanner.com/sign-up-now.cfm" target="_blank">Enroll & Pricing</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:5868948640">586-894-8640</a></li>
              <li><a href="mailto:Contact@provinggroundsjj.com">Contact@provinggroundsjj.com</a></li>
              <li><a href="https://maps.google.com/?q=46825+Hayes+Rd+Shelby+Township+MI" target="_blank">46825 Hayes Rd<br>Shelby Township, MI 48315</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Proving Grounds Jiu Jitsu. All rights reserved.</p>
          <p>Serving Shelby Township, Macomb Township, Sterling Heights, Clinton Township, Utica &amp; Chesterfield</p>
        </div>
      </div>
    `;
  }
});
