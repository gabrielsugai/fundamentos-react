import React from 'react'

import Primeiro from './components/basics/First'
import Parametros from './components/basics/Parameters'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

export default () => {
  return (
    <div>
      <Primeiro></Primeiro>
      <Parametros titulo='React app' subtitulo='Projeto de testes' />
      <Fragment />
      <Random min={1} max={10} />
    </div>
  )
}