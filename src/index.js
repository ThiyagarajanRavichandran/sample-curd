import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NoPageFound from "./screens/NoPageFound";
import Users from "./screens/Users";
import Reports from "./screens/Reports";
import Status from "./screens/Status";
import Projects from "./screens/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoPageFound />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
