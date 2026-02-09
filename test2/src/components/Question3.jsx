import React, { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Mobile", price: 15000 },
  { id: 2, name: "Fridge", price: 10000 },
  { id: 3, name: "AC", price: 30000 },
    { id: 4, name: "TV", price: 25000 },
];

const Question3 = () => {
  const [cart, setCart] = useState([]);

  const toggleCart = (id) => {
    cart.includes(id) ? setCart(cart.filter((item) => item !== id)) : setCart([...cart, id]);
  };

  //use memo here
  const total = useMemo(() => {
    return products.reduce((sum, product) => {
      return cart.includes(product.id) ? sum + product.price : sum;
    }, 0);
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-white">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>

      <table className="w-full max-w-2xl border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 border">Product Name</th>
            <th className="p-4 border">Price</th>
            <th className="p-4 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            const inCart = cart.includes(product.id);

            return (
              <tr key={product.id}>
                <td className="p-4 border">{product.name}</td>
                <td className="p-4 border">{product.price}</td>
                <td className="p-4 border">
                  <button
                    onClick={() => toggleCart(product.id)}
                    className={`px-4 py-2 rounded text-white font-semibold ${
                      inCart ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {inCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="w-full max-w-2xl mt-8 bg-gray-200 p-5 text-center rounded">
        <h2 className="text-2xl font-bold">Total Price: {total}</h2>
      </div>
    </div>
  );
};

export default Question3;