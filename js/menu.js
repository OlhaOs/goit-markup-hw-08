const ref = {
  menuBtnRef: document.querySelector('[data-menu-button]'),
  mobileMenuRef: document.querySelector('[data-menu]'),
  logoHidden: document.querySelector('[data-logo-hidden]'),
};

ref.menuBtnRef.addEventListener('click', () => {
  ref.menuBtnRef.classList.toggle('is-open');
  ref.mobileMenuRef.classList.toggle('is-open');
  ref.logoHidden.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
});
