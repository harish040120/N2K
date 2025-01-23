import { useState } from 'react';
import DeliveryStatusChart from '../components/charts/DeliveryStatusChart';
import RoutePerformanceChart from '../components/charts/RoutePerformanceChart';
import DeliveryOrdersTable from '../components/admin/DeliveryOrdersTable';
import TabButton from '../components/admin/TabButton';
import OrderModal from '../components/admin/OrderModal';
import EditOrderModal from '../components/admin/EditOrderModal';
import DeliveryPointsManager from '../components/admin/DeliveryPointsManager';
import AccountsSection from '../components/admin/AccountsSection';
import BookingStatus from '../components/admin/BookingStatus';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const handleSaveOrder = (updatedOrder) => {
    console.log('Saving updated order:', updatedOrder);
    setIsEditModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Place Order
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <TabButton 
            isActive={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton 
            isActive={activeTab === 'routes'} 
            onClick={() => setActiveTab('routes')}
          >
            Route Performance
          </TabButton>
          <TabButton 
            isActive={activeTab === 'delivery-points'} 
            onClick={() => setActiveTab('delivery-points')}
          >
            Delivery Points
          </TabButton>
          <TabButton 
            isActive={activeTab === 'accounts'} 
            onClick={() => setActiveTab('accounts')}
          >
            Accounts
          </TabButton>
          <TabButton 
            isActive={activeTab === 'booking-status'} 
            onClick={() => setActiveTab('booking-status')}
          >
            Booking Status
          </TabButton>
        </div>

        {activeTab === 'overview' && <DeliveryStatusChart />}
        {activeTab === 'routes' && <RoutePerformanceChart />}
        {activeTab === 'delivery-points' && <DeliveryPointsManager />}
        {activeTab === 'accounts' && <AccountsSection />}
        {activeTab === 'booking-status' && <BookingStatus />}
      </div>

      <DeliveryOrdersTable onEditOrder={handleEditOrder} />

      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      {selectedOrder && (
        <EditOrderModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedOrder(null);
          }}
          order={selectedOrder}
          onSave={handleSaveOrder}
        />
      )}
    </div>
  );
}

export default AdminDashboard;