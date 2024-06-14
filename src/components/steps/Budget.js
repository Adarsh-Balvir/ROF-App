import React from 'react';

const Budget = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Budget</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Estimated Budget</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Enter Your Budget" />
            </div>
        </div>
    );
};

export default Budget;
