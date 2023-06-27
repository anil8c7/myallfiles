import Home from "./pages/home/Home";
import Ship from "./pages/ship/Ship";
import Users from "./pages/users/Users";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
const router = createHashRouter([
  {
    path: '/',
    basename: "/ReactProject",
    element: <Home />,

  },
  {
    path: "/users",
    basename: "/ReactProject",
    element: <Users />,
  
  },
   {
     path: "/ship",
     basename: "/ReactProject",
     element: <Ship />,
   
   },
  // {
  //   path: "/users/:userid",
  //   element: <Single />
  // },
  // {
  //   path: "/users/new",
  //   element: <New />
  // },
  // {
  //   path: "/products",
  //   element: <List />,
  // },
  // {
  //   path: "/products/:productid",
  //   element: <Single />
  // },
  // {
  //   path: "/products/new",
  //   element: <New />
  // },
  // {
  //   path: "/login",
  //   element: <Login />
  // }
]);

function App() {
  return (
    <>
    
    <RouterProvider router={router} />
  </>
  );
}

export default App;
