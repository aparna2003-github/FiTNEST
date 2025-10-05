import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://fitnest-jp6o.onrender.com";


function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = () => {
    axios.get(`${API}/wishlist`)
      .then(res => setWishlist(res.data))
      .catch(err => console.error(err));
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${API}/wishlist/${id}`);
      // remove from state without reload
      setWishlist(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to remove item");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {wishlist.map(item => (
            <div key={item.id} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center"
            }}>
              <img src={item.image} alt={item.name} style={{ width: "150px" }} />
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
