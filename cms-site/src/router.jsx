import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
    element: <p>Hai</p>,
    loader: checkLogin,
  },
]);

export default router;
