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

export default function BookingStatus() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [bookings, setBookings] = useState(initialBookings);

  const calculateTotal = (bookings) => {
    return bookings.reduce((sum, booking) => sum + booking.amount, 0);
  };

  const BookingTable = ({ bookings, title }) => (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Booking ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{booking.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.location}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td colSpan="2" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Total
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                ₹{calculateTotal(bookings)}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const DeliveryTypeSection = ({ title, icon: Icon, data }) => (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-gray-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-green-800 mb-4">Paid Bookings</h3>
          <BookingTable bookings={data.paid} title="Paid" />
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-yellow-800 mb-4">To-Pay Bookings</h3>
          <BookingTable bookings={data.toPay} title="To Pay" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Booking Status</h1>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Door Delivery Bookings</p>
            <p className="text-2xl font-bold text-gray-900">
              {bookings.doorDelivery.paid.length + bookings.doorDelivery.toPay.length}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Office Pickup Bookings</p>
            <p className="text-2xl font-bold text-gray-900">
              {bookings.officePickup.paid.length + bookings.officePickup.toPay.length}
            </p>
          </div>
        </div>
      </div>

      <DeliveryTypeSection
        title="Door Delivery"
        icon={TruckIcon}
        data={bookings.doorDelivery}
      />

      <DeliveryTypeSection
        title="Office Pickup"
        icon={BuildingOfficeIcon}
        data={bookings.officePickup}
      />
    </div>
  );
}