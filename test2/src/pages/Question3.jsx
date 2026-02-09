import { useMemo, useState } from "react";
import products from "../assets/products"; 
//assets/products.js contains array of products with id, name and price

const Question3 = () => {
  const [cart, setCart] = useState([]);

  //Toggle specified product in cart
  //If product is already in cart, remove it. Otherwise, add it to cart.
  const toggleCart = (id) => {
    cart.includes(id) ? setCart(cart.filter((item) => item !== id)) : setCart([...cart, id]);
  };

  //useMemo to calculate total price of products in cart, only recalculates when cart changes
  const total = useMemo(() => {
    return products.reduce((sum, product) => {
      return cart.includes(product.id) ? sum + product.price : sum;
    }, 0);
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-white">
      <h1 className="text-3xl flex items-center gap-3 font-bold mb-8">Product List
        <span className="ml-2 text-sm text-gray-600">({cart.length} items in cart)</span>
      </h1>
        

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
            //Check if product is in cart to determine button text and style
            const inCart = cart.includes(product.id);

            return (
              <tr key={product.id}>
                <td className="p-4 border">{product.name} ({product.stock} in stock)</td>
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