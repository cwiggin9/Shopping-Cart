import App from "./App";
import ErrorPage from "./ErrorPage"
import ProductPage from "./ProductPage";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
