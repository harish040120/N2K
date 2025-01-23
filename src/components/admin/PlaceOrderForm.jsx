import { useState, useEffect } from 'react';
import OrderAllocationDetails from './OrderAllocationDetails';

const ROUTES = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];
const PAYMENT_METHODS = ['Cash on Delivery', 'Online Payment'];

export default function PlaceOrderForm({ onClose }) {
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    phoneNumber: '',
    quantity: '',
    weight: '',
    paymentMethod: 'Cash on Delivery',
    route: 'Route A'
  });

  const [showAllocation, setShowAllocation] = useState(false);

  useEffect(() => {
    if (formData.weight && formData.quantity && formData.toAddress) {
      setShowAllocation(true);
    } else {
      setShowAllocation(false);
    }
  }, [formData.weight, formData.quantity, formData.toAddress]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700">
          From Address
        </label>
        <textarea
          id="fromAddress"
          name="fromAddress"
          rows="2"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.fromAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700">
          To Address
        </label>
        <textarea
          id="toAddress"
          name="toAddress"
          rows="2"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.toAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min="0.1"
            step="0.1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="route" className="block text-sm font-medium text-gray-700">
          Route
        </label>
        <select
          id="route"
          name="route"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.route}
          onChange={handleChange}
        >
          {ROUTES.map((route) => (
            <option key={route} value={route}>{route}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
          Payment Method
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          {PAYMENT_METHODS.map((method) => (
            <option key={method} value={method}>{method}</option>
          ))}
        </select>
      </div>

      {showAllocation && (
        <OrderAllocationDetails
          weight={Number(formData.weight)}
          quantity={Number(formData.quantity)}
          location={formData.toAddress}
        />
      )}

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Place Order
        </button>
      </div>
    </form>
  );
}