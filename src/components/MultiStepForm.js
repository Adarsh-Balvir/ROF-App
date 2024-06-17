import React, { useState, useContext } from 'react';
import ClientDetails from './steps/ClientDetails';
import ProjectInterest from './steps/ProjectInterest';
import Budget from './steps/Budget';
import AdditionalRequirements from './steps/AdditionalRequirements';
import AssignLead from './steps/AssignLead';
import Preview from './steps/Preview';
import { FormContext } from '../context/FormContext';
import mainLogo from '../../src/components/images/main-logo.png';
import './MultiStepForm.css';

const steps = [
    'Client Details',
    'Project Interest',
    'Budget',
    'Additional Requirements & Notes',
    'Assign Lead',
    'Preview'
];

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { formData } = useContext(FormContext);

    const validateClientDetails = () => {
        const { fullName, contactNo, email } = formData;
        if (!fullName || !contactNo || !email) {
            alert('Please fill all required fields.');
            return false;
        }
        return true;
    };

    const nextStep = () => {
        if (currentStep === 0) {
            if (validateClientDetails()) {
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
            }
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };

    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    const handleSubmit = () => {
        // API call to submit form data
        console.log('Form Submitted', formData);
        // Redirect to dashboard
        window.location.href = '/dashboard';
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <ClientDetails />;
            case 1:
                return <ProjectInterest />;
            case 2:
                return <Budget />;
            case 3:
                return <AdditionalRequirements />;
            case 4:
                return <AssignLead nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit} />;
            case 5:
                return <Preview prevStep={() => setCurrentStep(0)} handleSubmit={handleSubmit} />;
            default:
                return <ClientDetails />;
        }
    };

    return (
        <div className="main-container flex flex-col">
            <header className="bg-white py-1 shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                    <img src={mainLogo} alt="Logo" className="h-12 main-logo" />
                </div>
            </header>
            <div className="flex flex-1">
                {currentStep !== 5 && <div className="w-1/3 bg-cover bg-center client-image">
                    <h6 className='text-2xl text-center mt-6 text-white client-bg-heading'>CLIENT INFORMATION FORM</h6>
                </div>}
                <div className={`vector-bg w-2/3 p-7 flex flex-col align-center items-center bg ${currentStep === 5 ? 'w-full' : ''}`}>
                    <div className="stepper-container mb-8 w-full">
                        {steps.map((step, index) => (
                            <div key={index} className={`stepper-item ${index <= currentStep ? 'active' : ''}`}>
                                <div className="stepper-circle-container">
                                    <div className="stepper-circle"></div>
                                    {index < steps.length - 1 && (
                                        <div className={`stepper-line ${index < currentStep ? 'completed' : ''}`}></div>
                                    )}
                                </div>
                                <div className="stepper-label">{step}</div>
                            </div>
                        ))}
                    </div>
                    <div className="step-render-container rounded-2xl">
                        <div className='step-render-2 rounded-2xl px-14 pb-2'>
                            {renderStep()}
                            {currentStep !== 4 && currentStep !== 5 && (
                                <div className="flex justify-between mt-1 form-cont-1 rounded-2xl">
                                    {currentStep > 0 && (
                                        <button
                                            onClick={prevStep}
                                            className="next-button mr-6 text-white px-3 py-1 rounded"
                                        >
                                            <i className=" px-2 fa-solid fa-arrow-left"></i>
                                        </button>
                                    )}
                                    <button
                                        onClick={nextStep}
                                        className="next-button text-white px-3 py-1 rounded ml-auto"
                                    >
                                        Next <i className="ml-4 fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
