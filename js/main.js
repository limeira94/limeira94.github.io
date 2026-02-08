/* =============================================
   Portfolio - Main JavaScript
   ============================================= */

(function () {
  'use strict';

  /* -----------------------------------------
     Theme Toggle
     ----------------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialize theme
  setTheme(getPreferredTheme());

  themeToggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* -----------------------------------------
     Mobile Navigation
     ----------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
  });

  // Close menu when clicking a link
  navList.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navList.classList.remove('active');
    });
  });

  /* -----------------------------------------
     Header Scroll Effect
     ----------------------------------------- */
  var header = document.getElementById('header');
  var lastScrollY = 0;

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }, { passive: true });

  /* -----------------------------------------
     Active Navigation Link
     ----------------------------------------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  function highlightNav() {
    var scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* -----------------------------------------
     Scroll Animations (Intersection Observer)
     ----------------------------------------- */
  var animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* -----------------------------------------
     Skill Bar Animation
     ----------------------------------------- */
  var skillBars = document.querySelectorAll('.skill-bar__fill');

  if ('IntersectionObserver' in window) {
    var skillObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var level = entry.target.getAttribute('data-level');
          entry.target.style.width = level + '%';
          skillObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    skillBars.forEach(function (bar) {
      skillObserver.observe(bar);
    });
  } else {
    skillBars.forEach(function (bar) {
      bar.style.width = bar.getAttribute('data-level') + '%';
    });
  }

  /* -----------------------------------------
     Contact Form (basic client-side feedback)
     ----------------------------------------- */
  var contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Re-enable after a delay (Formspree handles the actual submission)
      setTimeout(function () {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, 3000);
    });
  }

})();
