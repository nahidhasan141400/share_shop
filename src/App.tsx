import { Provider } from "react-redux";
// import store from "./store";
import store from "@store";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

function App() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const products = [
    {
      image:
        "https://mockuptree.com/wp-content/uploads/edd/2023/09/free-t-shirt-mockup-template.jpg",
      title: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2500,
      originalPrice: 2800,
      discount: 200,
    },
    {
      image:
        "https://mockuptree.com/wp-content/uploads/edd/2023/09/free-t-shirt-mockup-template.jpg",
      title: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2500,
      originalPrice: 2800,
      discount: 200,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2500,
      originalPrice: 2800,
      discount: 200,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2500,
      originalPrice: 2800,
      discount: 200,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fabrilife Mens Premium Designer Edition T Shirt",
      price: 2500,
      originalPrice: 2800,
      discount: 200,
    },
    // Add more product objects here
  ];
  return (
    <>
      <Provider store={store}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                onAddToCart={() => alert("Added to cart")}
                onQuickView={() => alert("Quick view clicked")}
                isHovered={hoveredCardIndex === index}
              />
            </div>
          ))}
        </div>
      </Provider>
    </>
  );
}

export default App;
