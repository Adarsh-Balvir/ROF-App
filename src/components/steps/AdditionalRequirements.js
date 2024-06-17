import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const AdditionalRequirements = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='pt-4'>
            <h2 className="text-xl font-bold text-center mb-4">Additional Requirements & Notes</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Specific Requirements or Preferences</label>
                <input
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                    type="text"
                    placeholder="Enter any specific requirements or preferences"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Notes for sales person</label>
                <input
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                    type="text"
                    placeholder="Internal Notes"
                />
            </div>
        </div>
    );
};

export default AdditionalRequirements;
