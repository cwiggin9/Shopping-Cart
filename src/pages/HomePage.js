import styles from "../styles/HomePage.module.css";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Filter from "../components/Filter";
import products from "../data/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function App() {
  const { category } = useParams();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (category) {
      setFilter(category.charAt(0).toUpperCase() + category.slice(1));
    } else {
      setFilter("All");
    }
  }, [category]);

  const filteredProducts = products.filter(
    (product) =>
      filter === "All" ||
      product.category.toLowerCase() === filter.toLowerCase(),
  );

  return (
    <div>
      <Nav />
      <div className={styles.mainContent}>
        <Filter />
        <div className={styles.cardGrid}>
          {filteredProducts.map((product) =>
            product.variations.map((variation) => (
              <Card
                key={variation.id}
                productName={product.name}
                variationId={variation.id}
                variationName={variation.color}
                imagePath={variation.imagePath}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
