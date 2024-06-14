import React from 'react';

const ProjectInterest = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Project Interest</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Type of Project</label>
                <select placeholder='Choose Project-1' className="w-full p-2 border border-gray-300 rounded">
                    <option value="" disabled selected>Choose Project</option>
                    <option value="Project A">Project A</option>
                    <option value="Project A">Project B</option>
                    <option value="Project A">Project C</option>
                    <option value="Project A">Project D</option>


                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Project Timeline</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="" disabled selected>Tentative Timline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="Not Sure">Not Sure</option>

                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Project location</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Enter Project Location" />
            </div>
        </div>
    );
};

export default ProjectInterest;
