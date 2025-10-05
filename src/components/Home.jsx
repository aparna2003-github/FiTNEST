import React from "react";
import { Routes, Route } from 'react-router-dom'
import Products from "./Products"

const newArrivals = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹869",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/10/352762717/OE/IX/MF/185456460/86-500x500.jpg",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: "₹1199",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/light-denim-mens-jacket-2187892245-fy0e9b9u.jpg",
  },
  {
    id: 3,
    name: "Striped Cotton Shirt",
    price: "₹799",
    img: "https://m.media-amazon.com/images/I/81BxKx1fEmL._UY1100_.jpg",
  },
];

const topSelling = [
  {
    id: 1,
    name: "Classic Black Jeans",
    price: "₹1299",
    img: "https://rukminim2.flixcart.com/image/704/844/xif0q/jean/r/f/z/30-wd-black-j-bili-patra-original-imahejvgsdnhz5qt.jpeg?q=90&crop=false",
  },
  {
    id: 2,
    name: "Cozy Winter Sweater",
    price: "1899",
    img: "https://i5.walmartimages.com/seo/Women-s-Solid-Color-Sweaters-Long-Sleeve-Cowl-Neck-Pullover-Oversized-Loose-Knit-Sweater-Jumper-Tops_45a5cb0d-4799-46a3-80ec-42dd419c8aac.a1bee3ad1fc74a2d4be587ad7ba99b8c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: 3,
    name: "Hooded Sweatshirt",
    price: "₹59",
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sweatshirt/k/j/t/xxl-gp-mr-dtquits-h-003-picpok-original-imah2y5p2etk54nv.jpeg?q=90&crop=false",
  },
];

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Store!</h1>

      <section className="product-section">
        <h2>New Arrivals</h2>
        <div className="products-grid">
          {newArrivals.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Top Selling Products</h2>
        <div className="products-grid">
          {topSelling.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <Routes>
      <Route path="/" element={<Products/>} />
      </Routes>
    </div>
  );
}

export default Home;
