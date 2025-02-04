import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import axios from 'axios';
import Footer from '../components/Footer';
import Map from '../components/admin/Map';
import DeliveryOrdersTable from '../components/admin/DeliveryOrdersTable';
import DeliveryStatusChart from '../components/charts/DeliveryStatusChart';
import RoutePerformanceChart from '../components/charts/RoutePerformanceChart';
import TabButton from '../components/admin/TabButton';
import OrderModal from '../components/admin/OrderModal';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DeliveryPointsManager from '../components/admin/DeliveryPointsManager';
import AccountsSection from '../components/admin/AccountsSection';
import BookingStatus from '../components/admin/BookingStatus';
import EditOrderModal from '../components/admin/EditOrderModal';
import Vehicles from '../components/admin/vehicles/Vehicles';
import { motion } from 'framer-motion';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('order-monitoring');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axiosInstance.get('/admin/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Sliding Sidebar Menu with Framer Motion */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 w-64 bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl rounded-r-lg z-50"
      >
        <div className="p-4 border-b border-gray-600 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-3">
              <button 
                className="w-full text-left text-white hover:text-blue-300 transition-colors"
                onClick={() => {
                  setActiveTab('order-monitoring');
                  setIsMenuOpen(false);
                }}
              >
                Order Monitoring
              </button>
            </li>
            <li className="mb-3">
              <button 
                className="w-full text-left text-white hover:text-blue-300 transition-colors"
                onClick={() => {
                  setActiveTab('accounts');
                  setIsMenuOpen(false);
                }}
              >
                Accounts
              </button>
            </li>
            <li className="mb-3">
              <button 
                className="w-full text-left text-white hover:text-blue-300 transition-colors"
                onClick={() => {
                  setActiveTab('delivery-points');
                  setIsMenuOpen(false);
                }}
              >
                Delivery Points
              </button>
            </li>
            <li className="mb-3">
              <button 
                className="w-full text-left text-white hover:text-blue-300 transition-colors"
                onClick={() => {
                  setActiveTab('vehicles');
                  setIsMenuOpen(false);
                }}
              >
                Vehicles
              </button>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </motion.div>

      {/* Main Section Container */}
      <div className={`flex-1 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header moved inside main container (non-fixed) */}
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <button onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </header>

        {/* Main Content */}
        <main className="p-4">
          {activeTab === 'order-monitoring' && (
            <div>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700 mb-4"
              >
                Place Order
              </button>
              <DeliveryOrdersTable orders={orders} />
              <BookingStatus />
            </div>
          )}
          {activeTab === 'accounts' && <AccountsSection />}
          {activeTab === 'delivery-points' && <DeliveryPointsManager />}
          {activeTab === 'vehicles' && <Vehicles />}
          {/* Other tabs/components */}
        </main>

        <Footer />

        {/* Order Modal */}
        {isOrderModalOpen && (
          <OrderModal 
            isOpen={isOrderModalOpen} 
            onClose={() => setIsOrderModalOpen(false)} 
            onRefresh={fetchOrders} 
          />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;