import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { decrememnt, increment } from "./Action";


function App() {

  const counter = useSelector(state=>state.counter);
  const logged = useSelector(state=>state.logged);

  const dispatch =useDispatch();
  
  return (
    <div className="App">
    <h1>Counter {counter}</h1>
    <button onClick={()=>dispatch(increment())}> +</button>
    <button onClick={()=>dispatch(decrememnt())}>-</button>

    </div>
  );
}

export default App;
