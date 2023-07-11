import axios from 'axios';
import '../../custom.css';
import { useState } from "react";
import { json, useNavigate } from 'react-router-dom';


export default function CreateBlog() {
    const id = localStorage.getItem("userId")
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [description, setdescription] = useState("")
    const [img, setImg] = useState("")
    const [url, setUrl] = useState("")

    const postDetail = () => {
        const formData = new FormData();
        formData.append("file", img)
        formData.append("upload_preset", "insta-clone")
        formData.append("cloud_name", "sankalpn")

        fetch("https://api.cloudinary.com/v1_1/sankalpn/image/upload", {
            method: "post",
            body: formData
        })
            .then((res) => res.json())
            .then(data => setUrl(data.url))

        fetch("/api/blog/createblog", {
            method: "post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                title,
                description,
                image: url,
                user: id,
            })
        }).then(res => res.json())
            .then(data => {
                setUrl(data.url)
                if (data.success) {
                    alert('blog created')
                    navigate('/blog')
                }
            })

    }

    return (
        <>
            <div className="my-3">
                <h1 className="d-flex justify-content-center">Create Blog</h1>
                <hr />
            </div>
            <>
                <div className='container' style={{ width: "60%", marginTop: "2rem" }}>
                    <div className="input-group mb-3">
                        <input type='file' onChange={(e) => {
                            setImg(e.target.files[0])
                        }} name="image" className="form-control" id="inputGroupFile02" />
                        <label className="input-group-text">Upload</label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} name="title" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" value={description} onChange={(e) => setdescription(e.target.value)} name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type={"submit"} name="action"
                            onClick={() => postDetail()} className="custom-login-button ">submit</button>
                    </div>
                </div>
            </>
        </>
    )

}