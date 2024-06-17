import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const Preview = ({ prevStep, handleSubmit }) => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-4xl mx-auto py-4 px-2 rounded-lg">
            <div className="flex items-center w-full mb-4">
                <div className="flex flex-col items-center border-dotted mr-4">
                    {formData.image ? (
                        <img src={formData.image} alt="Uploaded" className="w-24 h-24 rounded object-cover border-2 border-dotted border-gray-400" />
                    ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded border-2 border-dotted border-gray-400 flex items-center justify-center">
                            <span className="text-gray-400">No Photo</span>
                        </div>
                    )}
                </div>
                <h2 className="text-2xl mx-auto font-extrabold">CLIENT INFORMATION FORM</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                    <h3 className="text-lg font-semibold mb-2 field-text">Client Details</h3>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 p-2">
                            <label className="block text-gray-700">Full Name*</label>
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                                type="text"
                                placeholder='john doe'
                            />
                        </div>
                        <div className="w-full md:w-1/3 p-2">
                            <label className="block text-gray-700">Contact no*</label>
                            <input
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                                type="tel"
                                placeholder='+91 9422121418'
                            />
                        </div>
                        <div className="w-full md:w-1/3 p-2">
                            <label className="block text-gray-700">Email ID*</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                                type="email"
                                placeholder='Johndoe@rofgroups.com'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="text-lg font-semibold mb-2 field-text">Project Interest</h3>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 p-2">
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
                        <div className="w-full md:w-1/3 p-2">
                            <label className="block text-gray-700 ">Project Timeline</label>
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
                        <div className="w-full md:w-1/3 p-2">
                            <label className="block text-gray-700">Project Location</label>
                            <input
                                name="projectLocation"
                                value={formData.projectLocation}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                                type="text"
                                placeholder='Enter Project Location'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="text-lg font-semibold mb-2 field-text">Budget</h3>
                    <div className="w-full p-2">
                        <label className="block text-gray-700">Estimated Budget</label>
                        <input
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-500 rounded"
                            type="text"
                            placeholder='$  Enter Your Budget'
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="text-lg font-semibold mb-2 field-text">Additional Requirements & Notes</h3>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2  p-2">
                            <label className="block text-gray-700">Specific Requirements or Preferences</label>
                            <input
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                                type="text"
                                placeholder='Enter any specific requirements or preferences'
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <label className="block text-gray-700">Notes:</label>
                            <input
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                                type="text"
                                placeholder='Internal Notes'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="text-lg font-semibold mb-2 field-text">Assign Lead</h3>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 p-2">
                            <label className="block text-gray-700">Assign to Team</label>
                            <select
                                name="team"
                                value={formData.team}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                            >
                                <option value="" disabled>Choose Team</option>
                                <option value="Team A">Team A</option>
                                <option value="Team B">Team B</option>
                                <option value="Team C">Team C</option>
                                <option value="Team D">Team D</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <label className="block text-gray-700">Assign to Sales Executive</label>
                            <select
                                name="salesExecutive"
                                value={formData.salesExecutive}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-500 rounded"
                            >
                                <option value="" disabled>Choose Sales Executive</option>
                                <option value="Sales Executive 1">Sales Executive 1</option>
                                <option value="Sales Executive 2">Sales Executive 2</option>
                                <option value="Sales Executive 3">Sales Executive 3</option>
                                <option value="Sales Executive 4">Sales Executive 4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button onClick={prevStep} className="preview-button text-white px-10 py-1 mx-2 rounded">
                    Edit
                </button>
                <button onClick={handleSubmit} className="next-button text-white px-10 py-1 mx-2 rounded">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Preview;
