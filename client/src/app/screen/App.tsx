import React, { useEffect, useState } from 'react';
import { Product } from '../models/products';

function App() {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])


  return (
    <>
      <h1>App</h1>
      <ul>
        {product.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
