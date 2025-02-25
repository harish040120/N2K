import React from 'react';

// Example data formerly in BookingStatus for doorDelivery
const data = {
  paid: [
    { id: 'DD001', customer: 'John Doe', amount: 1500, date: '2024-02-05', location: 'Salem' },
    { id: 'DD002', customer: 'Jane Smith', amount: 2000, date: '2024-02-05', location: 'Trichy' },
  ],
  toPay: [
    { id: 'DD003', customer: 'Mike Johnson', amount: 1800, date: '2024-02-05', location: 'Erode' },
    { id: 'DD004', customer: 'Sarah Wilson', amount: 2200, date: '2024-02-05', location: 'Nambiyur' },
  ],
};

function calculateTotal(bookingsArray) {
  return bookingsArray.reduce((total, booking) => total + booking.amount, 0);
}

export default function DoorDelivery() {
  const totalPaid = calculateTotal(data.paid);
  const totalToPay = calculateTotal(data.toPay);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Door Delivery</h2>
      <p className="text-sm mb-4">
        Orders are delivered directly to the specified address with additional charges.
        If the address is on the same route, it goes directly; otherwise, it goes via the main hub.
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