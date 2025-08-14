import React, { useState } from "react";

// Simple product data with different images
const products = [
  {
    id: 1,
    name: "Pink Rose Flower",
    price: 199,
    image: "/AdobeStock_185863251_Preview.jpeg.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Red Tulip",
    price: 249,
    image: "/AdobeStock_1403281017_Preview.png",
    rating: 3,
  },
  {
    id: 3,
    name: "Rose Pink",
    price: 299,
    image: "/AdobeStock_18670273_Preview.jpeg.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "White Lily",
    price: 179,
    image: "/dewy-white-lily-stockcake.jpg",
    rating: 4,
  },
];

function getStars(rating) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
    }
  }
  return stars;
}

export default function Item() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
            <div className="flex mb-2">{getStars(product.rating)}</div>
            <p className="text-green-600 font-bold">PKR {product.price}</p>
            <button
                className="mt-auto px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition-all duration-300"
                onClick={() => alert(`First Login Then Add "${product.name}" to cart!`)}
              >
                Add to Cart
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}