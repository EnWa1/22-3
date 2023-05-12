import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../store/BasketReducer.js';

const MerchandiseCard = ({prod}) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.products)

  const isInCart = (checkProd) => {
    console.log(cartProducts.includes(checkProd));
    if(cartProducts.includes(checkProd)) return true
    return false
  }

  return (
    <div className='MerchandiseCard'>
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>

        {isInCart(prod) ? <button onClick={() => {
          dispatch(deleteProduct(prod._id))         
        }}>Remove from bag</button>
        : 
        <button onClick={() => {
          dispatch(addProduct(prod))          
        }}>Add to bag</button>}
        
    </div>
  )
}

export default MerchandiseCard