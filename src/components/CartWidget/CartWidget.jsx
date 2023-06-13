import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import { CardContext } from '../../context/CartContext';

const CartWidget = () => {
//pasamos el estado del useContext
    const [count] = useContext(CardContext);

    return (
        <div className='cart'>
            <FontAwesomeIcon className='icon' icon={faCartShopping}/>
            <span>{count}</span>
        </div>
    )
}
export default CartWidget