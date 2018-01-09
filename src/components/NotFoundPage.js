import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found!</h1>
    <h4>
      <Link
        to="/"
        className="btn btn-dark">Home</Link>
    </h4>
  </div>
);

export default NotFoundPage;
