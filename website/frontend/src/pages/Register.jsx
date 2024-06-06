import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password length
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        // Validate symbol character
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
            setErrorMessage("Password must contain at least one symbol character.");
            return;
        }

        const registrationResponse = await fetch("http://127.0.0.1:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, username, password, fullname: name}),
        });

        if (registrationResponse.ok) {
            // Login the user after successful registration
            const loginResponse = await fetch("http://127.0.0.1:8000/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: email,
                    password: password,
                }),
            });

            if (loginResponse.ok) {
                const data = await loginResponse.json();
                localStorage.setItem("token", data.access_token);
                navigate("/dashboard");
            } else {
                setErrorMessage("Registration successful, but login failed. Please try logging in manually.");
            }
        } else {
            const data = await registrationResponse.json();
            setErrorMessage(data.detail || "Registration failed");
        }
    };

    const checkUsername = async (username) => {
        if (username) {
            const response = await fetch(`http://127.0.0.1:8000/check-username?username=${username}`);
            if (!response.ok) {
                setUsernameError("Username already exists. Please choose another one.");
                toast.error("Username already exists. Please choose another one.");
            } else {
                setUsernameError("");
            }
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        checkUsername(e.target.value);
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
                                    Username
                                </label>
                            </div>
                            <input
                                className="rounded py-2 px-4 block w-full outline-none focus:outline-blue-700 bg-dark-300"
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            {usernameError && (
                                <div className="mt-2 text-red-500">
                                    {usernameError}
                                </div>
                            )}
                        </div>
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
                                    Full Name
                                </label>
                            </div>
                            <input
                                className="rounded py-2 px-4 block w-full outline-none focus:outline-blue-700 bg-dark-300"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                        {errorMessage && (
                            <div className="mt-4 text-red-500">
                                {errorMessage}
                            </div>
                        )}
                        <div className="mt-8">
                            <button
                                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                                type="submit"
                                disabled={!!usernameError}
                            >
                                Create my Account
                            </button>
                        </div>
                        <div className="mt-4 flex items-center w-full text-center">
                            <Link
                                to={"/login"}
                                className="text-xs text-gray-500 capitalize text-center w-full"
                            >
                                Already a member?
                                <span className="text-blue-700"> Login</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}