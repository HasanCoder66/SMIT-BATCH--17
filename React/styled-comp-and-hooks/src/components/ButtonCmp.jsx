import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
height : 50px;
border-radius : 20px;
padding : 10px;
font-size : 25px;
background:#292930;
color:white;
border:none;
cursor:pointer


`

const ButtonCmp = ({title, handler}) => {
  return (
   <Button onClick={handler}> {title} </Button>
  )
}

export default ButtonCmp