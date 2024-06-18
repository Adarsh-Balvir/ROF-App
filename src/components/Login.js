import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import icon from '../components/images/image 1.png';
import backimg from "../components/images/Vector 28.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login-form submitted', { email, password });
    };

    return (
        <div className="relative h-screen flex items-center justify-center bg-orange-100" style={{ backgroundImage: `url(${backimg})` }}>
            <form
                onSubmit={handleSubmit}
                className="shadow-lg rounded-xl bg-white flex flex-col items-center py-10 px-8 gap-8"
            >
                <img
                    className="w-28 h-24 rounded-lg object-cover"
                    alt="ROF Logo"
                    src={icon}
                />
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Welcome to ROF Team Portal</h1>
                    <p className="text-lg font-medium text-gray-600 mt-2">Use your work email to log in your team workspace</p>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div>
                        <label className="font-medium">Email / Employee ID</label>
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-300 py-2 px-4 mt-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="relative">
                        <label className="font-medium">Password</label>
                        <Link to="/ForgotPassword" className="absolute top-0 right-0 text-saddlebrown text-sm font-medium mt-1">Forgot your password?</Link>
                        <div className="w-full rounded-lg border border-gray-300 py-2 px-4 mt-2 flex items-center justify-between">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="flex-1 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                            />
                            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ml-2">
                                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/form" className="w-full">
                    <button
                        type="submit"
                        className="next-button w-full font-bold text-white py-2 px-6 rounded-lg mt-4 flex items-center justify-center"
                    >
                        Log In
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
