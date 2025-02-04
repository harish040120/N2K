import { useState, useEffect } from 'react';
import OrderAllocationDetails from './OrderAllocationDetails';

const ROUTES = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];
const PAYMENT_OPTIONS = ['Paid', 'To Pay'];

export default function PlaceOrderForm({ onClose }) {
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    phoneNumber: '',
    quantity: '',
    weight: '',
    paymentMethod: 'Paid',
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
      [e.target.name]: e.target.value,
    });
  };

  // Static form submission: simulate saving by logging the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Static submission:', formData);
    // Optionally clear the form or close the modal
    onClose();
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">Place Order (Static)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fromAddress"
          placeholder="From Address"
          value={formData.fromAddress}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="text"
          name="toAddress"
          placeholder="To Address"
          value={formData.toAddress}
          onChange={handleChange}
          className="w-full border p-2"
        />
         {/* New text box for vehicle selection */}
      <input
        type="text"
        name="vehicle"
        placeholder="Vehicle"
        value={formData.vehicle}
        onChange={handleChange}
        className="w-full border p-2"
      />
      {/* New text box for maximum capacity of the vehicle */}
      <input
        type="number"
        name="maxCapacity"
        placeholder="Max Capacity (kg)"
        value={formData.maxCapacity}
        onChange={handleChange}
        className="w-full border p-2"
      />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full border p-2"
        >
          {PAYMENT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="route"
          value={formData.route}
          onChange={handleChange}
          className="w-full border p-2"
        >
          {ROUTES.map((route) => (
            <option key={route} value={route}>
              {route}
            </option>
          ))}
        </select>
        {showAllocation && <OrderAllocationDetails formData={formData} />}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}