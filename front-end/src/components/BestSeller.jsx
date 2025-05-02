import React, { useContext } from "react";
import { useState, useEffect } from "react";

import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const BestSeller = () => {
  const { products } = useContext(Shopcontext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 text-xs m-auto sm:text-sm md:text-base text-gray-600">
          Discription should be added here
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4">
        {bestSeller.map((items, index) => (
          <ProductItems
            key={index}
            id={items._id}
            name={items.name}
            image={items.image}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
