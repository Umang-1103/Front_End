import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context
import { CartProvider } from './context/CartContext';

// Customer Components & Pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FoodDetails from './pages/FoodDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// Admin Components & Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ManageFoods from './pages/admin/ManageFoods';
import AddFood from './pages/admin/AddFood';
import UpdateFood from './pages/admin/UpdateFood';
import Orders from './pages/admin/Orders';
import Customers from './pages/admin/Customers';
import Analytics from './pages/admin/Analytics';
import DeleteFood from './pages/admin/DeleteFood';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Admin Login Route (outside layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Nested Routes wrapped with AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="foods" element={<ManageFoods />} />
            <Route path="foods/add" element={<AddFood />} />
            <Route path="foods/edit/:id" element={<UpdateFood />} />
            <Route path="foods/delete/:id" element={<DeleteFood />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* Customer Facing Routes */}
          <Route
            path="/*"
            element={
              <div className="d-flex flex-column min-vh-100 bg-dark text-white">
                <Navbar />
                <main className="flex-grow-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/menu/:id" element={<FoodDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
        
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </CartProvider>
  );
}

export default App;
