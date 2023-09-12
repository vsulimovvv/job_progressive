window.addEventListener('DOMContentLoaded', () => {
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.advantages__slider');
    sliderEl.forEach((item) => {
      new Swiper(item, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
      });
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 10) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 10) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.menu__link');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
      header.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
      header.classList.remove('active');
      menuBtn.classList.remove('active');
    });

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        header.classList.remove('active');
        body.classList.remove('no-scroll');
        menuBtn.classList.remove('active');
      });
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.launch-btn', '.popup--launch', '.popup__close');
  })();

  // * ===== Close Cookie
  (function closeCookie() {
    const cookieBlock = document.querySelector('.c-block');
    const btnGood = document.querySelector('.c-block__btn');
    const btnClose = document.querySelector('.c-block__close');
    const btns = [btnClose, btnGood];
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        cookieBlock.style.display = 'none';
      });
    });

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
      header.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  })();

  (function ScrollSection() {
    //* Scroll Section Active Link *//
    const sections = document.querySelectorAll('.section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.menu a[href*=' + sectionId + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.menu a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  })();
});
