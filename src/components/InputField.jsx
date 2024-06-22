import React from 'react'
import Button from 'react-bootstrap/Button';
import { Input } from "@material-tailwind/react";

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <>
    <label style={{display:"flex", width:"50vw", height:"10vh",  gap:"1rem", marginBlock:"2rem"}}>
    <Input   value={text}
    onChange={(e)=>handleInput(e.target.value)} label="Введите задачу"  color="teal" />
    <Button style={{width:"150px", height:"5vh"}} variant="outline-primary" onClick={handleSubmit}>Add-Todo</Button>
  </label>

    </>
  )
}

export default InputField