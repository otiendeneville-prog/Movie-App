import React from 'react'

const Card = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}

const App = () => {
  return(
    <div>
      <h2>Functional Arrow Components</h2>
      <Card title ="Avatar"/>
      <Card  title ="Spider Man"/>
      <Card title ="Avangers" />
    </div>
  )
}

export default App