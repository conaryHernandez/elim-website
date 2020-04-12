import React from 'react';
import { Link } from 'react-router-dom';

export default function Mission() {
  return (
    <div className="container">
      <h1>Mision Cristiana Elim</h1>
      <Link to="/iglesias">Ver iglesias</Link>
    </div>
  );
}
