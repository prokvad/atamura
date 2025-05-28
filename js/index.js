document.addEventListener("DOMContentLoaded", (event) => {

  const header = document.querySelector('.header');
  const svgEl = document.querySelectorAll('.header__soc svg')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (header.classList.contains('scrolled')) {
      svgEl.forEach(svg => {
        svg.classList.add('scroll')
      });
    }
  });

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.documentElement.classList.toggle('active');
  });

  const lang = document.querySelector('.header__lang');
  const langGroup = document.querySelector('.header__lang-group');

  lang.addEventListener('click', () => {
    langGroup.classList.toggle('active');
  });

  const heroSlider = new Swiper('.hero__slider', {
    loop: false,
    speed: 3700,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  document.querySelectorAll('.hero__group').forEach((group, index) => {
    group.addEventListener('click', () => {
      heroSlider.slideTo(index)
    })
  });

  $('input[type="tel"]').on('click', function () {
  }).mask('+7 (999) 999 99 99');

  const modal = document.querySelector('.modal');
  const openModal = document.querySelectorAll('.modal-btn');
  const closeModal = document.querySelector('.modal__close');

  const showModal = () => {
    modal.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  };

  const hideModal = () => {
    modal.classList.remove('active');
    document.documentElement.style.overflow = 'auto';
  };

  openModal.forEach((open) => {
    open.addEventListener('click', () => {
      showModal();
    });
  });

  closeModal.addEventListener('click', () => {
    hideModal();
  });

  document.querySelectorAll('.price-filter').forEach(filter => {
    const slider = filter.querySelector('.range-slider');
    const inputMin = filter.querySelector('.input-min');
    const inputMax = filter.querySelector('.input-max');

    noUiSlider.create(slider, {
      start: [0, 320],
      connect: true,
      range: {
        min: 0,
        max: 500
      },
      step: 0.1,
      format: {
        to: value => parseFloat(value).toFixed(1),
        from: value => parseFloat(value)
      }
    });

    slider.noUiSlider.on('update', (values, handle) => {
      if (handle === 0) {
        inputMin.value = values[0];
      } else {
        inputMax.value = values[1];
      }
    });

    inputMin.addEventListener('change', () => {
      slider.noUiSlider.set([inputMin.value, null]);
    });

    inputMax.addEventListener('change', () => {
      slider.noUiSlider.set([null, inputMax.value]);
    });
  });

  const wrapp = document.querySelector('.project__filter-desc');
  if (wrapp) {
    const filters = wrapp.querySelectorAll('.project__filter-wrapp');

    if (filters) {
      filters.forEach((el) => {
        const toggle = el.querySelector('p');
        const filterItem = el.querySelector('.project__filter_item');

        toggle.addEventListener('click', (e) => {
          e.stopPropagation();

          // Закрыть все остальные
          filters.forEach((otherEl) => {
            if (otherEl !== el) {
              otherEl.classList.remove('active');
              const otherItem = otherEl.querySelector('.project__filter_item');
              otherItem?.classList.remove('active');
            }
          });

          // Переключить текущий
          el.classList.toggle('active');
          filterItem?.classList.toggle('active');
        });

        // Чтобы клик внутри фильтра не закрывал его
        filterItem?.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      });

      // Клик вне фильтров — закрыть всё
      document.addEventListener('click', () => {
        filters.forEach((el) => {
          el.classList.remove('active');
          const item = el.querySelector('.project__filter_item');
          item?.classList.remove('active');
        });
      });
    }
  }




  const mobFilterBtn = document.querySelector('.project__filter-mob-btn');
  const mobFilter = document.querySelector('.project__filter-mob');
  const mobFilterClose = document.querySelector('.project__filter-close');
  if (mobFilter) {
    const mobFilterItem = mobFilter.querySelectorAll('.project__filter_item');

    mobFilterBtn.addEventListener('click', () => {
      mobFilter.classList.toggle('active');
      mobFilterItem.forEach((item) => {
        item.classList.toggle('active');
      });
    });
    mobFilterClose.addEventListener('click', () => {
      mobFilter.classList.remove('active');
      mobFilterItem.forEach((item) => {
        item.classList.remove('active');
      });
    });
  }

  const cards = document.querySelectorAll('.advantages__card');

  cards.forEach(card => {
    const title = card.querySelector('.advantages__title');
    const content = card.querySelector('.advantages__content');

    title.addEventListener('click', () => {
      // Закрыть все
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('active');
          c.querySelector('.advantages__content').style.maxHeight = null;
        }
      });

      // Переключить текущую
      card.classList.toggle('active');
      if (card.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  const newsSlider = new Swiper('.news__slider', {
    loop: true,
    speed: 1700,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      540: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 1.7,
      },
      998: {
        slidesPerView: 2.5,
      },
      1140: {
        slidesPerView: 3.2,
      },
    },
    autoplay: {
      delay: 5500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  const lifeSlider = new Swiper('.life__slider', {
    loop: true,
    speed: 1700,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      540: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 1.7,
      },
      998: {
        slidesPerView: 2.5,
      },
      1140: {
        slidesPerView: 3.2,
      },
    },
    autoplay: {
      delay: 5500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  const images = document.querySelectorAll(".life__slide");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      if (!document.fullscreenElement) {
        // Вход в полноэкранный режим
        if (image.requestFullscreen) {
          image.requestFullscreen();
        } else if (image.webkitRequestFullscreen) { // Safari
          image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { // IE11
          image.msRequestFullscreen();
        }
        image.classList.add("fullscreen"); // Добавляем класс для смены курсора
      } else {
        // Выход из полноэкранного режима
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE11
          document.msExitFullscreen();
        }
        image.classList.remove("fullscreen"); // Убираем класс при выходе из полноэкранного режима
      }
    });
  });
  if (!document.fullscreenElement) {
    // При выходе из полноэкранного режима убираем класс со всех изображений
    images.forEach((image) => {
      image.classList.remove("fullscreen");
    });
  };


  const infstSlider = new Swiper('.infrastructure__slider', {
    loop: true,
    speed: 3700,
    spaceBetween: 20,
    slidesPerView: 1.2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  const stockSlider = new Swiper('.stock__slider', {
    loop: true,
    speed: 1700,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    autoplay: {
      delay: 3500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  const stockMainSlider = new Swiper('.stock__main-slider', {
    loop: true,
    speed: 1700,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      540: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 1.7,
      },
      998: {
        slidesPerView: 3,
      },
      1140: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  const vacanciesSlider = new Swiper('.vacancies__slider', {
    loop: true,
    speed: 1700,
    spaceBetween: 20,
    grid: {
      rows: 2,         // 2 строки
      fill: 'row',     // заполняем по строкам (а не по колонкам)
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      540: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 1.7,
      },
      998: {
        slidesPerView: 3,
      },
      1140: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const marquee = document.querySelector('.marquee');

if(marquee) {
  $('.marquee').marquee({
    direction: 'left',
    speed: 50,
  });
}

})