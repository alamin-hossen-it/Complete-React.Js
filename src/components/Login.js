import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react'; // 👈 for icon
import { IoEye, IoEyeOff } from "react-icons/io5";
import loginSchema from '../zod/loginSchema';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
 


//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

    const changeHandler =(e)=>{
       const name = e.target.name;
       const value = e.target.value;

       setFormData({...formData, [name]:value})
   
    }

  return (
    <div className="flex items-center justify-center w-full h-[83vh] bg-[#f0f0f0f0]">
      
      <form onSubmit={(e)=>{
        e.preventDefault()
        
        
     const result = loginSchema.safeParse(formData);
         if (!result.success) {
                const errorField = result.error.formErrors.fieldErrors;
                console.log(errorField)
                  setError(errorField);
                  return;
             }
            
             // Start api call
       
        //clear form data after submit
        setFormData({email:'', password:''})
      }}
     
      className="flex flex-col gap-10 bg-white p-10 rounded-lg shadow-2xl w-[40%]">
        <h1 className='flex justify-center items-center font-bold text-2xl'>Login Please</h1>
        {/* Email */}
       <div className='flex flex-col'>
         <input value={formData.email} name='email' onChange={changeHandler} 
          className="border border-gray-500 px-3 py-2 rounded-md"
          type="email" 
          placeholder="Enter Your Email" 
        />
        <span className='text-xs text-red-600'>{error && error.email}</span>

       </div>
        {/* Password */}
        <div className="relative">
          <input value={formData.password} name='password' onChange={changeHandler}
            className="border border-gray-500 px-3 py-2 rounded-md w-full pr-10"
            type={showPassword ? 'text' : 'password'} 
            placeholder="Enter Your Password"
          />
             <span className='text-xs text-red-600'>{error && error.password}</span>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-600"
          >
            {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </button>
        </div>

        {/* Login Button */}
        <button className="border bg-blue-500 px-3 py-2 rounded-md text-white font-bold shadow-2xl hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
