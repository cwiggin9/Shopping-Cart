import './App.css';
import Nav from './Nav';
import Card from './Card';

// function generateShortId() {
//   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';
//   const idLength = 12;
//   let id = '';
//   for (let i = 0; i < idLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     id += characters[randomIndex];
//   }
//   return id;
// }

const products = [
  {
    id: "product-1",
    name: "T-Shirt",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
  },
  {
    id: "product-2",
    name: "Jacket",
    price: 99.99,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"]
  },
  {
    id: "product-3",
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
      {products.map((product) => (
        <Card key={product.id} id={product.id} name={product.name} />
      ))}
    </div>
  );
}

export default App;
