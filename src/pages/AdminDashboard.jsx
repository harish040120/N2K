import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import Footer from '../components/Footer';
import PendingOrdersTable from '../components/admin/PendingOrdersTable';
import { Bars3Icon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import DeliveryPointsManager from '../components/admin/DeliveryPointsManager';
import AccountsSection from '../components/admin/AccountsSection';
import EditOrderModal from '../components/admin/EditOrderModal';
import Vehicles from '../components/admin/vehicles/Vehicles';
import OrderModal from '../components/admin/OrderModal';
import { motion } from 'framer-motion';

// Import our new separate components
import DoorDelivery from '../components/admin/doorDelivery/DoorDelivery';
import OfficePickup from '../components/admin/officePickup/OfficePickup';

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

  const toggleBookingSubmenu = () => {
    // If the user wants to expand/collapse sub-menu without actually navigating, 
    // you can handle that logic here (e.g., set a local showBookingSubmenu state).
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Sliding Sidebar Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
            {/* Order Monitoring */}
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

            {/* Accounts */}
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

            {/* Delivery Points */}
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

            {/* Vehicles */}
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

            {/* Booking Status: no direct page; just expands sub-menu */}
            <li className="mb-3">
              <button
                className="w-full text-left text-white hover:text-blue-300 transition-colors"
                onClick={toggleBookingSubmenu} // no direct tab assignment
              >
                Booking Status
              </button>
              {/* Sub-menu for Door Delivery & Office Pickup */}
              {(activeTab === 'door-delivery' || activeTab === 'office-pickup') && (
                <ul className="mt-2 pl-4">
                  <li className="mb-2">
                    <button
                      className="w-full text-left text-white hover:text-blue-300 transition-colors"
                      onClick={() => {
                        setActiveTab('door-delivery');
                        setIsMenuOpen(false);
                      }}
                    >
                      Door Delivery
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      className="w-full text-left text-white hover:text-blue-300 transition-colors"
                      onClick={() => {
                        setActiveTab('office-pickup');
                        setIsMenuOpen(false);
                      }}
                    >
                      Office Pickup
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Main Section */}
      <div className={`flex-1 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <button onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Place Order
          </button>
        </header>

        {/* Main Content */}
        <main className="p-4">
          {activeTab === 'order-monitoring' && <PendingOrdersTable orders={orders} />}
          {activeTab === 'accounts' && <AccountsSection />}
          {activeTab === 'delivery-points' && <DeliveryPointsManager />}
          {activeTab === 'vehicles' && <Vehicles />}

          {/* Door Delivery */}
          {activeTab === 'door-delivery' && <DoorDelivery />}

          {/* Office Pickup */}
          {activeTab === 'office-pickup' && <OfficePickup />}
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