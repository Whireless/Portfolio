import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    // Тема

    theme: {
      status: false,
      icon: '#theme',
    },

    // Состояние мобильного меню

    navIsOpen: false,

    // Элементы меню

    navList: [
      { href: '#projects', text: 'Проекты' },
      { href: '#contacts', text: 'Контакты' },
    ],

    // Список скиллов

    skillsList: ['#html', '#css', '#scss', '#js', '#vue', '#express', '#nginx', '#git',],

    // Список проектов

    projects: {
      commercial: [
        {
          img: {
            src: 'img/projects/Avicenna.png',
            alt: '',
          },
          name: 'Стоматология Авиценна',
          description: 'Сайт стоматологической клиники в Таганроге',
          technologies: ['#scss', '#vue'],
          site: {
            name: 'avicenna-taganrog.ru',
            link: 'https://avicenna-taganrog.ru',
          },
          github: 'https://github.com/Whireless/stomatology',
        },
        {
          img: {
            src: 'img/projects/Saturn-Braids.png',
            alt: 'Плетут шикарные дреды, кудри и брейды в Питере',
          },
          name: 'Афростудия Saturn Braids',
          description: 'Сайт студии афро-причёсок в Санкт-Петербурге',
          technologies: ['#scss', '#vue'],
          site: {
            name: 'saturnbraids.ru',
            link: 'https://saturnbraids.ru',
          },
          github: 'https://github.com/Whireless/saturn-braids',
        },
        {
          img: {
            src: 'img/projects/Andrestatix.png',
            alt: 'Если хочешь стать греческим атлетом - тебе сюда.',
          },
          name: 'Курсы развития тела',
          description: 'Курсы для развития силовых качеств твоего тела',
          technologies: ['#html', '#scss', '#js'],
          site: {
            name: 'andrestatix.com',
            link: 'https://andrestatix.com',
          },
          github: 'https://github.com/Whireless/andrestatix',
        },
      ],
      pets: [
        {
          img: {
            src: 'img/projects/Easyweather.png',
            alt: 'Акутальная погода в любой точке мира',
          },
          name: '.easyпогода',
          description: 'Сайт позволяющий узнать погоду в любой точке мира',
          technologies: ['#vue', '#scss'],
          site: {
            name: 'easyweather',
            link: 'https://whireless.github.io/weather/',
          },
          github: 'https://github.com/Whireless/weather',
        },
      ],
    },

    // Способы связи со мной

    contacts: [
      {
        href: 'https://t.me/whireless',
        icon: '#telegram',
        aria: 'Написать в Telegram',
      },
      {
        href: 'mailto:alextrexen@gmail.com',
        icon: '#email',
        aria: 'Написать на почту',
      },
      {
        href: 'https://github.com/Whireless',
        icon: '#github',
        aria: 'Профиль на Github',
      },
    ],
  }),
  actions: {
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
    if(this.theme.status === false) {
      // localStorage.setItem('theme', 'dark');
      // this.themeIcon = '#light-theme';
      this.theme.status = true;
    } else {
      // localStorage.setItem('theme', 'light');
      // this.themeIcon = '#dark-theme';
      this.theme.status = false;
    }
  },
  },
});
