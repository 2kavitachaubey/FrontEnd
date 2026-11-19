import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container section empty-state">
      <h1 className="big-404">404</h1>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="btn">Go home</Link>
    </div>
  );
};

export default NotFound;
