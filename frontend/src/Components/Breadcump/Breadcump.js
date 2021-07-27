import React from 'react';
import { Link } from 'react-router-dom';

const Breadcump = ({ page }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {page}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcump;
