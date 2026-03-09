// // import React from 'react'
// import Card from './components/Card'
// import Navbar from './components/Navbar'

// // const App = () => {
// //   let isLoggedInUser = true

// //   let numbers = [1,2,3,4,5];

// //   // if(!isLoggedInUser){
// //   //   return <h1>Please Login!</h1>
// //   // }else {
// //   //   return <p>paragraph hai bekaar sa</p>
// //   // }

  

// //   return (

// //     //React Fragement
// //     <>


// // {/* Header */}
// // <Navbar />

// //  {/* <Card /> */}
 
// //  <Card username={"Ayaaan Faheem"} description={"ye ayaaan ki descripition hai..."}/>
// //  <Card  username={"Uzair Asif"} description={"ye Uzair Asif ki descripition hai..."} />



// // {/* <button className={`${status ? "bg-green": "bg-red"} card`}>Status</button> */}

// // <button className={`card ${status ? "bg-green" : "bg-red"}`} >Status</button>
// //  {/* Footer */}
   
// //    <ul className='' style={{display:"flex", flexDirection:"column"}}>
// //   {numbers && numbers.map((item,index) => {
// // return <li style={{color:"black"}} key={index}>{item}</li>
// //   })}
// // </ul>

// // {/* Ternory Operator */}
// // {/* <h1>{`${status ? "User Hai":"User ni hai"}  `}</h1> */}
// //     </>
// //   )
// // }

// // export default App



// // // ternery operator 

// // // condtion true "pehla wala chaly" : "false mai chly ga"

// // // 

// // // Components 


// // // ui piece of code 
// // // rafce 



// // import React from 'react'

// // const App = () => {
// //   return (
// //     //React Fragment
// //     <div>
// //       <div>1</div>
// //       <div>2</div>
// //     </div>
// //   )
// // }

// // export default App


// import React, { useState } from 'react'

// const App = () => {
  
//     // variableName      // initialize value 
//   const [student, setStudent] = useState(
//     {
//     name:"haider",
//     email :"haider@gmail.com",
//     skills : ["HTML", "CSS", "etc"]
//   }
// )  

  
  
//   // console.log(student)

//   // // const sendData = () => {
//   // //   console.log("data send kia gaya...")
//   // // }

//   // const objUpdate = () =>{
//   //   setStudent({
//   //     ...student,
//   //     name : "Hasan"
//   //   })
//   // }

//   // console.log(student)
//   return (
//     <div>
//      {/* <button onClick={objUpdate}>Update Your Array</button> */}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div>
//       <Card title="Hey User!"  description="hello buddy kesy ho umeed ker rha hon react enjoy ker rahy hogy"/>
//     </div>
//   )
// }

// export default App




import React from 'react'

const Parent = () => {

  const recieveData = (d) => {
console.log("Data :",d)
  }
  return (
    <div>

      <Child sendDataHandler={recieveData} />
    </div>
  )
}

const Child = ({sendDataHandler}) => {

  // console.log(sendDataHandler)
  const send = () => {
   sendDataHandler("Hello Jani kesy ho!")
  }

  return (
    <>
    <button onClick={send}>Send Data</button>
    </>
  )
}

export default Parent



// What is State?

// State React ka built in object hota ==> state ka kaam data ko store kerna component ke.

// "" 12 true [] {}


// How to Handle Events in React?


// use State in Depth

// useState ek React ka hook hai jo kia kerta hai state banata hai




// State VS Props 


// State ==>

  // internal memory 
  // component ko control kerti hai.
  // mutable == > Editable hoti hai.
  // use state sai banaty hain.



  // Props ==>
    // external memory 
    // parent control kerta hai.
    // immutable (Read Only)
    // parent sai props pass hoty hain.
    
    

    // State Management 

    // tmhary pass multiple component hongy or unky darmiyan apas mai data share kerny ko state management kehty hain. 