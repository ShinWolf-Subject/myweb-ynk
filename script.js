document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Back to top button functionality
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (backToTopBtn) {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
      }
    }
  });

  // External link warning / tracking
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('External link clicked:', this.href);
    });
  });

  // Toggle titik tiga menu (dropdown)
  const dots = document.querySelector('.menu-dots');
  const menu = document.querySelector('#popupMenu');
  if (dots && menu) {
    dots.addEventListener('click', function() {
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  }
});
