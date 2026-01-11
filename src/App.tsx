import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './app/pages/home';
import About from './app/pages/about';
import Services from './app/pages/services';
import Contact from './app/pages/contact';
import NotFound from './app/pages/not-found';
import Header from './app/components/header';
import Footer from './app/components/footer';
import './App.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  duration: 0.3,
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/services', element: <Services /> },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <NotFound /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {routes}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="page-container">
        <Header />
        <div className="content-wrapper">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
