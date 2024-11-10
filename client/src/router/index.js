import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Logout from "../components/Login/Logout";
import QuestionPage from "../components/QuestionPage/QuestionPage";
import AuthRedirect from "./AuthRedirect";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../components/HomePage/HomePage";
import LoginWrapper from "../components/Login/LoginWrapper";
import Login from "../components/Login/components/Login";
import Signup from "../components/Login/components/Signup";
import HistoryPage from "../components/HistoryPage/HistoryPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/questionpage",
            element: <QuestionPage />,
          },
          {
            path: "/history",
            element: <HistoryPage />
          }
        ],
      },
    ],
  },
  {
    element: <AuthRedirect />,
    children: [
      {
        path: "/login",
        element: (
          <LoginWrapper>
            <Login />
          </LoginWrapper>
        ),
      },
      {
        path: "/signup",
        element: (
          <LoginWrapper>
            <Signup />
          </LoginWrapper>
        ),
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);
