import { Link } from "react-router-dom";
import '../../custom.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authActions } from "../store";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/user/login", {
                email: inputs.email,
                password: inputs.password
            });
            console.log(data);
            if (data.success) {
                localStorage.setItem("userId", data?.users._id);
                dispatch(authActions.login())
                alert("user Login successful");
                navigate('/blog')
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
                        <label className="custom-boxbutton" htmlFor="email">Email</label>
                        <input type={"text"} value={inputs.email} onChange={handleChange} name="email" placeholder="Enter your email" />
                    </div>
                    <div className="box1">
                        <label className="custom-boxbutton" htmlFor="password ">Password</label>
                        <input type={"text"} value={inputs.password} onChange={handleChange} name="password" placeholder="Enter your password" />
                    </div>

                    <div>
                        <button className="custom-login-button">Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}