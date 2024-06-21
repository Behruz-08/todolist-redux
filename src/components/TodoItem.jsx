import React from 'react'

const TodoItem = ({id, text, completed,toggleTodoCompleted,removeTodo}) => {
  return (
    <li style={{display:"flex", justifyContent:"space-between", backgroundColor:'lightgray'}} >
       <input type='checkbox'
       
       onChange={()=>toggleTodoCompleted(id)}
       checked={completed} />
          <span>{text}</span>
          <span
           style={{color:"red", cursor:'pointer'}} 
           onClick={()=>removeTodo(id)}
            >
                &times;
            </span>
      
        </li>
  )
}

export default TodoItem