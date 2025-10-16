import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import HomePage from "../Components/HomePage";
import Loging from "../Components/Loging";
import Register from "../Components/Register";
import DasBord from "../Components/DasBord";
import PrivetRouter from "../Components/PrivetRouter";
import Points from "../Components/Points";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: HomePage,
      },
      {
        path: "/signin",
        Component: Loging,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/dasbord",
        element: (
          <PrivetRouter>
            <DasBord></DasBord>
          </PrivetRouter>
        ),
      },
      {
        path: "/point",
        element: (
          <PrivetRouter>
            <Points></Points>
          </PrivetRouter>
        ),
      },
    ],
  },
]);
