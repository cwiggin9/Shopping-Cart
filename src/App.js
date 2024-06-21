import './styles/App.css';
import Nav from './components/Nav';
import Card from './components/Card';
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
