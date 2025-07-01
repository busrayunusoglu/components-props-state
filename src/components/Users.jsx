import React from 'react'

function Hello({name,age,city}) {
  return (
    <>
    <h1>Hello {name} !</h1>
    <h3>Age: {age} City: {city}</h3>
    </>
  )
}

export default Hello