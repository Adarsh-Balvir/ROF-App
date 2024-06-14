import React from 'react';

const AdditionalRequirements = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Additional Requirements & Notes</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Specific Requirements or Preferences</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Enter any specific requirements or preferences" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Notes for sales person</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Internal Notes" />
            </div>
        </div>
    );
};

export default AdditionalRequirements;
