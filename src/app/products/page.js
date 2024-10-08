import Image from "next/image";

export default async function ProductsPage() {
  // Fetching data from the API
  const res = await fetch('http://localhost:3000/api/products');
  const { data } = await res.json();

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-10">VIP Product List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product, index) => (
          <li
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-out"
          >
            <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <p className="mb-4 text-gray-400">{product.desc}</p>
            <p className="text-lg font-bold text-yellow-400">Price: ₹{product.Price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
