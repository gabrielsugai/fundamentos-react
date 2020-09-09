import React from 'react'
import fruits from '../../data/products'

export default props => {
  const fruitsTr = fruits.map((fruit) => {
    return (
      <tr key={fruit.id}>
        <td>{fruit.id}</td>
        <td>{fruit.name}</td>
        <td>R$ {fruit.price}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fruta</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {fruitsTr}
      </tbody>
    </table>
  )
}
