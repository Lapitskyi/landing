import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const storeT = {
  state: {
    en: {
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
              placeholder: 'email'
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
        tableHeadlines: {
          fullName: 'fullName',
          text: 'text',
          phone: 'phone',
          email: 'email'
        },
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
          name: 'About me',
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
    },
    ua: {
      auth: {
        login: {
          input: [
            {
              id: 'email',
              label: 'Ім\'я користувача або адресу електронної пошти',
              type: 'text',
              placeholder: 'Ім\'я користувача або адресу електронної пошти'
            },
            {
              id: 'password',
              label: 'Пароль',
              type: 'text',
              placeholder: 'Пароль'
            }
          ],
          btnText: 'Увійти',
          link: [
            {
              id: 1,
              title: 'Забули свій пароль?',
              path: '/reset'
            },
            {
              id: 2,
              title: 'Ще не маєте облікового запису? Зареєструйтесь зараз',
              path: '/registration'
            }
          ]
        },
        registration: {
          input: [
            {
              id: 'email',
              label: 'Електронна пошта',
              placeholder: 'Електронна пошта'
            },
            {
              id: 'password',
              label: 'Пароль',
              placeholder: 'Пароль'
            },
            {
              id: 'repassword',
              label: 'Повторите пароль',
              placeholder: 'Повторите пароль'
            }
          ],
          btnText: 'Зареєструватися',
          link: [
            {
              id: 1,
              title: 'Уже маєте логін та пароль? Увійти',
              path: '/login'
            }
          ]
        },
        reset: {
          input: [
            {
              id: 'email',
              label: 'Електронна пошта',
              placeholder: 'Електронна пошта'
            },
          ],
          btnText: 'Сбросить пароль',
          link: [
            {
              id: 1,
              title: 'Згадали логін та пароль? ',
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
            fullName: '',
            info: [
              {
                id: 'text',
                heading: 'text',

                text: ''
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
            fullName: '',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: ''
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
          link: '/login'
        },
        {
          id: 6,
          name: 'Зареєструватися',
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
      ]
    },
    ru: {
      auth: {
        login: {
          input: [
            {
              id: 'email',
              label: 'Имя пользователя или адрес электронной почты',
              type: 'text',
              placeholder: 'Имя пользователя или адрес электронной почты'
            },
            {
              id: 'password',
              label: 'Пароль',
              type: 'text',
              placeholder: 'Пароль'
            }
          ],
          btnText: 'Войти',
          link: [
            {
              id: 1,
              title: 'Забыли Ваш пароль?',
              path: '/reset'
            },
            {
              id: 2,
              title: 'Еще нет учетной записи? Зарегистрироваться',
              path: '/registration'
            }
          ]
        },
        registration: {
          input: [
            {
              id: 'Электронная почта',
              label: 'Э',
              placeholder: 'Электронная почта'
            },
            {
              id: 'password',
              label: 'Пароль',
              placeholder: 'Пароль'
            },
            {
              id: 'repassword',
              label: 'Повторить пароль',
              placeholder: 'Повторить пароль'
            }
          ],
          btnText: 'Зарегистрироваться',
          link: [
            {
              id: 1,
              title: 'Уже есть логин и пароль? Войти',
              path: '/login'
            }
          ]
        },
        reset: {
          input: [
            {
              id: 'email',
              label: 'Електронна пошта',
              placeholder: 'Електронна пошта'
            },
          ],
          btnText: 'Сбросить пароль',
          link: [
            {
              id: 1,
              title: 'Вспомнили логин и пароль?',
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
            fullName: '',
            info: [
              {
                id: 'text',
                heading: 'text',

                text: ''
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
            fullName: '',
            info: [
              {
                id: 'text',
                heading: 'text',
                text: ''
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
          link: '/login'
        },
        {
          id: 6,
          name: 'Регистрация',
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
      ]
    },
    langToggle: {
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
    },
    themeToggle: {
      themeT: false,
    }
  }
};

export default storeT;
