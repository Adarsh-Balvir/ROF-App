import React, { useState } from 'react';
import ClientDetails from './steps/ClientDetails';
import ProjectInterest from './steps/ProjectInterest';
import Budget from './steps/Budget';
import AdditionalRequirements from './steps/AdditionalRequirements';
import AssignLead from './steps/AssignLead';
import Preview from './steps/Preview';
import './MultiStepForm.css'; // Custom CSS file

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

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

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
                return <AssignLead />;
            case 5:
                return <Preview />;
            default:
                return <ClientDetails />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white py-4 shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <img src="path-to-logo.png" alt="Logo" className="h-10" /> {/* Update logo path */}
                </div>
            </header>
            <div className="flex flex-1">
                <div className="w-1/3 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-client-background.png)' }}> {/* Update background image path */}
                </div>
                <div className="w-2/3 p-8 bg-gray-50 flex flex-col items-center">
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
                    <div className="bg-white mt-0 py-3 px-8 shadow-md rounded-lg w-full max-w-md ">
                        <div>
                            {renderStep()}

                            {currentStep > 0 && (
                                <button
                                    onClick={prevStep}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                                >
                                    Previous
                                </button>
                            )}
                            <button
                                onClick={nextStep}
                                className="bg-brown-500 text-white px-4 py-2 rounded ml-auto"
                            >
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
