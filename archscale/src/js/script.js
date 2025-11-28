document.addEventListener('DOMContentLoaded', function () {
  // Мобильное меню
  const hamburger = document.querySelector('.hamburger');
  const menuWrapper = document.querySelector('.menu-wrapper');
  const closeIcon = document.querySelector('#w-node-_85f0aaff-dc7e-c724-adbb-61e37419566c');

  if (hamburger && menuWrapper) {
    const toggleMenu = () => {
      menuWrapper.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    };

    hamburger.addEventListener('click', toggleMenu);
    if (closeIcon) closeIcon.addEventListener('click', toggleMenu);
  }

  // FAQ — выпадающие блоки
  const faqToggles = document.querySelectorAll('.dropdown-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const list = this.nextElementSibling;
      if (list && list.classList.contains('dropdown-list')) {
        list.classList.toggle('open');

        const plusIcon = this.querySelector('.plus-faq');
        if (plusIcon) {
          plusIcon.style.transform = list.classList.contains('open') ? 'rotate(45deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // Закрытие мобильного меню при клике вне его
  document.addEventListener('click', (e) => {
    if (menuWrapper && menuWrapper.classList.contains('open')) {
      const isClickInside = menuWrapper.contains(e.target) || hamburger?.contains(e.target);
      if (!isClickInside) {
        menuWrapper.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    }
  });
});