import { useDispatch, useSelector } from "react-redux";
import { counterActions, userNameActions } from "./store";
import { useState } from "react";

function App() {
  return (
    <>
      <CounterComponent />
      <ChangeNameComponent />
    </>
  );
}

export default App;

const ChangeNameComponent = () => {
  const [name, setName] = useState(""); // local state

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName.name);

  // handle change set local state
  const handleChange = (e) => setName(e.target.value);

  // handle change user name by click button
  const handleClick = () => dispatch(userNameActions.setUserNameFunction(name));

  return (
    <div>
      <h1>change name by click button</h1>
      <p>user name: {userName}</p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); // select the state from store

  const increment = () => dispatch(counterActions.incrementFunction()); // dispatch action
  const decrement = () => dispatch(counterActions.decrementFunction()); // dispatch action
  const addBy = () => dispatch(counterActions.addbyFunction(-30)); // dispatch action

  return (
    <div>
      <h1>Counter APP {counter}</h1>
      <button onClick={increment}>tambah 1</button>
      <button onClick={decrement}>kurangi 1</button>
      <button onClick={addBy}>tambah 10</button>
    </div>
  );
};
