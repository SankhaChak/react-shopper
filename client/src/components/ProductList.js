import axios from "axios";
import { useQuery } from "react-query";
import LoadingSpinner from "./LoadingSpinner";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { data: products, isLoading } = useQuery("Products", () =>
    axios.get("/api/products").then((res) => res.data.products)
  );
  if (isLoading) return <LoadingSpinner />;

  return products.map((product) => (
    <ProductItem key={product?.id} product={product} />
  ));
};

export default ProductList;
