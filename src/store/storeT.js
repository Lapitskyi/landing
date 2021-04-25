import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const storeT = {
  state: {
    auth: {
      login: {
        input: [
          {
            id: 'email',
            label: 'Username or email',
            type: 'text',
            placeholder: 'email'
          },
          {
            id: 'password',
            label: 'Password',
            type: 'text',
            placeholder: 'password'
          }
        ],
        btnText: 'Sing in',
        link: [
          {
            id: 1,
            title: 'Forgot your password?',
            path: '/reset'
          },
          {
            id: 2,
            title: 'Don\'t have an account yet? Register now',
            path: '/registration'
          }
        ]
      },
      registration: {
        input: [
          {
            id: 'email',
            label: 'Email',
            placeholder: 'email'
          },
          {
            id: 'password',
            label: 'Password',
            placeholder: 'password'
          },
          {
            id: 'repassword',
            label: 'Repassword',
            placeholder: 'repassword'
          }
        ],
        btnText: 'Sing Up',
        link: [
          {
            id: 1,
            title: 'Already have login and password? Sign in',
            path: '/login'
          }
        ]
      },
      reset: {
        input: [
          {
            id: 'email',
            label: 'Email',
            placeholder: 'email',
            btn: 'Reset password'
          },
        ],
        btnText: 'Reset password',
        link: [
          {
            id: 1,
            title: 'Already have login and password? Sign in',
            path: '/login'
          }
        ]
      }
    },
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
                + ' Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона,'
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
              text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем '
                + 'так.'
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
    },
    menu: [
      {
        id: 1,
        name: 'Home',
        link: '/'
      },
      {
        id: 2,
        name: 'About',
        link: '/about'
      },
      {
        id: 3,
        name: 'Order',
        link: '/order'
      },
      {
        id: 4,
        name: 'Portfolio',
        link: '/portfolio'
      },
      {
        id: 5,
        name: 'Login',
        link: '/login'
      },
      {
        id: 6,
        name: 'Registration',
        link: '/registration'
      }
    ],
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
  }
};

export default storeT;
