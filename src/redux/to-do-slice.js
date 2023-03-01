import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addedToDo: (state, { payload }) => {
      console.log('payload', payload);
      state.todos.push(payload);
    },
  },
});

export const { addedToDo } = todosSlice.actions;

export default todosSlice.reducer;
