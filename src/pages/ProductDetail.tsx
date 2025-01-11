import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

// Using the same temporary data as Index page
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

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>
            <Button
              onClick={() => addToCart(product)}
              className="w-full md:w-auto bg-accent hover:bg-accent/90"
              size="lg"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}