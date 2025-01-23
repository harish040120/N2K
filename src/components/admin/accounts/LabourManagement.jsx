import { useState } from 'react';
import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline';

const initialLabourers = [
  {
    id: 'L001',
    name: 'John Doe',
    role: 'Driver',
    dailyWage: 800,
    daysWorked: 24,
    overtime: 10,
    overtimeRate: 100
  },
  {
    id: 'L002',
    name: 'Jane Smith',
    role: 'Loading Staff',
    dailyWage: 600,
    daysWorked: 26,
    overtime: 15,
    overtimeRate: 75
  }
];

export default function LabourManagement() {
  const [labourers, setLabourers] = useState(initialLabourers);
  const [showForm, setShowForm] = useState(false);
  const [editingLabourer, setEditingLabourer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    dailyWage: '',
    daysWorked: '',
    overtime: '',
    overtimeRate: ''
  });

  const calculateTotalWages = (labourer) => {
    const regularPay = labourer.dailyWage * labourer.daysWorked;
    const overtimePay = labourer.overtime * labourer.overtimeRate;
    return regularPay + overtimePay;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingLabourer) {
      setLabourers(labourers.map(labourer => 
        labourer.id === editingLabourer.id 
          ? { ...labourer, ...formData }
          : labourer
      ));
    } else {
      const newLabourer = {
        id: `L${String(labourers.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setLabourers([...labourers, newLabourer]);
    }
    setShowForm(false);
    setEditingLabourer(null);
    setFormData({
      name: '',
      role: '',
      dailyWage: '',
      daysWorked: '',
      overtime: '',
      overtimeRate: ''
    });
  };

  const handleEdit = (labourer) => {
    setEditingLabourer(labourer);
    setFormData(labourer);
    setShowForm(true);
  };

  const handleUpdateWork = (labourer) => {
    const newDays = prompt('Enter additional days worked:');
    const newOvertime = prompt('Enter additional overtime hours:');
    if (newDays || newOvertime) {
      setLabourers(labourers.map(l => {
        if (l.id === labourer.id) {
          return {
            ...l,
            daysWorked: newDays ? parseInt(l.daysWorked) + parseInt(newDays) : l.daysWorked,
            overtime: newOvertime ? parseInt(l.overtime) + parseInt(newOvertime) : l.overtime
          };
        }
        return l;
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Labour Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Labour
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">
            {editingLabourer ? 'Edit Labour Details' : 'Add New Labour'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              >
                <option value="">Select Role</option>
                <option value="Driver">Driver</option>
                <option value="Loading Staff">Loading Staff</option>
                <option value="Warehouse Staff">Warehouse Staff</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Daily Wage (₹)</label>
              <input
                type="number"
                name="dailyWage"
                value={formData.dailyWage}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Days Worked</label>
              <input
                type="number"
                name="daysWorked"
                value={formData.daysWorked}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Overtime Hours</label>
              <input
                type="number"
                name="overtime"
                value={formData.overtime}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Overtime Rate (₹/hr)</label>
              <input
                type="number"
                name="overtimeRate"
                value={formData.overtimeRate}
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
                  setEditingLabourer(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700"
              >
                {editingLabourer ? 'Update' : 'Add'} Labour
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
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Daily Wage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Days Worked
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Overtime Hours
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Total Wages
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {labourers.map((labourer) => (
              <tr key={labourer.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {labourer.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {labourer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {labourer.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{labourer.dailyWage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {labourer.daysWorked}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {labourer.overtime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{calculateTotalWages(labourer)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(labourer)}
                      className="text-slate-600 hover:text-slate-900"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleUpdateWork(labourer)}
                      className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs hover:bg-green-200"
                    >
                      Update Work
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