export default {
  auth: {
    login: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'email'
        },
        {
          id: 'password',
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'password'
        }
      ],
      name: 'Sing in',
      link: [
        {
          id: 1,
          title: 'Forgot your password?',
          path: '/auth/reset'
        },
        {
          id: 2,
          title: 'Don\'t have an account yet? Register now',
          path: '/auth/registration'
        }
      ]
    },
    registration: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'email'
        },
        {
          id: 'password',
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'password'
        },
        {
          id: 'confirmPassword',
          name: 'confirmPassword',
          label: 'Confirm Password',
          type: 'password',
          placeholder: 'confirmPassword'
        },
      ],
      name: 'Sing Up',
      link: [
        {
          id: 1,
          title: 'Already have login and password? Sign in',
          path: '/auth/login'
        }
      ]
    },
    reset: {
      input: [
        {
          id: 'email',
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'email'
        },
      ],
      name: 'Reset password',
      link: [
        {
          id: 1,
          title: 'Already have login and password? Sign in',
          path: '/auth/login'
        }
      ]
    },
  },
  nav: [
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
      link: '/auth/login'
    },
    {
      id: 6,
      name: 'Registration',
      link: '/auth/registration'
    }
  ]
};
