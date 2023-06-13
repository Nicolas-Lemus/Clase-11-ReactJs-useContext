import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Tecnologia from "../data/Tecnologia.json"
import { useParams } from 'react-router-dom';

const Category = () => {
    const {categoryid} = useParams()
    const CategorysFilter = Tecnologia.filter(producto => producto.category === categoryid)
    return (
        <div>
            <ItemListContainer tecnologia={CategorysFilter}/> 
        </div>
    )
}

export default Category


