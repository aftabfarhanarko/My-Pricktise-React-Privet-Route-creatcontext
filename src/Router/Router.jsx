import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import HomePage from "../Components/HomePage";
import Loging from "../Components/Loging";
import Register from "../Components/Register";
import DasBord from "../Components/DasBord";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
    },
    {
        index:true,
        Component: HomePage,
    },
    {
        path:"/signin",
        Component: Loging,
    },
    {
        path:"/register",
        Component: Register,
    },
    {
        path:"/dasbord",
        Component: DasBord,
    },
    {
        path:"/signin",
        Component: Loging,
    },

])