import React, { useContext } from 'react';

import { FormContext } from '../../context/FormContext';

const AssignLead = ({ nextStep, prevStep, handleSubmit }) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='pt-4'>
            <h2 className="text-xl text-center font-bold mb-4">Assign Lead</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Assign to Team</label>
                <select name="team" value={formData.team} onChange={handleChange} className="w-full p-2 border border-gray-500 rounded">
                    <option value="" disabled>Choose Team</option>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                    <option value="Team D">Team D</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Assign to Sales Executive</label>
                <select name="salesExecutive" value={formData.salesExecutive} onChange={handleChange} className="w-full p-2 border border-gray-500 rounded">
                    <option value="" disabled>Choose Sales Executive</option>
                    <option value="Sales Executive 1">Sales Executive 1</option>
                    <option value="Sales Executive 2">Sales Executive 2</option>
                    <option value="Sales Executive 3">Sales Executive 3</option>
                    <option value="Sales Executive 4">Sales Executive 4</option>
                </select>
            </div>
            <div className="flex justify-between mt-1 form-cont-1 rounded-2xl">

                <button onClick={handleSubmit} className="next-button text-white px-3 py-1 mr-5 rounded ml-auto">
                    Submit
                </button>
                <button onClick={nextStep} className="preview-button text-white px-3 py-1 rounded ml-auto">
                    Preview
                </button>
            </div>
        </div>
    );
};

export default AssignLead;
