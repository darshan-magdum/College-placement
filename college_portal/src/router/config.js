import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "../pages";
import {
  ABOUT,
  DEFAULT,
  LOGIN,
  SIGNUP,
  FORGET,
  RESET,
  UPROFILE,
  APROFILE,
} from "./keys";
import { Login } from "../pages/Account/Login";
import { Signup } from "../pages/Account/Signup";
import { Forget } from "../pages/Account/Forget";
import { Reset } from "../pages/Account/Reset";
import ProfileUser from "../pages/Profile/ProfileUser";
import ProfileAdmin from "../pages/Profile/ProfileAdmin";

const router = createBrowserRouter([
  {
    path: DEFAULT,
    element: <Home />,
  },
  {
    path: ABOUT,
    element: <About />,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: SIGNUP,
    element: <Signup />,
  },
  {
    path: FORGET,
    element: <Forget />,
  },
  {
    path: RESET,
    element: <Reset />,
  },
  {
    path: UPROFILE,
    element: <ProfileUser />,
  },
  {
    path: APROFILE,
    element: <ProfileAdmin />,
  },
]);

export default router;
