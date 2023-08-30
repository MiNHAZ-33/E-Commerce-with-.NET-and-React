import React from 'react';
import { Product } from '../../models/products';

interface Props{
    product: Product;
}

const ProductCard = ({product} : Props) => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard