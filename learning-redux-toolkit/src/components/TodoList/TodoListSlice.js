import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      name: 'Learning React',
      completed: false,
    },
    {
      id: 2,
      name: 'Learning Redux',
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    changeTodoStatus: (state, action) => {
      // action.payload = id
      const currentState = state.find((todo) => todo.id === action.payload);
      if (currentState) {
        currentState.completed = !currentState.completed;
      }
    },
  },
});

/**
 * {
 * 	typpe: 'todos/addTodo'
 * }
 * {
 * 	typpe: 'todos/updateTodo'
 * }
 */
