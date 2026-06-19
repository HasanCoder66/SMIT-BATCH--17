import axios from "axios";
import React, { useEffect, useState } from "react"


const App = () => {

  const [users, setUsers] = useState([])

  const apiCall =  async () => {
console.log("meri api call hoiii...");

const apiResult = await axios.get("http://localhost:5500/user")
// console.log(apiResult.data?.data);
setUsers(apiResult?.data?.data)

  }


  useEffect(() => {
    apiCall()
  }, [])

  return (
<>
{users.map((user) => (<h1>Hello from the server!</h1>))}
</>
  )
}


export default App