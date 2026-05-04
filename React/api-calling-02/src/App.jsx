import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './features/todo/todoSlice';

const App = () => {
const todo = useSelector((state) => state.todo)
// console.log(todo);

const dispatch = useDispatch()


  // technique 1 api calling ==> 

  // const [todos, setTodos] = useState([])
  // const apiCall = async () => {
  //   console.log("api call ==>");

  //   let apiRes = await axios.get("https://jsonplaceholder.typicode.com/todos")
    
  //   const {data} = apiRes

  //   setTodos(data)
    
    
  // }

  // useEffect(() => {
  //   apiCall()
  // }, [])

  useEffect(() => {
  dispatch(getTodos())  
  }, [])

  // console.log(todos)

  return (
    <div>
      app
    </div>
  )
}

export default App
