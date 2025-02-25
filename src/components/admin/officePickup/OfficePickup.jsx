import React from 'react';

// Example data formerly in BookingStatus for officePickup
const data = {
  paid: [
    { id: 'OP001', customer: 'Alex Brown', amount: 800, date: '2024-02-05', location: 'Salem Hub' },
    { id: 'OP002', customer: 'Emma Davis', amount: 1200, date: '2024-02-05', location: 'Trichy Hub' },
  ],
  toPay: [
    { id: 'OP003', customer: 'Tom Wilson', amount: 950, date: '2024-02-05', location: 'Nambiyur Hub' },
    { id: 'OP004', customer: 'Lisa Anderson', amount: 1100, date: '2024-02-05', location: 'Salem Hub' },
  ],
};

function calculateTotal(bookingsArray) {
  return bookingsArray.reduce((total, booking) => total + booking.amount, 0);
}

export default function OfficePickup() {
  const totalPaid = calculateTotal(data.paid);
  const totalToPay = calculateTotal(data.toPay);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Office Pickup</h2>
      <p className="text-sm mb-4">
        Orders are delivered to the nearest hub or office. The customer must pick them up
        from that hub. This often reduces or removes additional delivery fees.
      </p>

      <h3 className="font-semibold">Paid Orders</h3>
      <ul className="mb-4 list-disc list-inside">
        {data.paid.map((item) => (
          <li key={item.id}>{item.id} – {item.customer} (₹{item.amount})</li>
        ))}
      </ul>
      <p className="mb-6 text-sm"><strong>Total Paid:</strong> ₹{totalPaid}</p>

      <h3 className="font-semibold">To-Pay Orders</h3>
      <ul className="mb-4 list-disc list-inside">
        {data.toPay.map((item) => (
          <li key={item.id}>{item.id} – {item.customer} (₹{item.amount})</li>
        ))}
      </ul>
      <p className="text-sm"><strong>Total To-Pay:</strong> ₹{totalToPay}</p>
    </div>
  );
}