import StatusBadge from './StatusBadge';
import { PencilIcon } from '@heroicons/react/24/outline';
import { determineVehicle } from '../../utils/vehicleAllocation';

// Updated mock data, including one pending order
const orders = [
  {
    id: 'ORD001',
    status: 'Pending',
    route: 'Route A',
    date: '2024-02-05',
    weight: 150,
    quantity: 20,
    fromAddress: 'Salem',
    toAddress: 'Trichy',
    phoneNumber: '1234567890',
    paymentMethod: 'To Pay',
  },
  {
    id: 'ORD002',
    status: 'Pending',
    route: 'Route B',
    date: '2024-02-05',
    weight: 450,
    quantity: 45,
    fromAddress: 'Nambiyur',
    toAddress: 'Coimbatore',
    phoneNumber: '0987654321',
    paymentMethod: 'Paid',
  },
  {
    id: 'ORD003',
    status: 'Pending',
    route: 'Route C',
    date: '2024-02-06',
    weight: 300,
    quantity: 30,
    fromAddress: 'Erode',
    toAddress: 'Chennai',
    phoneNumber: '5551234567',
    paymentMethod: 'Paid',
  },
];

// This component shows only the pending orders
export default function PendingyOrdersTable() {
  const pendingOrders = orders.filter((order) => order.status && order.status.toLowerCase() === 'pending');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pending Orders</h2>
      <div className="overflow-x-auto bg-white shadow rounded p-4">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th scope="col" className="px-4 py-2">Order ID</th>
              <th scope="col" className="px-4 py-2">Status</th>
              <th scope="col" className="px-4 py-2">Route</th>
              <th scope="col" className="px-4 py-2">Weight (kg)</th>
              <th scope="col" className="px-4 py-2">Quantity</th>
              <th scope="col" className="px-4 py-2">From</th>
              <th scope="col" className="px-4 py-2">To</th>
              <th scope="col" className="px-4 py-2">Payment Method</th>
              <th scope="col" className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders.length === 0 ? (
              <tr>
                <td colSpan="9" className="px-4 py-2 text-center text-gray-500">
                  No pending orders
                </td>
              </tr>
            ) : (
              pendingOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-b-0">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-4 py-2">{order.route}</td>
                  <td className="px-4 py-2">{order.weight}</td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">{order.fromAddress}</td>
                  <td className="px-4 py-2">{order.toAddress}</td>
                  <td className="px-4 py-2">{order.paymentMethod}</td>
                  <td className="px-4 py-2 text-center">
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <PencilIcon className="h-5 w-5 inline" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}