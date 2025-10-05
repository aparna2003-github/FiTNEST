import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "300px", borderRadius: "10px" }} 
      />
      <p>{product.description}</p>
      <h2>₹ {product.price}</h2>
      <button style={{ padding: "10px 20px", background: "black", color: "white" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
