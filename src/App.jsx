
import { BrowserRouter,Route,Routes,useRoutes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import routes from "./routes/routes";
import AuthProvider from "./context/AuthProvider";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import "./App.css";
function AppRoutes() {
  return useRoutes(routes);
}
function App() {

  return (
    <AuthProvider>
      <MantineProvider>
        <ModalsProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
    </AuthProvider>
  );
}

export default App
