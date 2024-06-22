import styles from "../styles/HomePage.module.css";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Filter from "../components/Filter";
import products from "../data/products";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProducts = products.filter(
    (product) => filter === "All" || product.category === filter,
  );

  return (
    <div>
      <Nav />
      <div className={styles.mainContent}>
        <Filter onFilterChange={handleFilterChange} />
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
