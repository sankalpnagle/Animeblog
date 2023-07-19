import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function BlogCard({
    title,
    description,
    image,
    username,
    id,
    userId,
    isUser

}) {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/edit/${id}`)
    };

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`api/blog/deleteblog/${id}`)
            if (data?.success) {
                alert('Blog Delete')
                navigate('/myblog')
                window.location.reload();
            }
        } catch (error) {

        }
    }
    const handleMore = async () => {
        navigate(`/${id}`)
    }

    return (
        <div>
            <div className=' d-flex justify-content-center "' >
                <div className="card" style={{ width: "40rem", marginBottom: "20px" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{ height: "174px", overflow: "hidden" }}>{description}</p>
                        <div className='d-flex'>
                            <button onClick={handleMore} className="btn btn-primary">more</button>
                            {isUser && (<>
                                <i style={{ marginLeft: "27rem" }} onClick={handleDelete} className="fa-sharp fa-solid fa-trash" ></i>
                                <i onClick={handleEdit} className="fa-solid fa-pen-to-square px-4"></i>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}