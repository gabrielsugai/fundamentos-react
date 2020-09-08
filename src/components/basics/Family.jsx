import React from 'react'

import FamilyMember from './FamilyMember'

export default props =>{
  return(
    <div>
      <FamilyMember name='Joao' family={props.family}/>
      <FamilyMember name='Antonio' {...props}/>
      <FamilyMember name='Jose' family='Oliveira'/>
    </div>
  )
}