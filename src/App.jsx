
import { BrowserRouter,Route,Routes,useRoutes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import routes from "./routes/routes";
import AuthProvider from "./context/AuthProvider";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./App.css";
function AppRoutes() {
  return useRoutes(routes);
}
function App() {

  return (
    <AuthProvider>
      <MantineProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </MantineProvider>
    </AuthProvider>
  );
}

export default App
