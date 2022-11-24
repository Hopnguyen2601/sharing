// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { todoLislSlice } from '../components/TodoList/TodosSlice';

const store = configureStore({
  reducer: {
    todoList: todoLislSlice.reducer,
  },
});

export default store;
