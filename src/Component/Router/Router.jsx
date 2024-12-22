import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import Register from "../Register/Register";
import SingIn from "../SingIn/SingIn";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
        path: "/register",
        element: <Register></Register>
        },
        {
          path: "/singIn",
          element: <SingIn></SingIn>
        },
      ],
    },
  ]);



  export default router;