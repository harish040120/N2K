import { useState } from 'react';
import { DELIVERY_POINTS } from '../../utils/deliveryPoints';

export default function DeliveryPointsManager() {
  const [selectedHub, setSelectedHub] = useState('NAMBIYUR');
  const [newPoint, setNewPoint] = useState('');
  const [points, setPoints] = useState(DELIVERY_POINTS);

  const handleAddPoint = () => {
    if (!newPoint.trim()) return;
    
    setPoints(prev => ({
      ...prev,
      [selectedHub]: [...prev[selectedHub], newPoint.trim()]
    }));
    setNewPoint('');
  };

  const handleRemovePoint = (point) => {
    setPoints(prev => ({
      ...prev,
      [selectedHub]: prev[selectedHub].filter(p => p !== point)
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Delivery Points</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Hub
        </label>
        <select
          value={selectedHub}
          onChange={(e) => setSelectedHub(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          {Object.keys(points).map(hub => (
            <option key={hub} value={hub}>{hub}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add New Delivery Point
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newPoint}
            onChange={(e) => setNewPoint(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter delivery point name"
          />
          <button
            onClick={handleAddPoint}
            className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Current Delivery Points</h3>
        <div className="space-y-2">
          {points[selectedHub].map(point => (
            <div key={point} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>{point}</span>
              <button
                onClick={() => handleRemovePoint(point)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}