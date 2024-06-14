import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNo: '',
        email: '',
        projectType: '',
        projectTimeline: '',
        projectLocation: '',
        budget: '',
        requirements: '',
        notes: '',
        team: '',
        salesExecutive: '',
        image: null, // Added image field to store uploaded image
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
