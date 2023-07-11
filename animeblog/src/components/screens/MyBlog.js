import { useEffect, useState } from "react";
// import AllBlog from "./allBlog";
import axios from "axios";
import BlogCard from "./BlogCard";

export default function MyBlog() {
    const [blogs, setBlogs] = useState([]);

    // get user blog 
    const getUserBlog = async () => {
        try {
            const id = localStorage.getItem('userId');
            const { data } = await axios.get(`/api/blog/userblog/${id}`);
            if (data?.success) {
                setBlogs([data?.userBlog])
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserBlog();
    }, [])
    console.log(blogs);

    return (
        <>
            <div className="my-3">
                <h1 className="d-flex justify-content-center">My Blogs</h1>
                <hr />
            </div>
            {blogs.map(ob => <div>{ob.blogs.map(obj => <BlogCard
                title={obj.title}
                description={obj.description}
                image={obj.image}
                name={obj.name}
                id={obj._id}
                isUser={true}
            />)}</div>)}

        </>
    )
}