import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';

const ROUTES = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];
const PAYMENT_METHODS = ['Cash on Delivery', 'Online Payment'];

function EditOrderModal({ isOpen, onClose, order, onSave }) {
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    phoneNumber: '',
    quantity: '',
    weight: '',
    paymentMethod: 'Cash on Delivery',
    route: 'Route A'
  });

  useEffect(() => {
    if (order) {
      setFormData({
        ...order,
        fromAddress: order.fromAddress || '',
        toAddress: order.toAddress || '',
        phoneNumber: order.phoneNumber || '',
        quantity: order.quantity || '',
        weight: order.weight || '',
        paymentMethod: order.paymentMethod || 'Cash on Delivery',
        route: order.route || 'Route A'
      });
    }
  }, [order]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...order, ...formData });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-xl w-full bg-white rounded-lg shadow-xl p-6">
          <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
            Edit Order Details
          </Dialog.Title>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Address
              </label>
              <textarea
                name="fromAddress"
                value={formData.fromAddress}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Address
              </label>
              <textarea
                name="toAddress"
                value={formData.toAddress}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  min="0.1"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Route
              </label>
              <select
                name="route"
                value={formData.route}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {ROUTES.map((route) => (
                  <option key={route} value={route}>{route}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {PAYMENT_METHODS.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

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
                Save Changes
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default EditOrderModal;