import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const storeT = {
  state: {
    tableArray: {
      tableHeadlines: [
        { id: 'fullName' },
        { id: 'text' },
        { id: 'phone' },
        { id: 'email' }
      ],
      tableBody: [
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
          fullName: '',
          info: [
            {
              id: 'text',
              heading: 'text',
              text: ''
            },
            {
              id: 'phone',
              heading: 'pnone',
              text: ''
            },
            {
              id: 'email',
              heading: 'email',
              text: ''
            }
          ]
        },
        {
          id: 3,
          done: false,
          dragAndDrop: false,
          heading: 'Name',
          fullName: '',
          info: [
            {
              id: 'text',
              heading: 'text',
              text: ''
            },
            {
              id: 'phone',
              heading: 'pnone',
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
    ]
  }
};

export default storeT;
