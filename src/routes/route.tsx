import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/page";
import ErrorPage from "../error";
import BankProduct from "../pages/product/bank/page";
import BankProductDetail from "../pages/product/bank/detail/page";
import BankProductEdit from "../pages/product/bank/detail/edit/page";
import RootLayout from "../pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        index: true,
      },
      {
        path: "/product/bank_product",
        element: <BankProduct />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/bank_product/:id",
        element: <BankProductDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/bank_product/:id/edit",
        element: <BankProductEdit />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
