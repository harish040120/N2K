import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function VehicleAccounts() {
  const staticVehicles = [
    { vehicle_id: 1, vehicle_number: 'ABC123', max_capacity_kg: 1000, fuelFilled: 500 },
    { vehicle_id: 2, vehicle_number: 'XYZ789', max_capacity_kg: 1500, fuelFilled: 600 },
    { vehicle_id: 3, vehicle_number: 'LMN456', max_capacity_kg: 1200, fuelFilled: 700 },
  ];

  // Using state here if you plan to modify the static list locally
  const [vehicles] = useState(staticVehicles);

  const handleEdit = (vehicle) => {
    // Implement edit functionality (static simulation)
    console.log('Edit vehicle:', vehicle);
  };

  const handleUpdateFuel = (vehicle) => {
    // Implement add fuel functionality (static simulation)
    console.log('Update fuel for vehicle:', vehicle);
  };

  return (
    <div>
      <h2>Vehicle Accounts (Static Data)</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.vehicle_id} className="flex justify-between items-center border-b py-2">
            <span>
              {vehicle.vehicle_number} - {vehicle.max_capacity_kg} kg - Fuel Filled: {vehicle.fuelFilled}
            </span>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(vehicle)} className="text-blue-600 hover:text-blue-900">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleUpdateFuel(vehicle)}
                className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Fuel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}