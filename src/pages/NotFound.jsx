import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px"
    }}>
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px"
      }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
