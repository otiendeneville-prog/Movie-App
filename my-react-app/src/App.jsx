import React, { use, useEffect, useState } from 'react'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount ] = useState(0)

  useEffect( () =>{
    console.log(`{$title has been liked :{hasliked}}`);
  },deps[hasLiked]);
  
  useEffect( ()=>{
    console.log(`CARD RENDERED`)
  },deps[]);
  return (
    <div className='card'>
      
      <h2>{title}</h2>
      <button onClick={ ()=> setHasLiked(!hasLiked)}>{hasLiked ? "❤️" : "🤍"}</button>
      
      
    </div>
  )
}
const App = () => {
  return(
    <div className='card-container'>
      <Card title ="Avatar"/>
      <Card  title ="Spider Man"/>
      <Card title ="Avangers" />
    </div>
  )
}

export default App