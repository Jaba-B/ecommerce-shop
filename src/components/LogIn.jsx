import React, { useState, useRef } from "react";
import {RiLoginCircleFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const [ submit, setSubmit ] = useState(true)
    const [ forget, setForget ] = useState(false)

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const loginSubmit = () => {
        navigate('/home');
    };

    return(
        <div className="flex flex-col justify-center items-center bg-blue w-full h-screen">
            <RiLoginCircleFill className="h-[150px] w-[150px] fill-turquoise"/>
            <p className="text-gold text-2xl text-center font-semibold my-7">Sign In</p>
            <p className="text-lg text-center mb-7">Enter your registration <span className="text-xl font-bold">Username</span> and <span className="text-xl font-bold">Password</span></p>
            <form>
                <div className="w-[400px] flex justify-evenly mb-5">
                    <label htmlFor="userName"><span>Username</span></label>
                    <input ref={userNameRef} type="text" id="userName" placeholder="Write your username" className="text-center rounded-md"/>
                </div>
                <div className="w-[400px] flex justify-evenly">
                    <label htmlFor="password"><span>Password</span></label>
                    <input ref={passwordRef} type="password" id="password" placeholder="Write your password" className="text-center rounded-md"/>
                </div>
                <div>
                    <div className="w-full flex justify-evenly mt-7">
                        <button type="button" className="text-white w-[80px] h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all" 
                            onClick={() => {
                                const actualUserName = localStorage.getItem('userName');
                                const actualPassword = localStorage.getItem('password');
                                const currentUserName = userNameRef.current.value;
                                const currentPassword = passwordRef.current.value;
                                if(!(currentUserName === actualUserName && currentPassword === actualPassword)) {
                                    setSubmit(false)
                                } else {
                                    loginSubmit()
                                }
                            }}
                        >Submit</button>
                        <button type="button" className="text-white w-[80px] h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all"
                            onClick={() => {
                                setForget(!forget)
                            }}
                        >Forget</button>
                    </div>
                    {submit ? '' : <p className="block mt-2 text-center text-red-600 text-sm w-full">Your Username or Password is incorrect</p>}
                    {forget ? <p className="block mt-2 text-center text-red-600 text-sm w-full">Username: {localStorage.getItem('userName')} password: {localStorage.getItem('password')}</p> : ''}
                </div>
            </form>
        </div>
    )
}

export default LogIn