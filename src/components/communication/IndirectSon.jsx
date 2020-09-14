import React from 'react'

export default props => {
  const setAge = () => parseInt(Math.random() * (20)) + 50
  const setNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <div>
        <button onClick={
          function (params) {
            props.whenClick('Jose', setAge(), setNerd())
          }}>
            Enviar informações
        </button>
      </div>
    </div>
  )
}