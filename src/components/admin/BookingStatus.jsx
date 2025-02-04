import { useState } from 'react';
import { CalendarIcon, TruckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const initialBookings = {
  doorDelivery: {
    paid: [
      { id: 'DD001', customer: 'John Doe', amount: 1500, date: '2024-02-05', location: 'Salem' },
      { id: 'DD002', customer: 'Jane Smith', amount: 2000, date: '2024-02-05', location: 'Trichy' }
    ],
    toPay: [
      { id: 'DD003', customer: 'Mike Johnson', amount: 1800, date: '2024-02-05', location: 'Erode' },
      { id: 'DD004', customer: 'Sarah Wilson', amount: 2200, date: '2024-02-05', location: 'Nambiyur' }
    ]
  },
  officePickup: {
    paid: [
      { id: 'OP001', customer: 'Alex Brown', amount: 800, date: '2024-02-05', location: 'Salem Hub' },
      { id: 'OP002', customer: 'Emma Davis', amount: 1200, date: '2024-02-05', location: 'Trichy Hub' }
    ],
    toPay: [
      { id: 'OP003', customer: 'Tom Wilson', amount: 950, date: '2024-02-05', location: 'Nambiyur Hub' },
      { id: 'OP004', customer: 'Lisa Anderson', amount: 1100, date: '2024-02-05', location: 'Salem Hub' }
    ]
  }
};

function calculateTotal(bookingsArray) {
  return bookingsArray.reduce((total, booking) => total + booking.amount, 0);
}

export default function BookingStatus() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [bookings, setBookings] = useState(initialBookings);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Status for {selectedDate}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Door Delivery Panel */}
        <div className="border p-4 rounded shadow">
          <div className="flex items-center mb-2">
            <TruckIcon className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-semibold">Door Delivery</h3>
          </div>
          {/* Paid Orders */}
          <div className="mb-4">
            <h4 className="font-medium">Paid</h4>
            <table className="w-full mt-2 text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-left">ID</th>
                  <th className="px-2 py-1 text-left">Customer</th>
                  <th className="px-2 py-1 text-left">Amount</th>
                  <th className="px-2 py-1 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {bookings.doorDelivery.paid.map((booking) => (
                  <tr key={booking.id} className="border-t">
                    <td className="px-2 py-1">{booking.id}</td>
                    <td className="px-2 py-1">{booking.customer}</td>
                    <td className="px-2 py-1">₹{booking.amount}</td>
                    <td className="px-2 py-1">{booking.location}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td colSpan="2" className="px-2 py-1">Total</td>
                  <td className="px-2 py-1" colSpan="2">₹{calculateTotal(bookings.doorDelivery.paid)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* To Pay Orders */}
          <div>
            <h4 className="font-medium">To Pay</h4>
            <table className="w-full mt-2 text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-left">ID</th>
                  <th className="px-2 py-1 text-left">Customer</th>
                  <th className="px-2 py-1 text-left">Amount</th>
                  <th className="px-2 py-1 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {bookings.doorDelivery.toPay.map((booking) => (
                  <tr key={booking.id} className="border-t">
                    <td className="px-2 py-1">{booking.id}</td>
                    <td className="px-2 py-1">{booking.customer}</td>
                    <td className="px-2 py-1">₹{booking.amount}</td>
                    <td className="px-2 py-1">{booking.location}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td colSpan="2" className="px-2 py-1">Total</td>
                  <td className="px-2 py-1" colSpan="2">₹{calculateTotal(bookings.doorDelivery.toPay)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Office Pickup Panel */}
        <div className="border p-4 rounded shadow">
          <div className="flex items-center mb-2">
            <BuildingOfficeIcon className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-semibold">Office Pickup</h3>
          </div>
          {/* Paid Orders */}
          <div className="mb-4">
            <h4 className="font-medium">Paid</h4>
            <table className="w-full mt-2 text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-left">ID</th>
                  <th className="px-2 py-1 text-left">Customer</th>
                  <th className="px-2 py-1 text-left">Amount</th>
                  <th className="px-2 py-1 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {bookings.officePickup.paid.map((booking) => (
                  <tr key={booking.id} className="border-t">
                    <td className="px-2 py-1">{booking.id}</td>
                    <td className="px-2 py-1">{booking.customer}</td>
                    <td className="px-2 py-1">₹{booking.amount}</td>
                    <td className="px-2 py-1">{booking.location}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td colSpan="2" className="px-2 py-1">Total</td>
                  <td className="px-2 py-1" colSpan="2">₹{calculateTotal(bookings.officePickup.paid)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* To Pay Orders */}
          <div>
            <h4 className="font-medium">To Pay</h4>
            <table className="w-full mt-2 text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-left">ID</th>
                  <th className="px-2 py-1 text-left">Customer</th>
                  <th className="px-2 py-1 text-left">Amount</th>
                  <th className="px-2 py-1 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {bookings.officePickup.toPay.map((booking) => (
                  <tr key={booking.id} className="border-t">
                    <td className="px-2 py-1">{booking.id}</td>
                    <td className="px-2 py-1">{booking.customer}</td>
                    <td className="px-2 py-1">₹{booking.amount}</td>
                    <td className="px-2 py-1">{booking.location}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td colSpan="2" className="px-2 py-1">Total</td>
                  <td className="px-2 py-1" colSpan="2">₹{calculateTotal(bookings.officePickup.toPay)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}