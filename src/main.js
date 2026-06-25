import './style.css'

// 1. Sticky Navigation Header scroll effect
const header = document.getElementById('main-header');
const handleScroll = () => {
  if (!header) return;
  if (window.scrollY > 20) {
    header.classList.add('glassmorphism', 'shadow-md', 'border-brand-muted/20');
    header.classList.remove('border-transparent', 'py-5');
    header.classList.add('py-3');
  } else {
    header.classList.remove('glassmorphism', 'shadow-md', 'border-brand-muted/20');
    header.classList.add('border-transparent', 'py-5');
    header.classList.remove('py-3');
  }
};
window.addEventListener('scroll', handleScroll);
handleScroll();

// 2. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconPath = document.getElementById('menu-icon-path');

const hamburgerPath = "M4 6h16M4 12h16M4 18h16";
const closePath = "M6 18L18 6M6 6l12 12";

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Animate menu icon
    if (isExpanded) {
      menuIconPath.setAttribute('d', hamburgerPath);
    } else {
      menuIconPath.setAttribute('d', closePath);
    }
  });

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      menuIconPath.setAttribute('d', hamburgerPath);
    });
  });
}

// 3. Specialty Dialog Modal Interactions
const specialtyButtons = document.querySelectorAll('[data-specialty-target]');

specialtyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-specialty-target');
    const dialog = document.getElementById(`specialty-modal-${targetId}`);
    if (dialog) {
      dialog.showModal();
    }
  });
});

const dialogs = document.querySelectorAll('dialog');
dialogs.forEach(dialog => {
  const closeButtons = dialog.querySelectorAll('.close-modal-btn');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dialog.close();
    });
  });

  const bookBtn = dialog.querySelector('.close-and-book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dialog.close();
      const targetHash = bookBtn.getAttribute('href');
      const targetSection = document.querySelector(targetHash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
    if (!isInDialog) {
      dialog.close();
    }
  });
});

// 4. Contact Form Submission Handling (with HIPAA Enforcement)
const consultForm = document.getElementById('consultation-form');
const hipaaConsent = document.getElementById('hipaa-consent');
const formFeedback = document.getElementById('form-feedback');

if (consultForm) {
  consultForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formFeedback.classList.add('hidden');
    formFeedback.className = 'p-4 rounded-xl text-sm font-semibold';

    if (!hipaaConsent.checked) {
      formFeedback.classList.remove('hidden');
      formFeedback.classList.add('bg-amber-50', 'text-amber-800', 'border', 'border-amber-200');
      formFeedback.textContent = 'Please check the box to confirm that you will not include sensitive medical or clinical details in this form.';
      hipaaConsent.focus();
      return;
    }

    const submitBtn = consultForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending consultation inquiry...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      
      formFeedback.classList.remove('hidden');
      formFeedback.classList.add('bg-emerald-50', 'text-emerald-800', 'border', 'border-emerald-200');
      formFeedback.textContent = 'Thank you! Your request has been sent successfully. Leslye will get back to you within 24-48 business hours.';
      
      consultForm.reset();
    }, 1500);
  });
}

// 5. Scroll Reveal Fallback for browsers that do not support CSS View Timelines
if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => el.classList.add('scroll-reveal-hidden'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-reveal-active');
        entry.target.classList.remove('scroll-reveal-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -80px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
