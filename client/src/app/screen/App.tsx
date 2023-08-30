import React, { useEffect, useState } from 'react';
import { Product } from '../models/products';
import Catalog from '../features/catalog/Catalog';
import Typography from '@mui/material/Typography';
import Header from '../component/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

function App() {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])


  return (
    <>
      <CssBaseline/>
      <Header />
      <Container>
        <Catalog products = {product} />
      </Container>
      
    </>
  );
}

export default App;
