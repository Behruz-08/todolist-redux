import React from 'react'
import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoCompleted} from '../slices/TodoSlice'

const TodoItem = ({id, text, completed}) => {

  const dispatch = useDispatch();


  return (
    <li style={{display:"flex", justifyContent:"space-between", backgroundColor:'lightgray'}} >
       <input type='checkbox'
         checked={completed}
       onChange={()=>dispatch(toggleTodoCompleted({id})) }
     
        />
          <span>{text}</span>
          <span
           style={{color:"red", cursor:'pointer'}} 
           onClick={()=>dispatch(removeTodo({id}))}
            >
                &times;
            </span>
      
        </li>
  );
};

export default TodoItem