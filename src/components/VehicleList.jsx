import React, { useState, useEffect } from 'react';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('/api/vehicles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVehicles(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch vehicles: ' + error.message);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) return <div>Loading vehicles...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Vehicle List</h2>
      {vehicles.length === 0 ? (
        <p>No vehicles found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Details</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(vehicle => (
              <tr key={vehicle.vehicle_id}>
                <td>{vehicle.vehicle_id}</td>
                <td>
                  {Object.entries(vehicle)
                    .filter(([key]) => key !== 'vehicle_id')
                    .map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VehicleList;