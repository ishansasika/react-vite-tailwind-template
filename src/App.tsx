import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./app/pages/home";
import About from "./app/pages/about";
import Services from "./app/pages/services";
import Contact from "./app/pages/contact";
import Header from "./app/components/header";
import Footer from "./app/components/footer";
import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <div className="content-wrapper">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
