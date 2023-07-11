import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditBlog() {

    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();
    const id = useParams().id;
    const [inputs, setInputs] = useState({})
    const editBlog = async () => {
        try {
            const { data } = await axios.get(`/api/blog/getblog/${id}`);
            if (data?.success) {
                setBlog(data?.blog)
                setInputs({
                    title: data.blog.title,
                    description: data.blog.description,
                    image: data.blog.image
                })
            }
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        editBlog();
    }, [id])
    console.log(blog);

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        try {
            const { data } = await axios.put(`/api/blog/updateblog/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id,

            });
            if (data.success) {
                alert('blog updated')
                navigate('/blog')
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <>
                <div className='container' style={{ width: "60%", marginTop: "2rem" }}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type={"text"} value={inputs.title} onChange={handleChange} name="title" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type={"text"} value={inputs.description} onChange={handleChange} name="description" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type={"text"} value={inputs.image} onChange={handleChange} name="image" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    {/* <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Image</label>
                            <textarea className="form-control" value={inputs.image} onChange={handleChange} name="image" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> */}
                    <div>
                        <button type={"submit"} className="custom-login-button">submit</button>
                    </div>
                </div>
            </>
        </form>
    </>)
}