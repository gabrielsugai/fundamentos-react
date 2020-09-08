import React from 'react'
import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basics/First'
import Parametros from './components/basics/Parameters'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Family from './components/basics/Family'

export default () => {
  return (
    <div className='app'>
      <div className='cards'>

        <Card titulo='Numero aleatorio' color='#279'>
          <Family family='Silva'/>
        </Card>

        <Card titulo='Numero aleatorio' color='#080'>
          <Random min={1} max={10} />
        </Card>

        <Card titulo='Primeiro componente' color='#4fd'>
          <Primeiro></Primeiro>
        </Card>

        <Card titulo='Componente com parametros' color='#435'>
          <Parametros titulo='React app' subtitulo='Projeto de testes' />
        </Card>

        <Card titulo='Fragmento' color='#625'>
          <Fragment />
        </Card>
      </div>
    </div>
  )
}