import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const validateForm = () => {
        if (!email || !password) {
            setErrorMessage('Email and password are required');
            toast.error('Email and password are required');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        const formDetails = new URLSearchParams();
        formDetails.append('username', email);
        formDetails.append('password', password);

        try {
            const response = await fetch('http://127.0.0.1:8000/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDetails,
            });

            setLoading(false);

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.detail || 'Authentication failed!');
                toast.error(errorData.detail || 'Authentication failed!');
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage('An error occurred. Please try again later.');
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0 bg-[#121212]">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2 bg-[#282828] text-gray-100">
                    <p className="text-xl text-center font-bold">Welcome back!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 flex flex-col justify-between">
                            <div className="flex justify-between">
                                <label className="block text-sm mb-2">
                                    Email Address
                                </label>
                            </div>
                            <input
                                className="rounded py-2 px-4 block w-full outline-none focus:outline-blue-700 bg-dark-300"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4 flex flex-col justify-between">
                            <div className="flex justify-between">
                                <label className="block text-sm mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                className="rounded py-2 px-4 block w-full outline-none focus:outline-blue-700 bg-dark-300"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        <div className="mt-4 flex items-center w-full text-center">
                            <Link
                                to={"/register"}
                                className="text-xs text-gray-500 capitalize text-center w-full"
                            >
                                Don&apos;t have any account yet?
                                <span className="text-blue-700"> Sign Up</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
