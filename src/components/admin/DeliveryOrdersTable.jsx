import StatusBadge from './StatusBadge';
import { PencilIcon } from '@heroicons/react/24/outline';
import { determineVehicle } from '../../utils/vehicleAllocation';

// Updated mock data with weight and quantity
const orders = [
  {
    id: 'ORD001',
    status: 'Delivered',
    route: 'Route A',
    date: '2024-02-05',
    weight: 150,
    quantity: 20,
    fromAddress: 'Salem',
    toAddress: 'Trichy',
    phoneNumber: '1234567890',
    paymentMethod: 'Cash on Delivery'
  },
  {
    id: 'ORD002',
    status: 'In Transit',
    route: 'Route B',
    date: '2024-02-05',
    weight: 450,
    quantity: 45,
    fromAddress: 'Nambiyur',
    toAddress: 'Erode',
    phoneNumber: '9876543210',
    paymentMethod: 'Online Payment'
  },
  {
    id: 'ORD003',
    status: 'Pending',
    route: 'Route C',
    date: '2024-02-06',
    weight: 15,
    quantity: 3,
    fromAddress: 'Trichy',
    toAddress: 'Thanjavur',
    phoneNumber: '5555555555',
    paymentMethod: 'Cash on Delivery'
  },
];

function DeliveryOrdersTable({ onEditOrder }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Delivery Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Route
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Weight/Qty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delivery Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => {
              const vehicle = determineVehicle(order.weight, order.quantity);
              return (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.route}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {vehicle.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.weight}kg / {order.quantity} units
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => onEditOrder(order)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliveryOrdersTable;