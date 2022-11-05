import React from 'react'

export const Task = (props) => {
  return (
      <div>
          <div className= 'task' style ={{color: props.completed ? "green" : "red"}}>
            <h1>{props.todoName}</h1>
              <button onClick={() => props.deleteTask(props.id)}>X</button>
              <button onClick = {()=> props.completeTask(props.id)}>Yes</button>
          </div>
      </div>
  )
}
