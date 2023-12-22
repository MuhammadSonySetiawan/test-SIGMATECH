import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { store } from "./store";
import { Provider } from "react-redux";

import Login from "./pages/Login";
import Content from "./pages/Content";
// import Satu from "./pages/satu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/content",
    element: <Content />,
  },
  // {
  //   path: "/satu",
  //   element: <Satu />,
  // },
]);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </Provider>
  );
}

export default App;
