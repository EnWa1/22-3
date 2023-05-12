import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const Head = () => {
    const cartProducts = useSelector(state => state.cart.products)
    const count = cartProducts.length;
  return (
    <div className='head'>
        <div className='header'>
          <div className="container">
            <div className='nav'>
                <span><NavLink to={"/"}>Main Page</NavLink></span>
                <span><NavLink to={"/cart"}>Bag</NavLink></span>
            </div>
            <span>Product Count: {count}</span>
          </div>
        </div>
        
        <Outlet/>
    </div>
  )
}

export default Head