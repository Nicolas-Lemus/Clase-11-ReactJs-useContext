import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Tecnologia from "../data/Tecnologia.json"
import Headers from '../components/Headers/Headers';


const Products = () => {
    return (
        <div>
            <Headers/>
            <ItemListContainer tecnologia={Tecnologia}/>
        </div>
    )
}

export default Products