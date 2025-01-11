import { ProductGrid } from "@/components/ProductGrid";
import { Navbar } from "@/components/Navbar";

// Temporary product data (will be replaced with API calls later)
const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    description: "Comfortable and stylish sneakers for everyday wear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 129.99,
    description: "Durable leather backpack with multiple compartments",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Featured Products</h1>
        <ProductGrid products={products} />
      </main>
    </div>
  );
}