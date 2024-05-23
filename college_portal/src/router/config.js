import {createBrowserRouter} from "react-router-dom";
import { About, Home } from "../pages";
import { ABOUT, DEFAULT } from "./keys";

  const router = createBrowserRouter([
    {
        path:DEFAULT,
        element:<Home/>
    },
    {
        path:ABOUT,
        element:<About/>
    }
  ]);

  export default router;