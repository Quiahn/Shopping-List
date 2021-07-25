import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function InputField() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onButtonClick = (event) => {
        event.preventDefault()
        console.log("Sing Up Request Butonn Clicked")
        axios.post("http://localhost:3001/create-user", { username, password })
            .then((res) => {
                console.log(res.data)
            })
    }

    const onPasswordFieldChange = (event) => {
        //event.preventDefault();
        const firstPassword = document.getElementById('inline-password').value
        if (event.target.value === firstPassword) {
            document.getElementById('sign-up-btn').disabled = false
            // event.target.setCustomValidity("")
            // event.target.reportValidity();

        } else {
            document.getElementById('sign-up-btn').disabled = true
            // event.target.setCustomValidity("Passwords Don't Match")
            // event.target.reportValidity();
        }
    }
    return (
        <div className="container flex h-screen mx-auto">
            <div className="shadow-xl m-auto max-w-sm p-10 border-2 border-opacity-50">
                <form className=" max-w-sm m-0 p-0" id="user-form">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3 ">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username text-xs">
                                Username
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="shadow-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-username" type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)} required />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password  text-xs">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="shadow-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password" type="password" placeholder="**********" onChange={(event) => setPassword(event.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-check">
                                Password Confirm
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="shadow-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password-check" type="password" placeholder="**********" onChange={(event) => onPasswordFieldChange(event)} required />
                        </div>

                    </div>


                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="disabled:bg-indigo-100 shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sign-up-btn" type="button" disabled onClick={onButtonClick}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
