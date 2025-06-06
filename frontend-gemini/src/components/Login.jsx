import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../features/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { getChatsofUser } from '../services/servics'
import { setChats } from '../features/chatSlice'
const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // post req to validate user
        try {
            // const res = await axios.post('http://localhost:3000/api/v1/auth/login', formData)
            const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/login', formData)

            alert(res.data.message);
            if (res.data.status == 'success') {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.data || {}));
                const userData = {
                    user: res.data.data,
                    token: res.data.token
                }
                dispatch(setUserData(userData))

                const userChats = await getChatsofUser();
                dispatch(setChats(userChats))

                navigate('/new-chat')
            } else {
                navigate('/login')
            }
        } catch (err) {
            console.log('ERROR: ' + err.message)
            navigate('/login')

        }
    }

    return (
        <div className="flex justify-around mt-5 items-center rounded-2xl overflow-auto flex-wrap shadow-2xl p-7 py-10">

            <div className='w-130'>
          <img src="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?semt=ais_items_boosted&w=740" alt="" />
      </div>

            <form onSubmit={handleSubmitForm} className='p-7 py-10 '>

                <h1 className="multicolor-text text-4xl p-2 text-center mb-7 font-bold font-serif">Login Form</h1>

                <div className="mb-5">
                    <label className="text-gray-400">Enter Email</label><br />
                    <input type="email" name="email" className="text-xl border-2 rounded-lg p-2" placeholder="abc@gmail.com" onChange={handleChange} value={formData.email} />
                </div>
                <div className="mb-5">
                    <label className="text-gray-400">Enter Password</label><br />
                    <input type="password" name="password" className="text-xl border-2 rounded-lg p-2" placeholder="******" onChange={handleChange} value={formData.password} />
                </div>

                <div className="mb-5 flex justify-center">
                    <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 px-5 text-2xl rounded-lg cursor-pointer">Login</button>
                </div>

                <p className='text-blue-600 cursor-pointer  text-m hover:text-purple-600'><Link to= "/register">Not a User ? Sign Up...!</Link></p>
            </form>
              {/* <div>
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?semt=ais_hybrid&w=740" alt="" />
      </div> */}
        </div>
        /*
         <div className='flex justify-center items-center h-screen  '>
       <form action="" onSubmit={handleSubmitForm} className=' p-7 py-10 rounded-2xl shadow-2xl'>
        <h1 className='multicolor-text text-4xl p-2 text-center mb-7 font-bold font-serif' >User Login</h1>
        <div className='mb-5'>
            <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
             <input type="email" name="email" id="" placeholder='Enter Email' className='text-2xl border-2 rounded-lg p-2'
             onChange={handleChange} value={formData.email} />
        </div> 
        <div className='mb-5'>
            <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
             <input type="password" name="password" id="" placeholder='Enter Password'  className='text-2xl border-2 rounded-lg p-2' onChange={handleChange} value={formData.password}/>
        </div>
        <div className="mb-5 flex justify-center">
            <button type="button" className='bg-cyan-500 hover:bg-cyan-600 px-5 text-2xl rounded-lg cursor-pointer'>Login</button>
        </div>
       </form>
    </div>*/
    )
}


export default Login