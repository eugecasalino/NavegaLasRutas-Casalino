import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = ({producto}) => {
  const {nombre, image, precio} = producto

return (
  <div>
  <h3>{nombre}</h3>
  <img src={image} alt={'foto del producto ${nombre}'}/>
  <p>{precio}</p>
  <p>{item.description}</p>
  </div>
)
}

export default ItemDetail