import { CirclePlus, PencilOff, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  const toastHandler = (message) =>{
    toast(message)
  }

  const handleAddTodo = () => {

   if(input.trim() == "") return toastHandler("Please Enter a Task!")

    if(todos){
      const returnVal = todos.find((item) => item.text.includes(input))
      
      if(returnVal){
        setInput("")
        return toastHandler("Already Exist!")
      }
    }

    if(editTodo){
       const updateTodo = todos.map((item) => item.id == editTodo ? {...item, text:input} : item)

       setTodos(updateTodo)
       setInput("")
       setEditTodo(null)
       return
    }
   
    const todoItem = {
    text : input,
    id : Date.now()
   }

    setTodos((prev) => [...prev, todoItem])
    setInput("")
  }

  const deleteTodoHandler = (id) => {

    const findDeleteTodo = todos.filter((item) => item.id !== id)
    setTodos(findDeleteTodo)

  }

  const editTodoHandler = (id) => {
  const updateTodo = todos.find((item) => item.id == id)
  setInput(updateTodo.text)
  setEditTodo(updateTodo.id)
  }

  return (
   <div className='min-h-[300px] w-[400px] rounded-2xl bg-gray-700 flex flex-col justify-evenly  items-center'>
    <h1 className='font-bold text-4xl underline text-[#ffffff]'>Todo App</h1>

    <div className="inputBox  w-full px-2 flex justify-around">
      <input onChange={(e) => {
        setInput(e.target.value)
      }} 
      value={input}
      placeholder='Add Task here...' type="text" className='w-[70%] border-1 border-black outline-none rounded py-2 pl-5 text-white'/>
      <button onClick={handleAddTodo}  className='rounded cursor-pointer text-white font-bold w-[30%] bg-orange-400 flex justify-evenly items-center py-2'> <CirclePlus /> {editTodo ? "Update" : "Add"}</button>
    </div>

    {todos.map((item) => (
      <div key={item?.id} className="todoItem shadow-xl border w-full px-4 flex justify-between items-center">

      <div className="textBox">
        <p className='font-bold text-2xl text-[#ffffff]'>{item?.text}</p>
      </div>
      <div className="icons flex justify-evenly items-center py-2  w-[100px]">
        <PencilOff onClick={() => {
          editTodoHandler(item.id)
        }} className='cursor-pointer text-[#ffffff]'/>
        <Trash onClick={() => {
          deleteTodoHandler(item.id)
        }} className='cursor-pointer text-[#ffffff]' />
      </div>
    </div>
    ))}

    <ToastContainer />
   </div>
   
  )
}

export default App