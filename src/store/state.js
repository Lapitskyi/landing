const state = {
  auth: {
    login: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'auth.labelEmail',
          type: 'email',
          placeholder: 'auth.placeholderEmail'
        },
        {
          id: 'password',
          name: 'password',
          label: 'auth.labelPassword',
          type: 'password',
          placeholder: 'auth.placeholderPassword'
        }
      ],
      name: 'auth.nameLogin',
      link: [
        {
          id: 1,
          title: 'auth.linkReset',
          path: '/auth/reset'
        },
        {
          id: 2,
          title: 'auth.linkRegistration',
          path: '/auth/registration'
        }
      ]
    },
    registration: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'auth.labelEmail',
          type: 'email',
          placeholder: 'auth.placeholderEmail'
        },
        {
          id: 'password',
          name: 'password',
          label: 'auth.labelPassword',
          type: 'password',
          placeholder: 'auth.placeholderPassword'
        },
        {
          id: 'confirmPassword',
          name: 'confirmPassword',
          label: 'auth.labelConfirmPassword',
          type: 'password',
          placeholder: 'auth.placeholderConfirmPassword'
        },
      ],
      name: 'auth.nameRegistration',
      link: [
        {
          id: 1,
          title: 'auth.linkLogin',
          path: '/auth/login'
        }
      ]
    },
    reset: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'auth.labelEmail',
          type: 'email',
          placeholder: 'auth.placeholderEmail'
        },
      ],
      name: 'auth.nameReset',
      link: [
        {
          id: 1,
          title: 'auth.linkLogin',
          path: '/auth/login'
        }
      ]
    },
  },
  nav: [
    {
      id: 1,
      name: 'nav.home',
      link: '/'
    },
    {
      id: 2,
      name: 'nav.aboutMe',
      link: '/about'
    },
    {
      id: 3,
      name: 'nav.order',
      link: '/order'
    },
    {
      id: 4,
      name: 'nav.portfolio',
      link: '/portfolio'
    },
    {
      id: 5,
      name: 'nav.login',
      link: '/auth/login'
    },
    {
      id: 6,
      name: 'nav.registration',
      link: '/auth/registration'
    }
  ],
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

};

export default state;
