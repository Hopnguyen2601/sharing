import { configureStore } from '@reduxjs/toolkit';
import { todoListSlice } from '../components/TodoList/TodoListSlice';

const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
  },
});

export default store;
