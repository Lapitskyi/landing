export default {
  auth: {
    login: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Адрес электронной почты'
        },
        {
          id: 'password',
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Введите пароль'
        }
      ],
      name: 'Sing in',
      link: [
        {
          id: 1,
          title: 'Забыли Ваш пароль?',
          path: '/auth/reset'
        },
        {
          id: 2,
          title: 'Еще нет учетной записи? Зарегистрироваться',
          path: '/auth/registration'
        }
      ]
    },
    registration: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Адрес электронной почты',
          type: 'email',
          placeholder: 'Адрес электронной почты'
        },
        {
          id: 'password',
          name: 'password',
          label: 'Введите пароль',
          type: 'password',
          placeholder: 'Введите пароль'
        },

        {
          id: 'confirmPassword',
          name: 'confirmPassword',
          label: 'Повторите Пароль',
          type: 'password',
          placeholder: 'Повторите Пароль'
        },
      ],
      name: 'Зарегестрироваться',
      link: [
        {
          id: 1,
          title: 'Уже есть логин и пароль? Войти',
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
      name: 'Сбросить',
      link: [
        {
          id: 1,
          title: 'Вспомнили логин и пароль? Войти',
          path: '/auth/login'
        }
      ]
    },
  },
  nav: [
    {
      id: 1,
      name: 'Главная',
      link: '/'
    },
    {
      id: 2,
      name: 'Обо мне',
      link: '/about'
    },
    {
      id: 3,
      name: 'Заказы',
      link: '/order'
    },
    {
      id: 4,
      name: 'Портфолио',
      link: '/portfolio'
    },
    {
      id: 5,
      name: 'Вход',
      link: '/auth/login'
    },
    {
      id: 6,
      name: 'Регистрация',
      link: '/auth/registration'
    }
  ],
  todoText: 'нет записей'
};
