import React, { useState, useEffect } from "react";
import axios from "axios"; //fetch
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:4000/api/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default App;
