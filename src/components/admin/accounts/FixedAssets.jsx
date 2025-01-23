import { useState } from 'react';

const initialAssets = [
  {
    id: 'FA001',
    category: 'Utilities',
    item: 'Electricity Bill',
    amount: 15000,
    dueDate: '2024-02-15',
    status: 'Pending'
  },
  {
    id: 'FA002',
    category: 'Internet',
    item: 'WiFi Monthly Recharge',
    amount: 2000,
    dueDate: '2024-02-10',
    status: 'Paid'
  },
  {
    id: 'FA003',
    category: 'Rent',
    item: 'Warehouse Rent',
    amount: 50000,
    dueDate: '2024-02-01',
    status: 'Paid'
  }
];

export default function FixedAssets() {
  const [assets, setAssets] = useState(initialAssets);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Fixed Assets & Monthly Bills</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {asset.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {asset.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {asset.item}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{asset.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {asset.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    asset.status === 'Paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {asset.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}