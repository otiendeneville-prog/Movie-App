const Card = ({title}) => { 
return(
  <div>
  <h1>{title}</h1>
  </div>
)
}

const App = ({title}) => {
  return(
    <div>
      <h1>Function Arrow Component</h1>
      <Card  title = "Avartar"/>
      <Card title= "Spider Man" />
      <Card title = "Avangers" />

    </div>
  )
}