document.addEventListener('DOMContentLoaded', function () {
  // Pages toggle
  const pagesToggle = document.querySelector('.pages-toggle-button');
  const allPages = document.querySelector('.all-pages');

  if (pagesToggle && allPages) {
    pagesToggle.addEventListener('click', function () {
      const isActive = this.classList.contains('active');
      this.classList.toggle('active', !isActive);
      allPages.classList.toggle('active', !isActive);
    });

    // Закрытие при клике вне блока
    document.addEventListener('click', function (e) {
      if (allPages.classList.contains('active')) {
        const clickedInside = allPages.contains(e.target) || pagesToggle.contains(e.target);
        if (!clickedInside) {
          pagesToggle.classList.remove('active');
          allPages.classList.remove('active');
        }
      }
    });
  }

  // Мобильное меню (оставляем как было)
  const hamburger = document.querySelector('.hamburger');
  const menuWrapper = document.querySelector('.menu-wrapper');
  const closeIcon = document.querySelector('.close-icon');

  const toggleMenu = () => {
    menuWrapper?.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  };

  hamburger?.addEventListener('click', toggleMenu);
  closeIcon?.addEventListener('click', toggleMenu);

  // FAQ
  const faqToggles = document.querySelectorAll('.faq-question, .dropdown-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const parent = this.closest('.faq-item, .dropdown');
      const answer = parent?.querySelector('.faq-answer, .dropdown-list');
      const plusIcon = this.querySelector('.plus-icon, .plus-faq');

      parent?.classList.toggle('open');
      if (plusIcon) {
        plusIcon.style.transform = parent?.classList.contains('open') ? 'rotate(45deg)' : 'rotate(0deg)';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Pages toggle
  const pagesToggle = document.querySelector('.pages-toggle-button');
  const allPages = document.querySelector('.all-pages');

  if (pagesToggle && allPages) {
    pagesToggle.addEventListener('click', function () {
      const isActive = this.classList.contains('active');
      this.classList.toggle('active', !isActive);
      allPages.classList.toggle('active', !isActive);
    });

    // Закрытие при клике вне блока
    document.addEventListener('click', function (e) {
      if (allPages.classList.contains('active')) {
        const clickedInside = allPages.contains(e.target) || pagesToggle.contains(e.target);
        if (!clickedInside) {
          pagesToggle.classList.remove('active');
          allPages.classList.remove('active');
        }
      }
    });
  }

  // Мобильное меню (оставляем как было)
  const hamburger = document.querySelector('.hamburger');
  const menuWrapper = document.querySelector('.menu-wrapper');
  const closeIcon = document.querySelector('.close-icon');

  const toggleMenu = () => {
    menuWrapper?.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  };

  hamburger?.addEventListener('click', toggleMenu);
  closeIcon?.addEventListener('click', toggleMenu);

  // FAQ
  const faqToggles = document.querySelectorAll('.faq-question, .dropdown-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const parent = this.closest('.faq-item, .dropdown');
      const answer = parent?.querySelector('.faq-answer, .dropdown-list');
      const plusIcon = this.querySelector('.plus-icon, .plus-faq');

      parent?.classList.toggle('open');
      if (plusIcon) {
        plusIcon.style.transform = parent?.classList.contains('open') ? 'rotate(45deg)' : 'rotate(0deg)';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const allPagesBlock = document.querySelector('.all-pages');
  if (allPagesBlock) {
    allPagesBlock.style.display = 'none';
  }
});