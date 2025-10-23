import React from "react";
import Item from "./Item";
import { NavLink } from "react-router-dom";

const featuredProducts = [
  {
    img: "/pexels-photo-736230.webp",
    name: "Pink Rose Flower",
    price: "PKR 199", 
    rating: 4,
  },
 
];

const brands = [
  { img: "/new-Jazzcash-logo.png", alt: "Jazzcash" },
  { img: "/Easypaisa_logo.png", alt: "Easypaisa" },
  { img: "/c0b00adf5e538d31283bbad251f52e37.png", alt: "Brand 3" },
  { img: "/712e49174307da7bba5985de735a64e5.png", alt: "Brand 4" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
    
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-fadeInLeft">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              Nature does not hurry, yet<br /> everything is accomplished.
            </h1>
            <p className="mb-6 text-gray-600">
              We grow plants with patience, not pressure. Each leaf and bloom here unfolds at its own perfect pace, just as nature intended.
              Welcome to a nursery where growth is gentle, mindful, and deeply rooted in harmony.
            </p>
            <NavLink
              to="/product"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105 duration-300 font-semibold"
            >
              Explore Now &#x279D;
            </NavLink>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fadeInRight">
            <img
              src="/pexels-minan1398-793012.jpg"
              className="rounded-xl shadow-xl w-full max-w-md object-cover"
              alt="Main Plant"
            />
          </div>
        </div>
      </div>

  
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <img
              src="/AdobeStock_18670273_Preview.jpeg.jpg"
              alt="Category 1"
              className="w-full md:w-1/3 rounded-lg shadow-md hover:scale-105 transition duration-300"
            />

            
            <img
              src="/AdobeStock_185863251_Preview.jpeg.jpg"
              alt="Category 2"
              className="w-full md:w-1/3 rounded-lg shadow-md hover:scale-105 transition duration-300"
            />
            <img
              src="/AdobeStock_1403281017_Preview.png"
              alt="Category 3"
              className="w-full md:w-1/3 rounded-lg shadow-md hover:scale-105 transition duration-300"
            />
            
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 animate-fadeInUp"
            >
              <a href="single-product-detail.html">
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
              </a>
              <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star${i < product.rating ? "" : "-o"} text-yellow-400 mr-1`}
                  />
                ))}
              </div>
              <p className="text-green-700 font-bold">{product.price}</p>
              <button
                className="mt-auto px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition-all duration-300"
                onClick={() => alert(`First Login Then ADD  "${product.name}" to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center animate-fadeInLeft">
              <img
                src="/AdobeStock_1403281017_Preview.png"
                className="rounded-xl shadow-xl w-full max-w-md object-cover"
                alt="Offer"
              />
            </div>
            <div className="md:w-1/2 animate-fadeInRight">
              <p className="text-green-700 font-semibold mb-2">
                Exclusively Available On "Nurture"
              </p>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
                The Red Rose Flower
              </h1>
              <small className="block mb-4 text-gray-600">
                A symbol of grace and admiration, our vibrant pink roses bloom with delicate, velvety petals in lush shades of soft pink.
                These fragrant beauties grow as compact bushes, perfect for gardens or decorative pots.
                Each flower carries the classic rose fragrance with a light, sweet aroma.
              </small>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105 duration-300 font-semibold"
              >
                Buy Now &#x279D;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {/* <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fadeInUp">
            <i className="fa fa-quote-left text-green-600 text-3xl mb-4"></i>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam adipisci soluta, facere debitis aut itaque iusto magnam quam in consequuntur maxime ipsum cupiditate numquam. Reiciendis inventore nulla sed laudantium corrupti!
            </p>
            <div className="flex items-center mb-2">
              {[...Array(4)].map((_, i) => (
                <i key={i} className="fa fa-star text-yellow-400 mr-1" />
              ))}
              <i className="fa fa-star-o text-yellow-400" />
            </div>
            <h3 className="font-semibold text-gray-800">Qasim Raza</h3>
          </div>
        </div>
      </div> */}

      {/* Brands */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, idx) => (
              <img
                key={idx}
                src={brand.img}
                alt={brand.alt}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      
      <style>
        {`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInLeft { animation: fadeInLeft 1s ease; }
          .animate-fadeInRight { animation: fadeInRight 1s ease; }
          .animate-fadeInUp { animation: fadeInUp 1s ease; }
        `}
      </style>
    </div>
  );

}

