export default {
  auth: {
    login: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Електронна пошта',
          type: 'email',
          placeholder: 'Електронна пошта'
        },
        {
          id: 'password',
          name: 'password',
          label: 'Введiть пароль',
          type: 'password',
          placeholder: 'Введiть пароль'
        }
      ],
      name: 'Увійти',
      link: [
        {
          id: 1,
          title: 'Забули свій пароль?',
          path: '/auth/reset'
        },
        {
          id: 2,
          title: 'Ще не маєте облікового запису? Зареєструйтесь зараз',
          path: '/auth/registration'
        }
      ]
    },
    registration: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Електронна пошта',
          type: 'email',
          placeholder: 'Електронна пошта'
        },
        {
          id: 'password',
          name: 'password',
          label: 'Введiть пароль',
          type: 'password',
          placeholder: 'Введiть пароль'
        },

        {
          id: 'confirmPassword',
          name: 'confirmPassword',
          label: 'Повторіть пароль',
          type: 'password',
          placeholder: 'Повторіть пароль'
        },
      ],
      name: 'Зареєструватися',
      link: [
        {
          id: 1,
          title: 'Уже маєте логін та пароль? Увійти',
          path: '/auth/login'
        }
      ]
    },
    reset: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Адрес электронной почты',
          type: 'email',
          placeholder: 'Адрес электронной почты'
        },
      ],
      name: 'Скинути пароль',
      link: [
        {
          id: 1,
          title: 'Згадали логин и пароль? Войти',
          path: '/auth/login'
        }
      ]
    },
  },
  nav: [
    {
      id: 1,
      name: 'Головна',
      link: '/'
    },
    {
      id: 2,
      name: 'Обо мне',
      link: '/about'
    },
    {
      id: 3,
      name: 'Замовлення',
      link: '/order'
    },
    {
      id: 4,
      name: 'Портфолiо',
      link: '/portfolio'
    },
    {
      id: 5,
      name: 'Вхiд',
      link: '/auth/login'
    },
    {
      id: 6,
      name: 'Зареєструватися',
      link: '/auth/registration'
    }
  ],
  todoText: 'немає записів'
};
