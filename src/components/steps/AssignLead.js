import React from 'react';

const AssignLead = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Assign Lead</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Assign to Team</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="" disabled selected>Choose Team</option>
                    <option value="Project A">Team A</option>
                    <option value="Project A">Team B</option>
                    <option value="Project A">Team C</option>
                    <option value="Project A">Team D</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Assign to Sales Executive</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="" disabled selected>Choose Sales Executive </option>
                    <option value="Project A">Sales Executive 1</option>
                    <option value="Project A">Sales Executive 2</option>
                    <option value="Project A">Sales Executive 3</option>
                    <option value="Project A">Sales Executive 4</option>
                </select>
            </div>
        </div>
    );
};

export default AssignLead;
