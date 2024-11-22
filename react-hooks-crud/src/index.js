import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import AddTutorial from "./components/AddTutorial";

import App from "./App";
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TutorialsList/>,
  },
  {
    path: "/tutorials/:id",
    element: <Tutorial/>,
  },
  {
    path: "/add",
    element: <AddTutorial/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();