import React from 'react'

import If from './If'

export default props => {
  const user = props.user || {}
  return (
    <div>
      <If test={user && user.name}>
        Seja bem vindo <strong>{user.name}</strong>!
      </If>
      <If test={!user || !user.name}>
        Seja bem vindo <strong>visitante</strong>!
      </If>
    </div>
  )
}