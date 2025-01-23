import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const deliveryData = [
  { date: '2024-02-01', completed: 45, pending: 15 },
  { date: '2024-02-02', completed: 50, pending: 10 },
  { date: '2024-02-03', completed: 35, pending: 20 },
  { date: '2024-02-04', completed: 60, pending: 8 },
  { date: '2024-02-05', completed: 40, pending: 12 },
];

function DeliveryStatusChart() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Daily Delivery Status</h2>
      <div className="w-full overflow-x-auto">
        <BarChart width={600} height={300} data={deliveryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="completed" fill="#4CAF50" name="Completed" />
          <Bar dataKey="pending" fill="#FFA726" name="Pending" />
        </BarChart>
      </div>
    </div>
  );
}

export default DeliveryStatusChart;