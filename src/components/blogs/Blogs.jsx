import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleBookmark ,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </>
    );
};

export default Blogs;
