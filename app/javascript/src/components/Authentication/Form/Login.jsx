import React from "react";

import {Link} from "react-router-dom";


const Login = ({handleSubmit, setEmail, setPassword}) => (
    <div className="bg-gray-50 flex min-h-screen items-center
                  justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold
                              leading-9 text-bb-gray-700">
                Sign In
            </h2>
            <div className="text-center">
                <Link to="/signup" className="transition focus:outline-none mt-2 text-sm
                                    font-medium text-bb-purple duration-150 ease-in-out
                                    focus:underline">
                    Or Register Now
                </Link>
            </div>
            <form className="mt-8"
                onSubmit={handleSubmit}
                >
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="hello@example.com"
                    onChange={
                        e => setEmail(e.target.value)
                    }
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                    onChange={
                        e => setPassword(e.target.value)
                    }
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default Login;
