import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const Budget = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className=' pt-4'>
            <h2 className="text-xl text-center font-bold mb-4">Budget</h2>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">Estimated Budget</label>
                <input
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                    type="text"
                    placeholder="Enter Your Budget"
                />
            </div>
        </div>
    );
};

export default Budget;
