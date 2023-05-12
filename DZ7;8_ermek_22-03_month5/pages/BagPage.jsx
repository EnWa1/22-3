import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MerchandiseCard from '../components/MerchandiseCard/MerchandiseCard.jsx'

const BagPage = () => {
  const cartList = useSelector(state => state.cart.products)
  console.log(cartList);
  if(cartList.length === 0) return <div className='container'>Please add something to you basket</div>
  return (
    <div className='container'>
        {cartList.map(prod => <MerchandiseCard prod={prod} key={prod.id}/>)}
    </div>
  )
}

export default BagPage