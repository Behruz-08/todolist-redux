
import { useState } from 'react'
import './App.css'
import TodoList from "./components/TodoList"
import InputField from './components/InputField'
import { useDispatch } from 'react-redux'
import { addTodo } from './slices/TodoSlice'
import Navbar from './components/Navbar'


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
    <Navbar/>
    <div style={{width:"100vw", height:'60vh', }}>

  <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
   <TodoList />
    </div>

    </>
  )
}


export default App
