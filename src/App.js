import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import { addItem } from './todoSlice';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const todos = useSelector((store)=>store.todo);
  console.log(todos);

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addItem(todo));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App using Redux</h2>
        <form onSubmit={handleSubmit}>
        <input placeholder='enter todo'
        style={{width:"400px",fontSize:"20px",padding:"14px 6px",borderRadius:"20px",border:"none",outline:"none"}}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit' style={{padding:"14px",marginLeft:"20px",fontSize:"20px",borderRadius:"50%",border:"none"}}>Add</button>
        </form>
        <ul className='alltodo'>
          {
            todos && todos.todoItems.map((t,i)=>(
                <li key={i} className='singletodo'>
                  <span style={{padding:"8px",fontSize:"20px",color:"black"}}>{t}</span>
                  <button style={{padding:"10px",border:"none",borderRadius:"24px",backgroundColor:"greenyellow",color:"black"}}>Delete</button>
                </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
