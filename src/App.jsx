import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basics/First'
import Parametros from './components/basics/Parameters'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

export default () => {
  return (
    <div>
      <Card titulo='Numero aleatorio'>
        <Random min={1} max={10} />
      </Card>

      <Card titulo='Primeiro componente'>
          <Primeiro></Primeiro>
      </Card>

      <Card titulo='Componente com parametros'>
        <Parametros titulo='React app' subtitulo='Projeto de testes' />
      </Card>

      <Card titulo='Fragmento'>
        <Fragment />
      </Card>
    </div>
  )
}