import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import SignleBook from "../pages/shared/SignleBook";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/shared/ErrorPage";
import Blog from "../pages/blog/Blog";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/dashboard/upload", element: <UploadBook /> },
      { path: "/dashboard/manage", element: <ManageBooks /> },
      { path: "/dashboard/edit-books/:id", element: <EditBooks />,
      loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
    },
    ],
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
]);

export default router;