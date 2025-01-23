import { useState } from 'react';
import StatusBadge from '../admin/StatusBadge';
import { determineHub } from '../../utils/hubAllocation';
import { mockDeliveries } from './mockData';

function DriverDeliveryList({ onUpdateDelivery }) {
  const [activeDeliveries, setActiveDeliveries] = useState(mockDeliveries);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Today's Deliveries</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Hub
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Delivery Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activeDeliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={delivery.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.customerName}
                    <div className="text-sm text-gray-500">{delivery.phoneNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {determineHub(delivery.pickupAddress)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {delivery.deliveryAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => onUpdateDelivery(delivery)}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DriverDeliveryList;