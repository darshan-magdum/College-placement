import {createBrowserRouter} from "react-router-dom";
import { About, Home } from "../pages";
import { ABOUT, DEFAULT ,LOGIN, SIGNUP  } from "./keys";
import { Login } from "../pages/Account/Login";
import { Signup } from "../pages/Account/Signup";




  const router = createBrowserRouter([
    {
        path:DEFAULT,
        element:<Home/>
    },
    {
        path:ABOUT,
        element:<About/>
    },
    {
      path:LOGIN,
      element:<Login/>
  },
    {
      path:SIGNUP,
      element:<Signup/>
  },

  ]);

  export default router;