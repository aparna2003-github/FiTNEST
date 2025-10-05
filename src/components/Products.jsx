import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Link } from "react-router-dom";


const API = 'http://localhost:5000'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${API}/products`)
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const handleAddToCart = async product => {
    try {
      const item = { ...product, quantity: 1 }
      await axios.post(`${API}/cart`, item)
      alert(`${product.name} added to cart`)
    } catch (e) {
      console.error(e)
      alert('Failed to add to cart')
    }
  }

  if (loading) return <div className="loading">Loading products...</div>

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
        ))}
      </div>
    </section>
  )
}
