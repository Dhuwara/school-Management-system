
import { BrowserRouter,Route,Routes,useRoutes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import routes from "./routes/routes";
import AuthProvider from "./context/AuthProvider";
import "./App.css";
function AppRoutes() {
  return useRoutes(routes);
}
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
