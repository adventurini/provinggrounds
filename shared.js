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
          <img src="images/logo.png" width="1536" height="1023" alt="Proving Grounds Fight Club">
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
            <a href="index.html" class="footer-logo"><img src="images/logo.png" width="1536" height="1023" alt="Proving Grounds Fight Club"></a>
            <p>Macomb County's premier martial arts academy. Home of Michigan's first Black Belt World Champion. 6,000 sq ft of world-class training.</p>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=100072875904135" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Proving Grounds on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/p/CUIM5S4F5EY/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Proving Grounds on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44 0 .795.645 1.44 1.441 1.44.795 0 1.439-.645 1.439-1.44 0-.795-.644-1.44-1.439-1.44z"/></svg>
              </a>
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
