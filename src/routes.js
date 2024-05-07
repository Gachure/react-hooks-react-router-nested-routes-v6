import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Nested route
      },
      {
        path: "/about",
        element: <About />, // Nested route
      },
      {
        path: "/login",
        element: <Login />, // Nested route
      },
      {
        path: "/profile/:id",
        element: <UserProfile />, // Nested route
      },
    ],
  },
];

export default routes;
