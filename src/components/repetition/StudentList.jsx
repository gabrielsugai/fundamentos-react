import React from 'react'
import students from '../../data/student'

export default props => {
  const studentLi = students.map((student) =>{
    return(
      <li key={student.id}>
        {student.id}) {student.name} - {student.grade}
      </li>
    )
  })
  return(
    <div>
      <ul>
        {studentLi}
      </ul>
    </div>
  )
}