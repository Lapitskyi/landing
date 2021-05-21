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
      name: 'nav.pokemon',
      link: '/pokemon'
    },
    {
      id: 3,
      name: 'nav.aboutMe',
      link: '/about'
    },
    {
      id: 4,
      name: 'nav.order',
      link: '/order'
    },
    {
      id: 5,
      name: 'nav.portfolio',
      link: '/portfolio'
    },
    {
      id: 6,
      name: 'nav.login',
      link: '/auth/login'
    },
    {
      id: 7,
      name: 'nav.registration',
      link: '/auth/registration'
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
};

export default state;
