import { useState } from 'react';

function AgentSignup() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    yearsInBusiness: '',
    fleetSize: '',
    operatingAreas: '',
    licenseNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Agent application submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Become an N2K Logistics Agent</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Name
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Person
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Type
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Business Type</option>
              <option value="courier">Courier Service</option>
              <option value="transport">Transport Company</option>
              <option value="warehouse">Warehouse Provider</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years in Business
            </label>
            <input
              type="number"
              name="yearsInBusiness"
              value={formData.yearsInBusiness}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fleet Size
            </label>
            <input
              type="number"
              name="fleetSize"
              value={formData.fleetSize}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License Number
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Areas
            </label>
            <textarea
              name="operatingAreas"
              value={formData.operatingAreas}
              onChange={handleChange}
              required
              rows="3"
              placeholder="List the areas where you currently operate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgentSignup;