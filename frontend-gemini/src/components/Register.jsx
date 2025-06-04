import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        city: ''
    })

    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        // validation
        if (formData.name == '' || formData.email == '' || formData.password == '' || formData.dob == '' || formData.city == '') {
            alert('📌Fill all the fields');
            return;
        }

        if (formData.password != confirmPassword) {
            alert(' ❌Password and confirm password should be same!');
            return
        }

        // post req with axios
        try {
            // const res = await axios.post('http://localhost:3000/api/v1/auth/register', formData)
            const res = await axios.post('https://gemini-clone-backend-z3g9.onrender.com/api/v1/auth/register', formData)
            alert(res.data.message);
            if (res.data.status == 'success') {
                navigate('/login');
            }
        } catch (err){
            console.log('ERROR: ' + err.message)
        }
    }

    return (
       <div className='flex justify-around items-center m-15 rounded-2xl shadow-2xl border '>

      <div>
          <img src="https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-938.jpg" alt="" />
      </div>
            <form action="" onSubmit={handleSubmitForm} className=' p-5 '>
                <h1 className='multicolor-text text-3xl p-2 text-center mb-3 font-bold font-serif' >Create An Account</h1>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter Name</label><br />
                    <input type="name" name="name"  placeholder='Enter Name' className='text-xl border-2 rounded-lg px-6 p-1'
                        onChange={handleChange} value={formData.name} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter Email</label><br />
                    <input type="email" name="email"  placeholder='Enter email' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.email} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter DOB</label><br />
                    <input type="date" name="dob"  placeholder='Enter DOB' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.dob} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter City</label><br />
                    <input type="text" name="city"  placeholder='Enter City' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.city} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Enter Password</label><br />
                    <input type="password" name="password"  placeholder='******' className='text-xl border-2 rounded-lg px-6 p-1' onChange={handleChange} value={formData.password} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='text-gray-400'>Confirm Password</label><br />
                    <input type="password" name="password"  placeholder='******' className='text-xl border-2 rounded-lg px-6 p-1' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>

                <div className="mb-2 flex justify-center">
                    <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 px-5 text-xl rounded-lg cursor-pointer'>Register</button>
                </div>

                <p className='text-blue-600 cursor-pointer  text-m hover:text-purple-600'><Link to= "/login">Already an User ...? Sign in</Link></p>


            </form>
        </div>
    )
}


export default Register