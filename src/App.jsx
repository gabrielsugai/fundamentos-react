import React from 'react'

import Primeiro from './components/basics/First'
import Parametros from './components/basics/Parameters'
import Fragment from './components/basics/Fragment'

export default () => {
  return (
    <div>
      <Primeiro></Primeiro>
      <Parametros titulo='React app' subtitulo='Projeto de testes' />
      <Fragment />
    </div>
  )
}