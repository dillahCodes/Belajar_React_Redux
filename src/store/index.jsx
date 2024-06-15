import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, test: 0 },
  reducers: {
    incrementFunction: (state) => {
      state.counter += 1;
    }, // function to increment state value
    decrementFunction: (state) => {
      state.counter -= 1;
    }, // function to decrement state value
    addbyFunction: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions; // export the actions

const userNameSlice = createSlice({
  name: "userName",
  initialState: { name: null },
  reducers: {
    setUserNameFunction: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const userNameActions = userNameSlice.actions; // export the actions

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // reducer for counter state
    userName: userNameSlice.reducer, // reducer for userName state
  },
});

export default store;
