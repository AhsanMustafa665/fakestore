import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <div className="row container mx-auto" style={{ gap: "0px 100px" }}>
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            setCartCount={setCartCount}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
