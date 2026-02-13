
import { BrowserRouter,Route,Routes,useRoutes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import routes from "./routes/routes";
import "./App.css";
function AppRoutes() {
  return useRoutes(routes);
}
function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App
