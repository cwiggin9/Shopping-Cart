import './App.css';
import Nav from './Nav';
import Card from './Card';

const products = [
  {
    id: "product-1",
    name: "T-Shirt",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"],
    variations: [
      {
        id: "pkvsjmg-mx1-ycon",
        name: "Red"
      },
      {
        id: "ns8fzjcn-torh5ge",
        name: "Blue"
      },
      {
        id: "kw_tmgvvbkiymzz8",
        name: "Green"
      }
    ]
  },
  {
    id: "product-2",
    name: "Jacket",
    price: 99.99,
    sizes: ["M", "L", "XL"],
    variations: [
      {
        id: "lcvhsn0lxzdyw8na",
        name: "Black"
      },
      {
        id: "t7hfksl9-qwpl3i",
        name: "Brown"
      },
      {
        id: "mnbvqpwz-45gfk3x",
        name: "Navy"
      }
    ]
  },
  {
    id: "product-3",
    name: "Cap",
    price: 15.99,
    sizes: ["One Size"],
    variations: [
      {
        id: "xcvnjhqp-92jfkei",
        name: "Black"
      },
      {
        id: "plqwoe8z-5skd9fj",
        name: "White"
      },
      {
        id: "zvnxwoqp-38jshdk",
        name: "Blue"
      }
    ]
  }
];

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
