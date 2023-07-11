import { Link } from "react-router-dom";
import '../custom.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { authActions } from "./store";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    //Global State
    const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //
    const handlelogout = () => {
        try {
            dispatch(authActions.logout())
            alert('Logout Successfully')
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }
    const [value, setValue] = useState();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "white", color: "black" }} >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse container navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                            {isLogin && (<>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link  " to="blog">Blog</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link  " to="myblog">My Blog</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link  " to="createblog">Create Blog</Link>
                                </li>
                            </>)}
                            {!isLogin && (<>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link custom-navbutton" style={{ borderRadius: "3px", color: "white" }} to="signup">Signup</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>
                            </>)}
                            {isLogin && (<li className="nav-item mx-3">
                                <button className="nav-link custom-navbutton" onClick={handlelogout}
                                    style={{ borderRadius: "3px", color: "white", width: "88px" }}>Sign out</button>
                            </li>)}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}