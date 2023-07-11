
import '../../custom.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/user/signup", {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password
            });
            console.log(data);
            if (data.success) {
                alert("user Registered");
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <div className="box1">
                        <label className="custom-boxbutton"  >Name</label>
                        <input type={"text"} value={inputs.name} onChange={handleChange} name="name" placeholder="Enter your Name" />
                    </div>
                    <div className="box1">
                        <label className="custom-boxbutton" >Email</label>
                        <input type={"email"} value={inputs.email} onChange={handleChange} name="email" placeholder="Enter your email" />
                    </div>
                    <div className="box1">
                        <label className="custom-boxbutton"  >Password</label>
                        <input type={"password"} value={inputs.password} onChange={handleChange} name="password" placeholder="Enter your Name" />
                    </div>

                    <div>
                        <button className="custom-login-button">Sign up</button>
                    </div>
                </div>
            </form>
        </>
    )
}