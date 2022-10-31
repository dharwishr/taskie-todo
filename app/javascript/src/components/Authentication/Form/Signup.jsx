import React from "react";

import {Link} from "react-router-dom";

const Signup = ({
    handleSubmit,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirmation
}) => (
    <div className="bg-gray-50 flex min-h-screen items-center justify-center
                            px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold
                                                leading-9 text-gray-700">
                Sign Up
            </h2>
            <div className="text-center">
                <Link to="/" className="transition focus:outline-none mt-2 text-center
                                                            text-sm font-medium text-bb-purple duration-150
                                                            ease-in-out focus:underline">
                    Or Login Now
                </Link>
            </div>
            <form className="mt-8"
                onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="John"
                        onChange={
                            e => setName(e.target.value)
                        }/>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="hello@example.com" type="email"
                        onChange={
                            e => setEmail(e.target.value)
                        }/>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" type="password"
                        onChange={
                            e => setPassword(e.target.value)
                        }/>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Confirm Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="********" type="password"
                        onChange={
                            e => setPasswordConfirmation(e.target.value)
                        }/>
                    <div class="flex items-center justify-between ">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);

export default Signup;
