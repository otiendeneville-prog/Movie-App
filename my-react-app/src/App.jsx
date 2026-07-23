import React, { useEffect, useState } from 'react'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount ] = useState(0)

  useEffect( () =>{
    console.log(`{$title has been liked :{hasliked}}`);
  },[hasLiked]);
  
 
  return (
    <div className='card' onClick={() => setCount(count+1)}>
      
      <h2>{title} <br /> {count || null}</h2>
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