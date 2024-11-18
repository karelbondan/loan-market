import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/page";
import ErrorPage from "../error";
import BankProduct from "../pages/product/bank/page";
import BankProductDetail from "../pages/product/bank/detail/page";
import BankProductEdit from "../pages/product/bank/detail/edit/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        // TODO: add index to dashboard page
        // TODO: set parent 'layout' to be this one, then add
        // all the other pages to be the children
    },
    {
        path: "/product/bank",
        element: <BankProduct />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/product/bank/:id",
        element: <BankProductDetail />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/product/bank/:id/edit",
        element: <BankProductEdit />,
        errorElement: <ErrorPage />,
    }
]);

export default router;