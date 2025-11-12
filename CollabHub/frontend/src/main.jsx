import { useState } from 'react'
import './App.css'
import './index.css'
import HomePage from "./components/Home/HomePage.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import FindTeam from './components/TeamPage/FindTeam.jsx'
import Layout from './Layout.jsx'
import Event from './components/EventPage/EventPage.jsx'
import Profile from './components/ProfilePage/ProfilePage.jsx'
import Login from './components/LoginPage/LoginPage.jsx'
import FindMember from './components/MemberPage/MemberPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/findTeam",
        element: <FindTeam />,
      },
      {
        path: "/event",
        element: <Event/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/findmember",
        element: <FindMember/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
