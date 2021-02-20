import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("/api/products");
      const { products } = await res.data;

      setProducts(products);
    };

    getProducts();
  }, []);

  return products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
};

export default ProductList;
