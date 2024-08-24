import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        getProducts()
            .then((data) => {
                if (categoriaId) {
                    setProductos(data.filter(item => item.categoria === categoriaId));
                } else {
                    setProductos(data);
                }
            })
            .finally(() => setLoading(false))
    }, [categoriaId]);

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div className="product-list">
            <ItemList productos={productos} />
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer