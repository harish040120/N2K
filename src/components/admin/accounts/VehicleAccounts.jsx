import { useState } from 'react';
import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline';

const initialVehicles = [
  {
    id: 'V001',
    type: 'Delivery Bike',
    number: 'TN45A1234',
    kilometers: 15000,
    fuelFilled: 10,
    fuelPrice: 102.50,
    lastService: '2024-01-15'
  },
  {
    id: 'V002',
    type: 'Mini Van',
    number: 'TN45B5678',
    kilometers: 25000,
    fuelFilled: 25,
    fuelPrice: 102.50,
    lastService: '2024-01-20'
  }
];

export default function VehicleAccounts() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [formData, setFormData] = useState({
    type: '',
    number: '',
    kilometers: '',
    fuelFilled: '',
    fuelPrice: '',
    lastService: ''
  });

  const calculateMileage = (kilometers, fuelFilled) => {
    if (!fuelFilled) return 'N/A';
    return (kilometers / fuelFilled).toFixed(2) + ' km/L';
  };

  const calculateFuelCost = (fuelFilled, fuelPrice) => {
    return (fuelFilled * fuelPrice).toFixed(2);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingVehicle) {
      setVehicles(vehicles.map(vehicle => 
        vehicle.id === editingVehicle.id 
          ? { ...vehicle, ...formData }
          : vehicle
      ));
    } else {
      const newVehicle = {
        id: `V${String(vehicles.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setVehicles([...vehicles, newVehicle]);
    }
    setShowForm(false);
    setEditingVehicle(null);
    setFormData({
      type: '',
      number: '',
      kilometers: '',
      fuelFilled: '',
      fuelPrice: '',
      lastService: ''
    });
  };

  const handleEdit = (vehicle) => {
    setEditingVehicle(vehicle);
    setFormData(vehicle);
    setShowForm(true);
  };

  const handleUpdateFuel = (vehicle) => {
    const newFuel = prompt('Enter new fuel amount in liters:');
    const newPrice = prompt('Enter current fuel price per liter:');
    if (newFuel && newPrice) {
      setVehicles(vehicles.map(v => {
        if (v.id === vehicle.id) {
          return {
            ...v,
            fuelFilled: parseFloat(v.fuelFilled) + parseFloat(newFuel),
            fuelPrice: parseFloat(newPrice)
          };
        }
        return v;
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Vehicle Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Vehicle
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">
            {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Number</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kilometers</label>
              <input
                type="number"
                name="kilometers"
                value={formData.kilometers}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fuel Filled (L)</label>
              <input
                type="number"
                name="fuelFilled"
                value={formData.fuelFilled}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fuel Price (₹/L)</label>
              <input
                type="number"
                name="fuelPrice"
                value={formData.fuelPrice}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Service</label>
              <input
                type="date"
                name="lastService"
                value={formData.lastService}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div className="col-span-2 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingVehicle(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700"
              >
                {editingVehicle ? 'Update' : 'Add'} Vehicle
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Vehicle ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Kilometers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Fuel (L)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Fuel Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Mileage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Last Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.kilometers.toLocaleString()} km
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.fuelFilled}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{calculateFuelCost(vehicle.fuelFilled, vehicle.fuelPrice)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {calculateMileage(vehicle.kilometers, vehicle.fuelFilled)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.lastService}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(vehicle)}
                      className="text-slate-600 hover:text-slate-900"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleUpdateFuel(vehicle)}
                      className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs hover:bg-green-200"
                    >
                      Add Fuel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}