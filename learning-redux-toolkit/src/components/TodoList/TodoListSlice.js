import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoApis from '../../apis/todoApis';

export const todoListSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    changeTodoStatus: (state, action) => {
      const currentState = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentState) {
        currentState.completed = !currentState.completed;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

// Middleware functions
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await todoApis.getAll();
  const todos = res.data;
  return todos;
});

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (newTodo) => {
    const res = await todoApis.add(newTodo);
    return res.data;
  }
);

// => todos/fetchTodos/pending
// => todos/fetchTodos/fullfilled
// => todos/fetchTodos/rejected
