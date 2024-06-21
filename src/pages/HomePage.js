import styles from '../styles/HomePage.module.css';
import Nav from '../components/Nav';
import Card from '../components/Card';
import products from '../data/products';

function App() {
  return (
    <div>
      <Nav />
      <div className={styles.cardGrid}>
      {products.map((product) => (
        product.variations.map((variation) => (
          <Card
            key={variation.id}
            productCategory={product.category}
            variationId={variation.id}
            variationName={variation.color}
            imagePath={variation.imagePath}
          />
        ))
      ))}
      </div>
    </div>
  );
}

export default App;
