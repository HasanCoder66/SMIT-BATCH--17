import React from 'react'
import styled from 'styled-components'

const MyCard = styled.div`
background-color:red;
color:black;
border-radius:30px;
display:flex;
justify-content:center;
align-items:center;
height:400px

`

const Card = () => {
  return (
    <MyCard>Card</MyCard>
  )
}

export default Card