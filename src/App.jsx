import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product/:id",
        element: <Product />,
    },
    {
        path: "/product/create",
        element: <AddProduct />,
    },
]);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
