import { createStore } from 'redux';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const reducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case 'add/feedback':
      return {
        ...state,
        [id]: state[id] + payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());
export default store;
