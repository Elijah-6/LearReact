import { useState } from 'react';
import './App.css';
import { Task } from './components/Task';

function App() {
const [todoList, settodoList] = useState([])
  const [newTask, setnewTask] = useState("")
  
  const handleChange = (event) => {
    setnewTask(event.target.value);
  }

  const addTask = () => {
    const todo = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      todoName: newTask,
      completed : false,
    }
    settodoList([...todoList, todo]);
  }
  
  const deleteTask = (id) => {
    settodoList(todoList.filter(item => item.id !== id))
  }

  const completeTask = (id) => {
    settodoList(
      todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      } else {
        return todo;
      } 
    }))
  }

  return (
    <div className="App">
      <input onChange={handleChange} />
      <button onClick={addTask}>Add</button>
      <div>
        {todoList.map(todo => 
          <Task todoName ={todo.todoName}  id = {todo.id} deleteTask = {deleteTask} completeTask = {completeTask} completed ={todo.completed}/>
        )}
      </div>
      
    </div>
  );
}

export default App;
