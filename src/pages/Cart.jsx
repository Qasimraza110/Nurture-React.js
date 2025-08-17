import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "The pink rose flower",
    price: 199.9,
    image: "/pexels-photo-736230.webp",
    quantity: 1,
  },
  {
    id: 2,
    name: "The pink rose flower",
    price: 199.9,
    image: "/pexels-sura-1023767795-31673478.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "The pink rose flower",
    price: 199.9,
    image: "/pexels-minan1398-793012.jpg",
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const handleQuantity = (id, value) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Number(value)) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = cart.length ? 100 : 0;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-8 px-2 animate-fade-in">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Your Cart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="pb-2">Product</th>
                <th className="pb-2">Quantity</th>
                <th className="pb-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="bg-green-50 hover:bg-green-100 transition">
                  <td className="flex items-center gap-3 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover shadow"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <small className="text-gray-500">Price: PKR {item.price}</small>
                      <br />
                      <button
                        className="text-red-500 hover:underline text-xs mt-1"
                        onClick={() => handleRemove(item.id)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantity(item.id, e.target.value)}
                      className="w-16 border rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                  </td>
                  <td>PKR {(item.price * item.quantity).toFixed(1)}</td>
                </tr>
              ))}
              {cart.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-8 text-gray-400">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    
        <div className="mt-8 flex flex-col items-end animate-slide-in">
          <table className="w-full max-w-xs text-right">
            <tbody>
              <tr>
                <td className="font-medium">Subtotal</td>
                <td>PKR {subtotal.toFixed(0)}</td>
              </tr>
              <tr>
                <td className="font-medium">Tax</td>
                <td>PKR {tax}</td>
              </tr>
              <tr>
                <td className="font-bold text-green-700">Total</td>
                <td className="font-bold text-green-700">PKR {total.toFixed(0)}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="mt-6 px-8 py-3 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition-all duration-300 animate-bounce"
            disabled={cart.length === 0}
            onClick={() => alert("Proceeding to payment...")}
          >
            Proceed to Pay
          </button>
        </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.7s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-in {
            animation: slideIn 0.5s;
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}
      </style>
    </div>
    </div>

  );

}
