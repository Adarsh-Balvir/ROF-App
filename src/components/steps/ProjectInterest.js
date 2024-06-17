import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const ProjectInterest = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='pt-4'>
            <h2 className="text-xl text-center font-bold mb-4">Project Interest</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Type of Project</label>
                <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                >
                    <option value="" disabled>Choose Project</option>
                    <option value="Project A">Project A</option>
                    <option value="Project B">Project B</option>
                    <option value="Project C">Project C</option>
                    <option value="Project D">Project D</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Project Timeline</label>
                <select
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                >
                    <option value="" disabled>Tentative Timeline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="Not Sure">Not Sure</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Project location</label>
                <input
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                    type="text"
                    placeholder="Enter Project Location"
                />
            </div>
        </div>
    );
};

export default ProjectInterest;
