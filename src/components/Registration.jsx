import React from "react";
import { useFormik } from "formik";
import { schema } from "../yupSchema";
import {BiRegistered} from 'react-icons/bi'

const onSubmit = () => {
    console.log('Submited')
}

function Registration() {
    const { values, handleBlur, errors, touched, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: schema,
        onSubmit,
    })

    return (
        <div className="w-full h-screen bg-blue flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <BiRegistered className="h-[150px] w-[150px] fill-turquoise mb-5"/>
                <h1 className="text-gold text-2xl text-center mb-10 mx-2 font-semibold">Welcome to my React-TailwindCSS project</h1>
                <p className="text-lg text-center">To see the website, fill required registration fields. In purpose to log in, your <span className="text-xl font-bold">Username</span> and <span className="text-xl font-bold">Password</span> will be saved in <span className="text-xl font-bold">Local Storage</span>.</p>
            </div>
            <div className="mx-2">
                    <form onSubmit={handleSubmit} autoComplete="off" className="mx-auto h-[400px] flex flex-col justify-between w-[340px] my-10">
                        <div className="w-full flex justify-between my-3">
                            <label htmlFor="name"><span>Name</span></label>
                            <input 
                                value={values.name} 
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                id="name" type="text" placeholder="Enter Your name"
                                className={`text-center rounded-md ${errors.name && touched.name ? 'border-2 border-red-600' : ''}`}
                            />
                        </div>
                        {errors.name && touched.name && <p className="text-xs text-red-600 flex justify-end w-full mt-[-7px]">{errors.name}</p>}
                        <div className="w-full flex justify-between my-3">
                            <label htmlFor="age"><span>Age</span></label>
                            <input 
                                value={values.age}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                id="age" type="number" placeholder="Enter Your Age"
                                className={`text-center rounded-md ${errors.age && touched.age ? 'border-2 border-red-600' : ''}`}    
                            />
                        </div>
                        {errors.age && touched.age && <p className="text-xs text-red-600 flex justify-end w-full mt-[-7px]">{errors.age}</p>}
                        <div className="w-full flex justify-between my-3">
                            <label htmlFor="email"><span>Email</span></label>
                            <input 
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                id="email" type="email" placeholder="Enter Your Email"  
                                className={`text-center rounded-md ${errors.email && touched.email ? 'border-2 border-red-600' : ''}`}     
                            />
                        </div>
                        {errors.email && touched.email && <p className="text-xs text-red-600 flex justify-end w-full mt-[-7px]">{errors.email}</p>}
                        <div className="w-full flex justify-between my-3">
                            <label htmlFor="userName"><span>User Name</span></label>
                            <input 
                            value={values.userName} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            id="userName" type="text" placeholder="Enter Your User Name"
                            className={`text-center rounded-md ${errors.userName && touched.userName ? 'border-2 border-red-600' : ''}`}   
                            />
                        </div>
                        {errors.userName && touched.userName && <p className="text-xs text-red-600 flex justify-end w-full mt-[-7px]">{errors.userName}</p>}
                        <div className="w-full flex justify-between my-3">
                            <label htmlFor="password"><span>Password</span></label>
                            <input 
                                value={values.password} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                id="password" type="password" placeholder="Enter Your Password" 
                                className={`text-center rounded-md ${errors.password && touched.password ? 'border-2 border-red-600' : ''}`}  
                                />
                        </div>
                        {errors.password && touched.password && <p className="text-xs text-red-600 flex justify-end w-full mt-[-7px]">{errors.password}</p>}
                        <div className="w-full flex justify-between my-3">
                            <label htmlFor="confirmPassword"><span>Confirm Passwrod</span></label>
                            <input 
                            value={values.confirmPassword} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            id="confirmPassword" type="password" placeholder="Confirm Your Password" 
                            className={`text-center rounded-md ${errors.confirmPassword && touched.confirmPassword ? 'border-2 border-red-600' : ''}`} 
                            />
                        </div>
                        {errors.confirmPassword && touched.confirmPassword && <p className="text-xs text-red-600 flex justify-end w-full mt-[-7px]">{errors.confirmPassword}</p>}
                        <div className="w-full flex justify-evenly mt-7">
                            <button type="button" className="text-white w-[80px] h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all"
                                onClick={() => {
                                   localStorage.setItem('userName', values.userName)
                                   localStorage.setItem('password', values.password)
                                }}
                            >Submit</button>
                            <button type="reset" className="text-white w-[80px] h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all" onClick={resetForm}>Reset</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}
  
export default Registration;