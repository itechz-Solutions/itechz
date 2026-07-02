// shared.js — injected nav + footer on every page

const NAV_HTML = `
<nav id="nav">
  <div class="nav-inner">
    <a class="logo" href="index.html">
  <img src="Logo.png" alt="iTechz Logo">
  <span>iTechz Solutions</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" data-page="index">Home</a></li>
      <li><a href="services.html" data-page="services">Services</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
    <div class="nav-right">
      <a class="btn-ghost" href="https://wa.me/918698529411" target="_blank">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#25d366" style="display:inline;vertical-align:middle;margin-right:5px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.267a.75.75 0 0 0 .92.908l5.42-1.424A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.484-5.25-1.334l-.376-.215-3.895 1.023 1.043-3.808-.232-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        WhatsApp
      </a>
      <a class="btn-primary" href="contact.html">Get a Quote</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<div class="contact-bar">
  <a class="contact-bar-item" href="tel:+918605400518">
    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    +91 86054 00518
  </a>
  <a class="contact-bar-item" href="https://wa.me/918605400518" target="_blank">
    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    WhatsApp: 86054 00518
  </a>
  <a class="contact-bar-item" href="mailto:itechz1solutions@gmail.com">
    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    itechz1solutions@gmail.com
  </a>
  <span class="contact-bar-item">
    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    Mumbai, Maharashtra
  </span>
</div>
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-logo">iTechz<span> Solutions</span></div>
      <p class="footer-desc">Professional IT infrastructure and technology solutions for businesses across Mumbai. Support, networking, CCTV, web & AMC.</p>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <a href="services.html#it-support">IT Support & Hardware</a>
      <a href="services.html#infrastructure">IT Infrastructure & Networking</a>
      <a href="services.html#cctv">CCTV & Surveillance</a>
      <a href="services.html#web">Website Development</a>
      <a href="services.html#amc">Annual Maintenance Contracts</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="tel:+918605400518">+91 86054 00518</a>
      <a href="https://wa.me/918605400518">WhatsApp</a>
      <a href="mailto:itechz1solutions@gmail.com">itechz1solutions@gmail.com</a>
      <a href="#">Mumbai, Maharashtra</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 iTechz Solutions. All rights reserved.</span>
    <span class="footer-copy">Shubham Kadam · IT Engineer · Mumbai</span>
  </div>
</footer>`;

function initPage(activePage) {
  // Inject noise texture layer + cursor follower (once per page)
  const noiseEl = document.createElement('div');
  noiseEl.className = 'noise-layer';
  document.body.appendChild(noiseEl);

  const cursorEl = document.createElement('div');
  cursorEl.className = 'cursor-follower';
  cursorEl.id = 'cursorFollower';
  document.body.appendChild(cursorEl);

  // Inject nav
  const navEl = document.createElement('div');
  navEl.innerHTML = NAV_HTML;
  document.body.insertBefore(navEl.firstElementChild, document.body.firstChild);

  // Inject footer wrapper
  const footerWrap = document.createElement('div');
  footerWrap.innerHTML = FOOTER_HTML;
  while (footerWrap.firstChild) document.body.appendChild(footerWrap.firstChild);

  // Active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });

  // Nav scroll: solid bg after threshold, hide on scroll-down, show on scroll-up
  const nav = document.getElementById('nav');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 30);
    if (y > lastY && y > 140) nav.classList.add('nav-hidden');
    else nav.classList.remove('nav-hidden');
    lastY = y;
  }, { passive: true });

  // Cursor-follower glow (desktop only, subtle, mouse-reactive)
  if (window.matchMedia('(pointer: fine)').matches) {
    let rafId = null, tx = 0, ty = 0, cx = 0, cy = 0, active = false;
    window.addEventListener('mousemove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!active) { cx = tx; cy = ty; active = true; cursorEl.classList.add('active'); }
      if (!rafId) rafId = requestAnimationFrame(moveCursor);
    });
    function moveCursor() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      cursorEl.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      rafId = (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) ? requestAnimationFrame(moveCursor) : null;
    }
    document.addEventListener('mouseleave', () => cursorEl.classList.remove('active'));
  }

  // Ripple effect on primary buttons
  document.querySelectorAll('.btn-primary, .hero-btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height) * 1.4;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  // Scroll reveal — supports .reveal and variants (.reveal-scale, .reveal-blur, .reveal-left, .reveal-right)
  const revealSelector = '.reveal, .reveal-scale, .reveal-blur, .reveal-left, .reveal-right';
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(revealSelector).forEach(el => io.observe(el));

  // Safety fallback: force-reveal anything still hidden after 2.5s
  // (guards against fast scroll, programmatic scroll, or observer edge cases)
  setTimeout(() => {
    document.querySelectorAll((revealSelector.split(',').map(s => s.trim() + ':not(.in)').join(','))).forEach(el => el.classList.add('in'));
  }, 2500);

  // Connection-line divider draw-on
  const lineIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); lineIo.unobserve(e.target); }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.connect-divider').forEach(el => lineIo.observe(el));

  // Counter animation for stat numbers (hero-stat-num, stat-num)
  const counterIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      counterIo.unobserve(e.target);
      const el = e.target;
      const span = el.querySelector('span');
      const suffix = span ? span.textContent : '';
      const target = parseInt(el.textContent, 10);
      if (isNaN(target)) return;
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(target * eased);
        el.innerHTML = val + (suffix ? '<span>' + suffix + '</span>' : '');
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.hero-stat-num, .stat-num').forEach(el => counterIo.observe(el));
}
