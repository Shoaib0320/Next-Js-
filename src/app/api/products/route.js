let products = [
    {
      title: 'HP ProBook Laptop',
      image: 'https://cdn.cs.1worldsync.com/8d/27/8d277263-70b6-4f40-8b66-2a1fbb971b7b.jpg',
      desc: 'Vip Laptop',
      Price: '70000',
    },
    {
      title: 'HP ProBook Laptop',
      desc: 'Vip Laptop',
      image: 'https://cdn.cs.1worldsync.com/8d/27/8d277263-70b6-4f40-8b66-2a1fbb971b7b.jpg',
      Price: '80000',
    },
    {
      title: 'HP ProBook Laptop',
      desc: 'Vip Laptop',
      image: 'https://cdn.cs.1worldsync.com/8d/27/8d277263-70b6-4f40-8b66-2a1fbb971b7b.jpg',
      Price: '60000',
    },
    {
        title: 'HP EliteBook Laptop',
        desc: 'Vip Laptop',
        image:'https://static3.webx.pk/files/44878/Images/zx-44878-1731282-160323101517966.jpg',
        Price: '90000',
    },
  ];
  
  // Handle GET and POST requests
  export async function GET() {
    return new Response(JSON.stringify({ data: products }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function POST(request) {
    const newProduct = await request.json(); // Get the data from the POST request body
  
    // Add the new product to the products array
    products.push(newProduct);
  
    return new Response(JSON.stringify({ message: 'Product added successfully', product: newProduct }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  