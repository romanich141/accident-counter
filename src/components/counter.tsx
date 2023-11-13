import { ElementRef, useReducer, useRef } from 'react';
import { counterReducer, increment, decrement, reset } from '../store/counter';

const Counter = () => {
  const inputRef = useRef<ElementRef<'input'>>(null);
  const [state, dispatch] = useReducer(
    counterReducer,
    counterReducer.getInitialState(),
  );

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(decrement({ count: 1 }))}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
        <button onClick={() => dispatch(increment({ count: 1 }))}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input ref={inputRef} defaultValue={0} type="number" />
          <button
            type="submit"
            onClick={() => {
              dispatch(increment({ count: Number(inputRef.current?.value) }));
            }}
          >
            Update Counter
          </button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
