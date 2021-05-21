const ADD_TODOS = 'ADD_TODOS';
const initialState = {
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
  todos: []
};
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, { id: 1, todo: action.todo }]
      };
    default:
      return state;
  }
};

export const addTodos = (todo) => ({ type: ADD_TODOS, todo });
export default tableReducer;
