(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoHidden = document.querySelector('[data-logo-hidden]');
  // modal: document.querySelector('[data-modal]'),

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    logoHidden.classList.toggle('is-hidden');

  });
  // refs.closeModalBtn.addEventListener('click', toggleModal);
})();
