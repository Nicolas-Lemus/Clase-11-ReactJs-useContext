import React from 'react'
import './ItemListContainer.css';
import Card from "../Card/Card"
import Headers from '../Headers/Headers';


const itemListContainer = ({tecnologia}) => {
    return (
        <div>
            <Headers HeadersH1="Productos"/>
            <div className='divPadre'>
            {
                tecnologia.map(producto => {
                    return(
                        <Card key={producto.id} tecnologia={producto}/>
                    )
                })
            }
        </div>
        </div>
        
    )
}

export default itemListContainer