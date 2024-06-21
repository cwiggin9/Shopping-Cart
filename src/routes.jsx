import App from "./App";
import ErrorPage from "./ErrorPage"
import ProductPage from "./ProductPage";

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
];

export default routes;
