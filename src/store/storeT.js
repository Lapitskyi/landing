import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const storeT = {
  state: {
    tableArray: {
      tableHeadlines: {
        en: [
          { id: 'fullName' },
          { id: 'text' },
          { id: 'phone' },
          { id: 'email' }
        ],
        ua: [
          { id: 'ПІБ' },
          { id: 'Текст' },
          { id: 'Телефон' },
          { id: 'емейл' }],
        ru: [
          { id: 'ФИО' },
          { id: 'Текст' },
          { id: 'Телефон' },
          { id: 'Эмаил' }
        ]
      },
      tableBody: {
        en: [
          {
            id: 1,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'What Lorem Ipsum?',
            info: [
              {
                id: 'text',
                heading: 'text',

                text: 'Lorem Ipsum '
              },
              {
                id: 'phone',
                heading: 'phone',
                text: '8(111)111-11-11'
              },
              {
                id: 'email',
                heading: 'email',
                text: '1_mail@mail.com'
              }
            ]
          },
          {
            id: 2,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Why is it used?',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: 'Why is it used?'
              },
              {
                id: 'phone',
                heading: 'pnone',
                text: '8(222)222-22-22'
              },
              {
                id: 'email',
                heading: 'email',
                text: '2_mail@mail.com'
              }
            ]
          },
          {
            id: 3,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Why is it used?',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: 'Why is it used?'
              },
              {
                id: 'phone',
                heading: 'phone',
                text: ''
              },
              {
                id: 'email',
                heading: 'email',
                text: ''
              }
            ]
          },
        ],
        ua: [
          {
            id: 1,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Что такое Lorem Ipsum?',
            info: [
              {
                id: 'text',
                heading: 'text',

                text: 'Lorem Ipsum - это текст-"рыба", '
              },
              {
                id: 'phone',
                heading: 'phone',
                text: '8(111)111-11-11'
              },
              {
                id: 'email',
                heading: 'email',
                text: '1_mail@mail.com'
              }
            ]
          },
          {
            id: 2,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Почему он используется?',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
              },
              {
                id: 'phone',
                heading: 'pnone',
                text: '8(222)222-22-22'
              },
              {
                id: 'email',
                heading: 'email',
                text: '2_mail@mail.com'
              }
            ]
          },
          {
            id: 3,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Откуда он появился?',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: ' набор слов, но это не совсем '
              },
              {
                id: 'phone',
                heading: 'phone',
                text: ''
              },
              {
                id: 'email',
                heading: 'email',
                text: ''
              }
            ]
          },
        ],
        ru: [
          {
            id: 1,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Что такое Lorem Ipsum?',
            info: [
              {
                id: 'text',
                heading: 'text',

                text: 'Lorem Ipsum - это текст-"рыба", '
              },
              {
                id: 'phone',
                heading: 'phone',
                text: '8(111)111-11-11'
              },
              {
                id: 'email',
                heading: 'email',
                text: '1_mail@mail.com'
              }
            ]
          },
          {
            id: 2,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Почему он используется?',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
              },
              {
                id: 'phone',
                heading: 'pnone',
                text: '8(222)222-22-22'
              },
              {
                id: 'email',
                heading: 'email',
                text: '2_mail@mail.com'
              }
            ]
          },
          {
            id: 3,
            done: false,
            dragAndDrop: false,
            heading: 'Name',
            fullName: 'Откуда он появился?',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: ' набор слов, но это не совсем '
              },
              {
                id: 'phone',
                heading: 'phone',
                text: ''
              },
              {
                id: 'email',
                heading: 'email',
                text: ''
              }
            ]
          },
        ]
      }
    },
    social: [
      {
        id: 1,
        link: 'mailto:mail@gmail.com',
        icon: '#email',
        alt: 'email'
      },
      {
        id: 2,
        link: 'tel:80000000000',
        icon: '#phone',
        alt: 'phone'
      },
      {
        id: 3,
        link: 'https://git-scm.com',
        icon: '#git',
        alt: 'github'
      }
    ],
    langT: [
      {
        id: 'en',
        lang: true,
        imgLang: en
      },
      {
        id: 'ua',
        lang: false,
        imgLang: ua
      },
      {
        id: 'ru',
        lang: false,
        imgLang: ru
      }
    ],
    themeT: false,
    todoText: {
      en: 'List clear',
      ua: 'немає записів',
      ru: 'нет записей'
    }
  }
};

export default storeT;
