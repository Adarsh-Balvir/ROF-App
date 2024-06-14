import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';

const ClientDetails = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [image, setImage] = useState(formData.image || null);

    useEffect(() => {
        setImage(formData.image);
    }, [formData.image]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            setFormData({ ...formData, image: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="">
            <h2 className="text-xl font-bold mb-4 text-center">Client Details</h2>
            <div className="mb-4 flex flex-col items-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                    {image ? (
                        <img src={image} alt="Uploaded" className="w-24 h-24 rounded-full object-cover" />
                    ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-400">Click to add photo</span>
                        </div>
                    )}
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Full Name*</label>
                <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="John Doe"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Contact no*</label>
                <input
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="+91 9422121418"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email ID*</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    type="email"
                    placeholder="johndoe@rofgroups.com"
                />
            </div>
        </div>
    );
};

export default ClientDetails;
