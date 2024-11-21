import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/page";
import ErrorPage from "../error";
import RootLayout from "../pages/layout";
import ApplicationLayout from "../pages/application/layout";
import ApplicationEdit from "../pages/application/edit/page";
import ApplicationEditAlamat from "../pages/application/edit/alamat/page";
import ApplicationEditPilihanProdukBank from "../pages/application/edit/produk/page";
import ApplicationEditAddDocument from "../pages/application/edit/dokumen/page";
import PlaceholderPage from "../pages/placeholder/page";

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
        path: "/contact",
        element: <PlaceholderPage page_name="Contact" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/loan/edit_application",
        element: <ApplicationLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <ApplicationEdit />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/loan/edit_application/alamat",
            element: <ApplicationEditAlamat />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/loan/edit_application/upload_dokumen",
            element: <ApplicationEditAddDocument />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/loan/edit_application/pilihan_produk_dan_bank",
            element: <ApplicationEditPilihanProdukBank />,
            errorElement: <ErrorPage />,
          },
        ]
      },
      {
        path: "/product/bank_product/bank",
        element: <PlaceholderPage page_name="Product > Bank Product" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/bank_product/bank/:id",
        element: <PlaceholderPage page_name="Product > Bank Product Detail" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/bank_product/bank/:id/edit",
        element: <PlaceholderPage page_name="Product > Bank Product Edit" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/product",
        element: <PlaceholderPage page_name="Product > Product" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/category_product",
        element: <PlaceholderPage page_name="Product > Category Product" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/bank",
        element: <PlaceholderPage page_name="Bank" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/credit_scoring",
        element: <PlaceholderPage page_name="Credit Scoring" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/faq",
        element: <PlaceholderPage page_name="FAQ's" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pipeline",
        element: <PlaceholderPage page_name="Pipeline" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pipeline_developer",
        element: <PlaceholderPage page_name="Pipeline Developer" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/marketing_tools",
        element: <PlaceholderPage page_name="Marketing Tools" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/whatsapp",
        element: <PlaceholderPage page_name="Whatsapp" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/whatsapp/child",
        element: <PlaceholderPage page_name="Whatsapp Child" />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
