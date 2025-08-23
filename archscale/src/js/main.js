 const menuHover = document.getElementById('menu-hover');
  const dropdown = document.getElementById('dropdown');

  menuHover.addEventListener('mouseenter', () => {
    dropdown.classList.add('active');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active');
  });

  document.addEventListener('mousemove', (e) => {
    if (
      !e.target.closest('#dropdown') &&
      !e.target.closest('#menu-hover')
    ) {
      dropdown.classList.remove('active');
    }
  });