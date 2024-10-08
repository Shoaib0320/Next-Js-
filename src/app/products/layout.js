export default function ProductsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-400">Products</h1>
          <nav className="space-x-6">
            <a
              href="/"
              className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Products
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 My Next.js Store</p>
        </div>
      </footer>
    </div>
  );
}
