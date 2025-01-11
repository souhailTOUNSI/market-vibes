import { Navbar } from "@/components/Navbar";
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Cart() {
  const { items, total, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success("This is a demo - checkout will be implemented in the next version!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        {items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-accent hover:bg-accent/90 mb-2"
              >
                Checkout
              </Button>
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}