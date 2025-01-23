import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const routePerformance = [
  { route: 'Route A', deliveries: 125, efficiency: 94 },
  { route: 'Route B', deliveries: 98, efficiency: 88 },
  { route: 'Route C', deliveries: 156, efficiency: 96 },
  { route: 'Route D', deliveries: 112, efficiency: 90 },
];

function RoutePerformanceChart() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Route Efficiency</h2>
      <div className="w-full overflow-x-auto">
        <LineChart width={600} height={300} data={routePerformance}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="route" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="efficiency" stroke="#2196F3" name="Efficiency %" />
          <Line type="monotone" dataKey="deliveries" stroke="#F44336" name="Total Deliveries" />
        </LineChart>
      </div>
    </div>
  );
}

export default RoutePerformanceChart;