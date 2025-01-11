import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  const featuredProduct = {
    id: 1,
    name: "Classic White Sneakers",
    description: "Comfortable and stylish sneakers for everyday wear",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Premium Quality</span>
                <span className="block text-accent">Latest Collection</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {featuredProduct.description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link to={`/product/${featuredProduct.id}`}>
                  <Button className="bg-accent hover:bg-accent/90">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={featuredProduct.image}
          alt={featuredProduct.name}
        />
      </div>
    </div>
  );
}