import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cursos from "../pages/Cursos";
import HomePage from "../pages/HomePage";
import Sobre from "../pages/Sobre";
import Thanks from "../pages/Thanks";
import Noticias from "../pages/Noticias";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/cursos-em-alta",
        element: <Cursos />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
      {
        path: "/noticias",
        element: <Noticias />,
      },
    ],
  },
]);
