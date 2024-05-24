import {createBrowserRouter} from "react-router-dom";
import { About, Home } from "../pages";
import { ABOUT, DEFAULT ,LOGIN, SIGNUP,FORGET,RESET  } from "./keys";
import { Login } from "../pages/Account/Login";
import { Signup } from "../pages/Account/Signup";
import { Forget } from "../pages/Account/Forget";
import { Reset } from "../pages/Account/Reset";




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
  {
    path:FORGET,
    element:<Forget/>
},
{
  path:RESET,
  element:<Reset/>
},


  ]);

  export default router;