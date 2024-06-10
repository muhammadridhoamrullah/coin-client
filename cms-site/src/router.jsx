import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Coins from "./pages/Coins";
import MyCoins from "./pages/MyCoins";

function checkLogin() {
  if (!localStorage.access_token) {
    return redirect("/login");
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Layout />,
    loader: checkLogin,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: "my-coins",
        element: <MyCoins />,
      },
    //   {
    //     path: "Add",
    //     element: <Add />,
    //   },
    ],
  },
]);

export default router;
