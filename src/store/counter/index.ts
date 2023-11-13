import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction(
  'count/increment',
  ({ count }: { count: number }) => {
    return {
      payload: count,
    };
  },
);

export const decrement = createAction(
  'count/decrement',
  ({ count }: { count: number }) => {
    return {
      payload: count,
    };
  },
);

export const reset = createAction('count/reset');

export const counterReducer = createReducer({ count: 0 }, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.count += action.payload;
  });

  builder.addCase(decrement, (state, action) => {
    state.count -= action.payload;
  });

  builder.addCase(reset, (state) => {
    state.count = 0;
  });
});
