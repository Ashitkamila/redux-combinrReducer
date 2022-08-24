
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
import { login } from './redux/actions/actions';


function App() {
  const authState = useSelector(state=>state.authReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {authState.isLogin ? <>
        <Counter/>
        <hr/>
        <ComponentA/>
        <button onClick={()=>{
          dispatch(login(false))
        }}>Logout</button>
       </>:
       <button onClick={()=>{
        dispatch(login(true))
      }}>login</button>
    }
 
    </div>
  );
}

export default App;
