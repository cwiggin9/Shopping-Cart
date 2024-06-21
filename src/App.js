import './App.css';
import Nav from './Nav';
import Card from './Card';
import products from './data/products';

function App() {
  return (
    <div className="App">
      <Nav />
      {products.map((product) => (
        product.variations.map((variation) => (
          <Card
            key={variation.id}
            productName={product.name}
            variationId={variation.id}
            variationName={variation.name}
          />
        ))
      ))}
    </div>
  );
}

export default App;
