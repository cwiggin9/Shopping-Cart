import App from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/collections/:category",
    element: <App />,
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
