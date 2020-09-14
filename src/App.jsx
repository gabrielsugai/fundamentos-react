import React from 'react'
import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basics/First'
import Parametros from './components/basics/Parameters'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentList from './components/repetition/StudentList'
import FruitsTable from './components/repetition/FruitsTable'
import OddOrEven from './components/condicional/OddOrEven'
import UserInfo from './components/condicional/UserInfo'
import IndirectFather from './components/communication/IndirectFather'
import Input from './components/form/Input'

export default () => {
  return (
    <div className='app'>
      <div className='cards'>

        <Card titulo='Componente controlado' color='#E45F56'>
          <Input />
        </Card>

        <Card titulo='Comunicação indireta' color='#529'>
          <IndirectFather />
        </Card>

        <Card titulo='Renderização Condicional' color='#529'>
          <OddOrEven number={20} />
          <UserInfo user={{ name: 'Gabriel' }} />
          <UserInfo />
        </Card>

        <Card titulo='Repetição Tabela' color='#529'>
          <FruitsTable />
        </Card>

        <Card titulo='Repetição' color='#979'>
          <StudentList />
        </Card>

        <Card titulo='Exemplo de familia' color='#279'>
          <Family family='Silva'>
            <FamilyMember name='Joao' />
            <FamilyMember name='Antonio' />
            <FamilyMember name='Jose' />
          </Family>
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