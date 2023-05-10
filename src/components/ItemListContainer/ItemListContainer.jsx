import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../asyncmock'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h2> {greeting} </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer