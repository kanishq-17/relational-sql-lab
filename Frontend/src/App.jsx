import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/Routing";

const App = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
