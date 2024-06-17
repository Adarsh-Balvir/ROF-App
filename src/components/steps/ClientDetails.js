import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import './ClientDetails.css';
import camera from '../images/cam-icon.png';

const ClientDetails = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [image, setImage] = useState(formData.image || null);
    const [isFocused, setIsFocused] = useState(false);

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

    const handleContactChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setFormData({ ...formData, contactNo: value });
        }
    };

    return (
        <div className=" rounded-2xl">
            <h2 className="text-xl mb-1 font-bold  text-center">Client Details</h2>
            <div className="mb-1 flex flex-col items-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                    {image ? (
                        <img src={image} alt="Uploaded" className="w-20 h-20 rounded-full object-cover" />
                    ) : (
                        <div className="w-20 h-20 photo-field bg-white rounded-full flex items-center justify-center">
                            <img src={camera} alt="" className="w-8 h-8" />
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
                <span className="photo-text">Click to add photo</span>
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Full Name*</label>
                <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                    type="text"
                    placeholder="John Doe"
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Contact no*</label>
                <div className="relative">
                    <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 contry-code ${isFocused ? 'focused' : ''}`}>+91</span>
                    <input
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleContactChange}
                        className="w-full p-2 pl-10 border border-gray-500 rounded"
                        type="tel"
                        placeholder="9422121418"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Email ID*</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-500 rounded"
                    type="email"
                    placeholder="johndoe@rofgroups.com"
                />
            </div>
        </div>
    );
};

export default ClientDetails;
