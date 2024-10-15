import React, { useEffect, useState, Suspense } from "react";
import { fetchProducts } from "../api"; // Your API function
import LoadingSpinner from "./LoadingSpinner";
import './ProductList.css'; // Optional for custom styles

const ProductItem = React.lazy(() => import("./ProductItem"));

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="container my-4">
      <div className="row product-list">
        {products.length === 0 ? (
          <LoadingSpinner />
        ) : (
          products.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
              <Suspense fallback={<LoadingSpinner />}>
                <ProductItem product={product} />
              </Suspense>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
