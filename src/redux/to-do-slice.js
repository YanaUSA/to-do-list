import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addedToDo: (state, { payload }) => {
      state.todos.push(payload);
    },
    updateStatus: (state, { payload }) => {
      state.todos = payload;
    },
  },
});

export const { addedToDo, updateStatus } = todosSlice.actions;

export default todosSlice.reducer;
