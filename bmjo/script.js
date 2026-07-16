const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('is-sent');
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = 'Заявка принята';
  });
});
