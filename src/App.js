import React from 'react'

const Hello = ({name,age}) =>{
  
  const Age = () =>{
    const year = new Date().getFullYear();
    return year - age;
  }
  return(
    <div>
      <p>
      Hello {name}, you are {age} years old currently!
    </p>
    <p>
      According to my calculations, you were born in {Age()}
    </p>
    </div>
  )
}

const App = () => {
  const name = "Mya"
  const age = 20

  return(
    <div>
      <p>Pleasure seeing you here today!</p>
      <Hello name = {name} age = {age}/>
    </div>

  )
}


export default App