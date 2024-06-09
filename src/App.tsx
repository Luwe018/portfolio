import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import * as Dashboard from "@/pages/dashboard/";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "*",
          element: <Navigate to="welcome" replace />,
        },
        {
          path: "welcome",
          element: <Dashboard.Welcome />,
        },
        {
          path: "details",
          element: <Dashboard.Details />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
