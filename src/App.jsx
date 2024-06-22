
import { useState } from 'react'
import './App.css'
import TodoList from "./components/TodoList"
import InputField from './components/InputField'
import { useDispatch } from 'react-redux'
import { addTodo } from './slices/TodoSlice'

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTask =()=>{
    dispatch(
      addTodo ({text})
      )
    setText('')
  }
  
  
 
 


  return (
    <>
  <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
   <TodoList />

    </>
  )
}


export default App
