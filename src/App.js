import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './actions'
function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Simple Redux template</h1>
      <h2>This is a counter: {counter}</h2>  
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {
        isLogged ? (
          <h3>Only for logged in users</h3>
        ) : (
          <h3>Nie jest zalogowany</h3>
        )
      }
    </div>
  );
}

export default App;
