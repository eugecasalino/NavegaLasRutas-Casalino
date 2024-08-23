import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import '../ItemListContainer/ILC.css'


export const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    getOneProduct(id)
      .then((data) => setItem(data))
      .finally(() => setLoading(false))
  }, [id])


  if (loading) {
    return (
      <h1>Cargando...</h1>
    )
  }


  return (
    <div className='detalle-item'>
      <h2>{item.nombre}</h2>
      <img src={item.image} alt={item.nombre} />
      <p>Precio: {item.precio}</p>
      <p>Stock: {item.stock}</p>
      <p>Descripción: {item.description}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer