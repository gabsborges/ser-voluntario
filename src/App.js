import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/voluntarios',
    element: <Home/>
  },
  {
    path: '/entidades',
    element: <Home/>
  },
])

export { router }