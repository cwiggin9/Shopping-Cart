import './App.css';
import Nav from './Nav';
import Card from './Card';

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
  },
  {
    id: 2,
    name: "Jacket",
    price: 99.99,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"]
  },
  {
    id: 3,
    name: "Cap",
    price: 15.99,
    sizes: ["One Size"],
    colors: ["Black", "White", "Blue"]
  }
];

function App() {
  return (
    <div className="App">
      <Nav/>
      {products.map((product) => <Card key={product.id} name={product.name} />)}
    </div>
  );
}

export default App;
