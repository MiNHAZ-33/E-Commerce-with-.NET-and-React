import { Product } from "../../models/products";
import { Button } from "@mui/material";
import { ProductList } from "./ProductList";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import Loading from "../../component/Loading";

const Catalog = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((product) => setProduct(product))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading message="Loading Products ....." />;
  }

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
