import { useMemo, useState } from "react";
import products from "../assets/products"; 
//assets/products.js contains array of products with id, name and price
import { ShoppingCart } from "lucide-react";

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
      <div className="flex items-center gap-2 justify-between mb-8">
  <h1 className="text-3xl font-bold flex items-center gap-3">
    Product List
  </h1>

  <div className="relative inline-block">
    <ShoppingCart size={26} className="text-gray-800" />
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
        {cart.length}
      </span>
    )}
  </div>
</div>
        

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