import React, {useState} from 'react'

import './Input.css'

export default props =>{
  const [value, setValue] = useState('Inicial')

  function whenChange(e) {
    setValue(e.target.value)
  }

  return(
    <div className="Input">
      <h3>{value}</h3>
      <input value={value} onChange={whenChange}/>
    </div>
  )
}