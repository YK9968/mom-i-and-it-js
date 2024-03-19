(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuLink: document.querySelectorAll('.header-mob-menu-link'),
    orderLink: document.querySelector('.header-mob-menu-order-link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuLink.forEach(link => link.addEventListener('click', scrollToSection));
  refs.orderLink.addEventListener('click', scrollToSection);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }

  function scrollToSection(event) {
    event.preventDefault();
    toggleMenu();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const yOffset = -60;
      const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
})();
