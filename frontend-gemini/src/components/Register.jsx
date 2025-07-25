// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// const Register = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         dob: '',
//         city: ''
//     })

//     const [confirmPassword, setConfirmPassword] = useState('')
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmitForm = async (e) => {
//         e.preventDefault();

//         // validation
//         if (formData.name == '' || formData.email == '' || formData.password == '' || formData.dob == '' || formData.city == '') {
//             alert('📌Fill all the fields');
//             return;
//         }

//         if (formData.password != confirmPassword) {
//             alert(' ❌Password and confirm password should be same!');
//             return
//         }

//         // post req with axios
//         try {
//             // const res = await axios.post('http://localhost:3000/api/v1/auth/register', formData)
//             const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/register', formData)
//             alert(res.data.message);
//             if (res.data.status == 'success') {
//                 navigate('/login');
//             }
//         } catch (err){
//             console.log('ERROR: ' + err.message)
//         }
//     }

//     return (
//        <div className='flex flex-wrap justify-around items-center mt-5 overflow-auto rounded-2xl shadow-2xl border '>

//       <div className='w-170'>
//           <img src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-picture-image_7929949.png" alt="" />
//       </div>
//             <form action="" onSubmit={handleSubmitForm} className=' p-5 '>
//                 <h1 className='multicolor-text text-3xl p-2 text-center mb-3 font-bold font-serif' >Create An Account</h1>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Name</label><br />
//                     <input type="name" name="name"  placeholder='Enter Name' className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange} value={formData.name} />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
//                     <input type="email" name="email"  placeholder='Enter email' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.email} />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter DOB</label><br />
//                     <input type="date" name="dob"  placeholder='Enter DOB' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.dob} />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter City</label><br />
//                     <input type="text" name="city"  placeholder='Enter City' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.city} />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Password</label><br />
//                     <input type="password" name="password"  placeholder='******' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.password} />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Confirm Password</label><br />
//                     <input type="password" name="password"  placeholder='******' className='text-xl border-2 rounded-lg px-6 p-1' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
//                 </div>

//                 <div className="mb-2 flex justify-center">
//                     <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 px-5 text-xl rounded-lg cursor-pointer'>Register</button>
//                 </div>

//                 <p className='text-blue-600 cursor-pointer  text-m hover:text-purple-600'><Link to= "/login">Already an User ...? Sign in</Link></p>


//             </form>
//         </div>
//     )
// }


// export default Register

// import axios from 'axios'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         dob: '',
//         city: ''
//     })
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [isLoading, setIsLoading] = useState(false)
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmitForm = async (e) => {
//         e.preventDefault()
//         // validation
//         if (formData.name === '' || formData.email === '' || formData.password === '' || formData.dob === '' || formData.city === '') {
//             alert('📌 Fill all the fields')
//             return
//         }

//         if (formData.password !== confirmPassword) {
//             alert('❌ Password and confirm password should be same!')
//             return
//         }

//         // post req with axios
//         try {
//             setIsLoading(true)
//             const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/register', formData)
//             alert(res.data.message)
//             if (res.data.status === 'success') {
//                 navigate('/login')
//             }
//         } catch (err) {
//             console.log('ERROR: ' + err.message)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return (
//         <div className='flex flex-wrap justify-around items-center mt-5 overflow-auto rounded-2xl shadow-2xl border'>
//             <div className='w-170'>
//                 <img src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-picture-image_7929949.png" alt="" />
//             </div>
//             <form action="" onSubmit={handleSubmitForm} className='p-5'>
//                 <h1 className='multicolor-text text-3xl p-2 text-center mb-3 font-bold font-serif'>Create An Account</h1>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Name</label><br />
//                     <input type="text" name="name" placeholder='Enter Name' className='text-xl border-2 rounded-lg px-6 p-1'
//                         onChange={handleChange} value={formData.name} />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
//                     <input type="email" name="email" placeholder='Enter email' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.email} />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter DOB</label><br />
//                     <input type="date" name="dob" placeholder='Enter DOB' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.dob} />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter City</label><br />
//                     <input type="text" name="city" placeholder='Enter City' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.city} />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Enter Password</label><br />
//                     <input type="password" name="password" placeholder='******' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.password} />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor="" className='text-gray-400'>Confirm Password</label><br />
//                     <input type="password" name="confirmPassword" placeholder='******' className='text-xl border-2 rounded-lg px-6 p-1' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
//                 </div>

//                 <div className="mb-2 flex justify-center">
//                     <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 px-5 text-xl rounded-lg cursor-pointer' disabled={isLoading}>
//                         {isLoading ? (
//                             <div className="flex items-center justify-center">
//                                 <div className="w-6 h-6 border-4 border-t-transparent border-cyan-200 rounded-full animate-spin"></div>
//                                 <span className="ml-2">Registering...</span>
//                             </div>
//                         ) : (
//                             'Register'
//                         )}
//                     </button>
//                 </div>

//                 <p className='text-blue-600 cursor-pointer text-m hover:text-purple-600'>
//                     <Link to="/login">Already an User ...? Sign in</Link>
//                 </p>
//             </form>
//         </div>
//     )
// }

// export default Register


import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        city: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // Validation
        if (formData.name === '' || formData.email === '' || formData.password === '' || formData.dob === '' || formData.city === '') {
            alert('📌 Fill all the fields');
            return;
        }

        if (formData.password !== confirmPassword) {
            alert('❌ Password and confirm password should be same!');
            return;
        }

        // Post request with Axios
        try {
            setIsLoading(true);
            const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/register', formData);
            alert(res.data.message);
            if (res.data.status === 'success') {
                navigate('/login');
            }
        } catch (err) {
            alert('Error: Unable to register. Please check your network or try again later.');
            console.error('Registration error:', err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='relative flex flex-wrap justify-around items-center mt-5 overflow-auto rounded-2xl shadow-2xl border'>
            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12  border-t-transparent bg-pink-700 rounded-full animate-bounce"></div>
                        <span className="ml-4 bg-gradient-to-br font-bold font-mono from-red-800 via-indigo-800 to-red-600 bg-clip-text text-transparent p-2 text-5xl ">Registering...</span>
                    </div>
                </div>
            )}

            <div className='w-170'>
                <img src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-picture-image_7929949.png" alt="" />
            </div>
            <form action="" onSubmit={handleSubmitForm} className='p-5'>
                <h1 className='multicolor-text text-3xl p-2 text-center mb-3 font-bold font-serif'>Create An Account</h1>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter Name</label><br />
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter Name'
                        className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter email'
                        className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter DOB</label><br />
                    <input
                        type="date"
                        name="dob"
                        placeholder='Enter DOB'
                        className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={handleChange}
                        value={formData.dob}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter City</label><br />
                    <input
                        type="text"
                        name="city"
                        placeholder='Enter City'
                        className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={handleChange}
                        value={formData.city}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter Password</label><br />
                    <input
                        type="password"
                        name="password"
                        placeholder='******'
                        className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Confirm Password</label><br />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder='******'
                        className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>

                <div className="mb-2 flex justify-center">
                    <button
                        type="submit"
                        className='bg-cyan-500 hover:bg-cyan-600 px-5 text-xl rounded-lg cursor-pointer'
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="w-6 h-6 border-4 border-t-transparent border-cyan-200 rounded-full animate-spin"></div>
                                <span className="ml-2">Registering...</span>
                            </div>
                        ) : (
                            'Register'
                        )}
                    </button>
                </div>

                <p className='text-blue-600 cursor-pointer text-m hover:text-purple-600'>
                    <Link to="/login">Already an User ...? Sign in</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;