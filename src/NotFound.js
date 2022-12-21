import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Ooops..Page Not Found</h2>
      <Link to={"/"}>Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
