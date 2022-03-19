'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie Section

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improving functionality and analytics. <button class="btn btn--close-cookie">Got It!<button/>';

message.removeChild(message.lastChild);
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

// Slider Section

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Tabbed components

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach(tabs => tabs.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});
