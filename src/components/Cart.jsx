import React, {useEffect, useState} from 'react'
import axios from 'axios'


const API = "https://fitnest-jp6o.onrender.com";


export default function Cart(){
const [cart, setCart] = useState([])
const [loading, setLoading] = useState(true)


const fetchCart = async ()=>{
setLoading(true)
try{
const res = await axios.get(`${API}/cart`)
setCart(res.data)
}catch(e){
console.error(e)
}finally{ setLoading(false) }
}


useEffect(()=>{ fetchCart() }, [])


const removeItem = async (id) =>{
try{
await axios.delete(`${API}/cart/${id}`)
fetchCart()
}catch(e){ console.error(e) }
}


const total = cart.reduce((sum,item)=> sum + (item.price * (item.quantity || 1)), 0)


if(loading) return <div className="loading">Loading cart...</div>


return (
<section className="cart-page">
<h2>Your Cart</h2>
{cart.length === 0 ? (
<p>Your cart is empty.</p>
) : (
<div>
<ul className="cart-list">
{cart.map(item=> (
<li key={item.id} className="cart-item">
<img src={item.image} alt={item.name} />
<div>
<h4>{item.name}</h4>
<p>₹{item.price} x {item.quantity || 1}</p>
</div>
<div>
<button className="remove" onClick={()=> removeItem(item.id)}>Remove</button>
</div>
</li>
))}
</ul>
<div className="cart-total">Total: <strong>₹{total}</strong></div>
<div className="cart-actions">
<button onClick={()=> alert('Checkout not implemented in demo')}>Proceed to Checkout</button>
</div>
</div>
)}
</section>
)
}