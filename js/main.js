/**
 * OraFix Dental Care - Master Interactive Scripts
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initAnimatedCounters();
  initFaqAccordion();
  initTestimonialSlider();
  initBackToTop();
  initBookingForms();
  initContactForms();
});

/* --------------------------------------------------------------------------
   1. Sticky Header
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Toggle submenus in mobile drawer
  const submenuToggles = drawer.querySelectorAll('.mobile-submenu-toggle');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.mobile-nav-item');
      const submenu = parent.querySelector('.mobile-submenu');
      if (submenu) {
        submenu.classList.toggle('open');
        toggle.textContent = submenu.classList.contains('open') ? '▲' : '▼';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Animated Counters
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-count');
          const duration = 2000; // 2 seconds
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepIncrement = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += stepIncrement;
            if (current >= target) {
              counter.querySelector('.number-val').innerText = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.querySelector('.number-val').innerText = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* --------------------------------------------------------------------------
   4. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other items in the same container
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Testimonials Slider / Carousel
   -------------------------------------------------------------------------- */
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dotsContainer = document.querySelector('.testimonial-dots');

  if (!track || !slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  // Create dot indicators
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 5500);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
}

/* --------------------------------------------------------------------------
   6. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   7. Appointment Booking Form Handling & Modals
   -------------------------------------------------------------------------- */
function initBookingForms() {
  const forms = document.querySelectorAll('.booking-form');
  const modal = document.getElementById('confirmation-modal');
  const closeBtn = document.querySelector('.modal-close-btn');
  const closeIcon = document.querySelector('.modal-close-icon');

  function showConfirmation(patientName, service, date) {
    if (!modal) {
      alert(`Thank you, ${patientName}! Your appointment for ${service || 'Dental Consultation'} on ${date || 'requested date'} has been received. Our clinic will contact you shortly.`);
      return;
    }
    const nameSpan = modal.querySelector('.modal-patient-name');
    const detailSpan = modal.querySelector('.modal-appointment-detail');
    if (nameSpan) nameSpan.innerText = patientName;
    if (detailSpan) detailSpan.innerText = `Treatment: ${service} | Preferred Date: ${date}`;
    modal.classList.add('active');
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeIcon) closeIcon.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[name="phone"]');
      const serviceInput = form.querySelector('select[name="service"]') || form.querySelector('input[name="service"]');
      const dateInput = form.querySelector('input[name="date"]');

      const name = nameInput ? nameInput.value.trim() : 'Valued Patient';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : 'Dental Consultation';
      const date = dateInput ? dateInput.value : 'Soon';

      if (!phone) {
        alert('Please enter a valid phone number for appointment confirmation.');
        return;
      }

      showConfirmation(name, service, date);
      form.reset();
    });
  });
}

/* --------------------------------------------------------------------------
   8. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForms() {
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.querySelector('input[name="name"]')?.value || 'Friend').trim();
      alert(`Thank you ${name}! Your message has been sent successfully to OraFix Dental Care. We will reply to your enquiry shortly.`);
      form.reset();
    });
  });
}
