import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import Read from "./Read";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('/api/blog/allblog');
            if (data?.success) {
                setBlogs(data?.blogs)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, [])
    console.log(blogs);


    return (
        <div className="">
            <div className="my-3">
                <h1 className="d-flex justify-content-center">All Blogs</h1>
                <hr />
            </div>
            {blogs.map(ob => (<div ><BlogCard
                title={ob.title}
                description={ob.description}
                image={ob.image}
                name={ob.name}
                id={ob._id}
                isUser={localStorage.getItem('userId') === ob.user}

            /></div>))}

        </div>
    )
}