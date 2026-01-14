import { createBrowserRouter } from "react-router-dom";

import SqlHome from "@/pages/SQL/SqlHome";
import SqlTopic from "@/pages/SQL/SqlTopic";
import MainLayout from "@/components/layout/MainLayout";

const AppRouter = createBrowserRouter([
  { path: "/", element: <MainLayout /> },
  { path: "/sql", element: <SqlHome /> },
  { path: "/sql/:topicName", element: <SqlTopic /> },
]);

export default AppRouter;
