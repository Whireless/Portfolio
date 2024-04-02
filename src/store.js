import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({

    // Состояние прелоадера

    preloader: false,

    // Состояние моб.меню

    navIsOpen: false,

    // Элементы меню

    navList: [
      { href: '#skills', text: 'Скиллы', icon: '#skill', },
      { href: '#portfolio', text: 'Проекты', icon: '#project', },
      { href: '#contacts', text: 'Контакты', icon: '#contact', },
    ],

    // Тема и иконка темы

    themeStatus: false,
    themeIcon: '#dark-theme',

    // Список скиллов

    skillsList: [
      {
        icon: '#browser',
        title: 'Frontend',
        detailsList: ['JS ES6+', 'Vue 3', 'Pinia (Vuex)', 'GSAP', 'SCSS', 'БЭМ', '@keyframes', '@media',],
      },
      {
        icon: '#server',
        title: 'Backend',
        detailsList: ['NodeJS', 'Express.js', 'Nginx',],
      },
      {
        icon: '#tools',
        title: 'Dev Tools',
        detailsList: ['Git', 'NPM', 'Figma','Vite', 'Gulp',],
      },
    ],

    // Список проектов

    projects: {
      commercial: {
        icon: '#commercial',
        list: [
          {
            img: {
              src: 'img/projects/commercial/Avicenna.png',
              alt: '',
            },
            site: {
              name: 'avicenna-taganrog.ru',
              link: 'https://avicenna-taganrog.ru',
            },
            description: 'Сайт стоматологии в Таганроге "АвиценнА"',
            github: {
              name: 'github/stomatology',
              link: 'https://github.com/Whireless/stomatology',
            },
          },
          {
            img: {
              src: 'img/projects/commercial/Saturn-Braids.png',
              alt: 'Плетут шикарные дреды, кудри и брейды в Питере',
            },
            site: {
              name: 'saturnbraids.ru',
              link: 'https://saturnbraids.ru',
            },
            description: 'Сайт студии афро-причёсок в Санкт-Петербурге',
            github: {
              name: 'github/saturnbraids',
              link: 'https://github.com/Whireless/saturn-braids',
            },
          },
          {
            img: {
              src: 'img/projects/commercial/Andrestatix.png',
              alt: 'Если хочешь стать греческим атлетом - тебе сюда.',
            },
            site: {
              name: 'andrestatix.com',
              link: 'https://andrestatix.com',
            },
            description: 'Лучшие программы для развития силовых качеств твоего тела.',
            github: {
              name: 'github/andrestatix',
              link: 'https://github.com/Whireless/andrestatix',
            },
          },
        ],
      },
      personal: {
        icon: '#personal',
        list: [
          {
            img: {
              src: 'img/projects/personal/tg-bot.jpg',
              alt: '',
            },
            site: {
              name: '@trueetherbot',
              link: 'https://t.me/trueetherbot',
            },
            description: 'Телеграм-бот для получения погоды в любой точке мира.',
            github: {
              name: '',
              link: '',
            },
          },
          {
            img: {
              src: 'img/projects/personal/Easyweather.png',
              alt: 'Акутальная погода в любой точке мира.',
            },
            site: {
              name: 'easyweather',
              link: 'https://whireless.github.io/weather/',
            },
            description: 'Веб-версия погодного проекта, обладает аналогичным функционалом.',
            github: {
              name: 'github/weather',
              link: 'https://github.com/Whireless/weather',
            },
          },
        ],
      },
      study: {
        icon: '#study',
        list: [
          {
            img: {
              src: 'img/projects/study/Nevelvend.png',
              alt: 'Лучшие палочки в мире. И это точно.',
            },
            site: {
              name: 'Nevelvend',
              link: 'https://whireless.github.io/Nevelvend/',
            },
            description: 'Товары для вендинга напитков.',
            github: {
              name: '',
              link: '',
            },
          },
          {
            img: {
              src: 'img/projects/study/Pink.png',
              alt: 'Надоели серые будни? Тогда мы идём к вам!',
            },
            site: {
              name: 'Pink',
              link: 'https://whireless.github.io/Pink/',
            },
            description: 'Приложение окрашивающее фото.',
            github: {
              name: '',
              link: '',
            },
          },
          {
            img: {
              src: 'img/projects/study/ProductFit.png',
              alt: 'На самом деле интернет создали именно эта команда.',
            },
            site: {
              name: 'ProductFit',
              link: 'https://whireless.github.io/ProductFit/',
            },
            description: 'Разработка корпоративных IT-продуктов.',
            github: {
              name: '',
              link: '',
            },
          },
          {
            img: {
              src: 'img/projects/study/Restaurant.png',
              alt: 'Долго искал вкусный стейк? Тут готовят не только их.',
            },
            site: {
              name: 'Restaurant',
              link: 'https://whireless.github.io/Restaurant/',
            },
            description: 'Сайт ресторана с вкусным меню.',
            github: {
              name: '',
              link: '',
            },
          },
          {
            img: {
              src: 'img/projects/study/Grand-Theatre.png',
              alt: 'Надо уважать культуру, мать её.',
            },
            site: {
              name: 'Grand-Theatre',
              link: 'https://whireless.github.io/Grand-Theatre/',
            },
            description: 'Сайт большого театра в СПБ.',
            github: {
              name: '',
              link: '',
            },
          },
          {
            img: {
              src: 'img/projects/study/Nerds.png',
              alt: 'Создаём внеземной дизайн.',
            },
            site: {
              name: 'Nerds',
              link: 'https://whireless.github.io/Nerds/',
            },
            description: 'Сайт дизайн-студии из Краснодара.',
            github: {
              name: '',
              link: '',
            },
          },
        ],
      },
    },

    // Список соц.сетей

    socialsList: [
      {href: 'https://t.me/whireless', name: '', icon: '#telegram', aria: 'Написать в Telegram',},
      {href: 'mailto:alextrexen@gmail.com', name: '', icon: '#email', aria: 'Написать на почту',},
      {href: 'https://github.com/Whireless', name: '', icon: '#github', aria: 'Профиль на GitHub',},
    ],

    // Состояние кнопки "В начало"

    buttonUp: false,
  }),
  actions: {

    // Скрытие прелоадер

    preloaderHidden() {
      window.addEventListener('load', () => this.preloader = true);
    },

    // Открытие/закрытие мобильного меню

    openMenu(navItem) {
      if(navItem) {
        this.navIsOpen = false;
        document.body.removeAttribute('style');
      } else if(this.navIsOpen === false) {
        this.navIsOpen = true;
        document.body.style.overflow = 'hidden';
      } else {
        this.navIsOpen = false;
        document.body.removeAttribute('style');
      }
    },

    // Смена темы

    changeTheme() {
      if(this.themeStatus === false) {
        // localStorage.setItem('theme', 'dark');
        this.themeIcon = '#light-theme';
        this.themeStatus = true;
      } else {
        // localStorage.setItem('theme', 'light');
        this.themeIcon = '#dark-theme';
        this.themeStatus = false;
      }
    },

    // Кнопка "В начало"

    toUp() {
      window.addEventListener('scroll', () => window.pageYOffset > 450 ? this.buttonUp = true : this.buttonUp = false);
    },
  },
});
