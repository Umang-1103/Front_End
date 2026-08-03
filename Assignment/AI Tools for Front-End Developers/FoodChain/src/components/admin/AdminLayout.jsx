import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Guard Check: Verify if admin user exists in local storage and has role 'admin'
  const adminSession = localStorage.getItem('foodchain_admin');
  let isAuthenticated = false;

  if (adminSession) {
    try {
      const parsed = JSON.parse(adminSession);
      if (parsed && parsed.role === 'admin') {
        isAuthenticated = true;
      }
    } catch (e) {
      isAuthenticated = false;
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Helper to resolve title based on pathname
  const getPageTitle = (path) => {
    if (path.includes('dashboard')) return 'Admin Dashboard';
    if (path.includes('foods/add')) return 'Add New Dish';
    if (path.includes('foods/edit')) return 'Update Food Item';
    if (path.includes('foods')) return 'Manage Food Menu';
    if (path.includes('orders')) return 'Customer Orders';
    if (path.includes('customers')) return 'Registered Customers';
    if (path.includes('analytics')) return 'Sales & Performance Analytics';
    return 'Admin Panel';
  };

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!isAuthenticated) {
    // If not authenticated, redirect to Admin Login
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return (
    <div className="bg-light min-vh-100 text-dark overflow-x-hidden">
      {/* Sidebar navigation */}
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className="transition-all min-vh-100 d-flex flex-column"
        style={{
          marginLeft: '0px',
          paddingLeft: '0px',
        }}
      >
        {/* Responsive padding adjustments for desktop sidebar spacing */}
        <div className="flex-grow-1" style={{ paddingLeft: '0px' }}>
          <div className="admin-wrapper-lg">
            {/* Admin Header */}
            <AdminNavbar toggleSidebar={toggleSidebar} title={getPageTitle(location.pathname)} />

            {/* Dynamic Outlet Section */}
            <main className="p-4 flex-grow-1">
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop adjustment: Push main content to start after sidebar width (260px) */
        @media (min-width: 992px) {
          .admin-wrapper-lg {
            padding-left: 260px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
