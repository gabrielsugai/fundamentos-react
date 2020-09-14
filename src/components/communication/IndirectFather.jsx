import React, {useState} from 'react'

import IndirectSon from './IndirectSon'

export default props =>{
  const [name, setName] = useState('?')
  const [age, setAge] = useState(0)
  const [nerd, setNerd] = useState(false)



  function setInformations(name, age, nerd){
    setName(name)
    setAge(age)
    setNerd(nerd)
  }
  return(
    <div>
      <p>{name} {age} {nerd ? 'Verdadeiro' : 'Falso'}</p>
      <IndirectSon whenClick={setInformations}/>
    </div>
  )
}