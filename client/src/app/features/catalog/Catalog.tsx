import { Product } from "../../models/products";
import { Button } from "@mui/material";
import { ProductList } from "./ProductList";
import { useEffect, useState } from "react";
import agent from "../../api/agent";

const Catalog = () => {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((product) => setProduct(product));
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
