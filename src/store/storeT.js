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

              text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
                + ' Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
                + ' В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,'
                + ' используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без '
                + 'заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое'
                + ' время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее'
                + ' время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem.'
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
                + ' а также реальное распределение букв и пробелов в абзацах, которое не получается при простой '
                + 'дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной'
                + ' вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск '
                + 'по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего'
                + ' настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии'
                + ' появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
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
                + 'так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух '
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
    langToggle: {
      langT: [
        {
          id: 'en',
          lang: true,
          imgLang: '../../assets/icon/en.png'
        },
        {
          id: 'ua',
          lang: false,
          imgLang: '../../assets/icon/ua.png'
        },
        {
          id: 'ru',
          lang: false,
          imgLang: '../../assets/icon/ru.png'
        }
      ],
    },
    themeToggle: {
      themeT: false,
    }
  }
};

export default storeT;
