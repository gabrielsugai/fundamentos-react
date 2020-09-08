import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/First'
import Parametros from './components/basics/Parameters'
import Fragment from './components/basics/Fragment'

ReactDOM.render(<div> 
                    <Primeiro></Primeiro>
                    <Parametros titulo='React app' subtitulo='Projeto de testes'/>

                    <Fragment />
                </div>, document.getElementById('root'))
