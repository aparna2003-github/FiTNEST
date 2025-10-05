function Footer() {
  return (
    <footer style={{
      background: "#111",
      color: "#fff",
      padding: "40px 20px",
      marginTop: "40px"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        textAlign: "left"
      }}>
        {/* Company Info */}
        <div>
          <h3>FiTNEST</h3>
          <p>Discover the latest trends in fashion at unbeatable prices.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <li><a href="/products" style={{ color: "#fff" }}>Shop</a></li>
            <li><a href="/cart" style={{ color: "#fff" }}>Cart</a></li>
            <li><a href="/about" style={{ color: "#fff" }}>About Us</a></li>
            <li><a href="/contact" style={{ color: "#fff" }}>Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4>Customer Service</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/faq" style={{ color: "#fff" }}>FAQs</a></li>
            <li><a href="/returns" style={{ color: "#fff" }}>Returns</a></li>
            <li><a href="/shipping" style={{ color: "#fff" }}>Shipping Info</a></li>
            <li><a href="/privacy" style={{ color: "#fff" }}>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact Us</h4>
          <p>Email: support@trendora.com</p>
          <p>Phone: +91 98765 43XXX</p>
          <p>Location: Kochi, India</p>
        </div>
      </div>

      <hr style={{ border: "0.5px solid #333", margin: "20px 0" }} />

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        &copy; {new Date().getFullYear()} FiTNEST. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
