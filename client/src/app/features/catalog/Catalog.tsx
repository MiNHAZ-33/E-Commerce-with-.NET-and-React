import { Product } from "../../models/products";
import { Button } from "@mui/material";
import { ProductList } from "./ProductList";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
      <Button variant="outlined" color="primary">
        Add to Cart
      </Button>
    </>
  );
};

export default Catalog;
