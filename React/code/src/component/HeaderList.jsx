import React from 'react'

const HeaderList = ({title, children}) => {
  // const userArr = [{username :"hasan", userId : 12}, {username :"sufiyan", userId : 212},{username :"uzair", userId : 122}]
    // console.log(title)

    // const removeElem = (e)=> {
    //   console.log(e.target)
    // }
    let listArr = ["Home","About","Services"]
  return (
    <ul className='flex gap-3'>
        {listArr.map((item, index) => <li key={index}>{item}</li>)}
        {children}
      {/* <div> */}
        {/* {userArr.map((item, i) => <li
        //  onClick={removeElem} 
         key={item.userId}>{item.username}</li>)} */}
      {/* </div> */}
    </ul>
  )
}

export default HeaderList