import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
function Cart() {

const cartItems= useSelector((store)=>store.cart.items)
console.log(cartItems)
  return (
    <div>
      <h1 className='ml-[40%] underline mb-5'>CART</h1>
    {cartItems.length?<CartItems  items={cartItems}/>:<h3>Cart Empty. Add Items to the Cart</h3>}
   </div>
  )
}

export default Cart