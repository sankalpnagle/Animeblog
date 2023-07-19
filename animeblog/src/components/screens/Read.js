
import '../../custom.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export default function Read() {
    const [blog, setBlog] = useState([]);
    const id = useParams().id;
    const [readAll, readAllSet] = useState([]);
    const blogRead = async () => {
        try {
            const { data } = await axios.get(`/api/blog/getblog/${id}`);
            if (data?.success) {
                setBlog([data.blog])
                console.log(data.readAllSet);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const readAllBlog = async () => {
        try {
            const { data } = await axios.get('/api/blog/allblog');
            if (data?.success) {
                readAllSet(data?.blogs)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        blogRead();
        readAllBlog();
    }, [id])
    return (
        <div>
            {blog.map(ob => <div style={{ overflow: "auto" }}>
                <div className='container mt-5'>
                    <div id="carouselExampleDark" className="carousel carousel-dark " >
                        <div className="carousel-inner" >
                            <div className="carousel-item active" style={{ height: "17rem", }}>
                                <img src={ob.image} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block" >
                                    <h1 style={{ color: "white", letterSpacing: "1rem", fontSize: "4rem" }}>{ob.title}</h1>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3' >
                        <h3 style={{ letterSpacing: "5px" }}>Chapter 1</h3>
                        <hr />
                    </div> <div style={{ height: "23rem" }}>
                        <p className='mt-2 text-justify align-center text-wrap' style={{ height: "25", overflow: "auto", fontSize: "1vw" }} >
                            {ob.description}
                        </p>
                    </div>
                    <hr />


                </div>

            </div >)}
            <div className='container d-flex flex-row-reverse' style={{ height: "10rem" }}>
                <h3 className="p-2" style={{ letterSpacing: "5px" }}>Chapter 1</h3>
                <i className="fa-solid fa-circle-arrow-right p-3 " style={{ fontSize: "30px" }}></i>
            </div>
            <h3 className='container'>Short Reads</h3>
            <div className='container d-flex flex-row-reverse'>
                <i className="fa-solid fa-circle-arrow-right p-2 " style={{ fontSize: "30px", marginTop: "-47px" }}></i>
                <i className="fa-solid fa-circle-arrow-left p-2" style={{ fontSize: "30px", marginTop: "-47px" }}></i>
            </div>
            <hr style={{ marginTop: "0px" }} />
            <div className='container my-5' style={{ height: "17rem" }} >
                <div className='d-flex flex-row bd-highlight mb-3'>
                    {readAll.map(ob => <Link style={{ textDecoration: "none " }} to={`/blog/`}> <div class="card p-2 mx-3 custom-card " style={{ border: " none", maxWidth: "540px", maxWidth: "324px", maxHeight: "128px", display: "block" }}>
                        <div class="row g-0 d-flex">
                            <div class="col-md-4">
                                <img src={ob.image} style={{ height: "121px", objectFit: "cover" }} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body" style={{ margin: "0px", padding: "0px 15px" }}>
                                    <h5 class="card-title" style={{ styleFontSize: "18px" }}>{ob.title}</h5>
                                    <p class="card-text">{ob.description}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div></Link>)}
                </div>
            </div>

        </div>


    )
}