import { FaAddressBook } from "react-icons/fa";

const Blog = ({ blog, handleBookmark,handleMarkAsRead }) => {
    return (
        <div>
            <img className=" rounded-lg" src={blog.cover_photo} alt="" />
            <div className="flex justify-between my-5">
                <div className="flex gap-4">
                    <img className=" w-10 rounded-full" src={blog.author_img} alt="" />
                    <div>
                        <p className=" font-bold ">{blog.author_name}</p>
                        <p> <small> {blog.post_date}</small></p>
                    </div>
                </div>
                <div className="flex gap-2 align-middle">
                    <p><small>{blog.reading_time} Reading Time</small></p>
                    <div>
                    <button onClick={()=>handleBookmark(blog)}><FaAddressBook></FaAddressBook></button>
                    </div>

                </div>
            </div>
            <h2 className=" font-bold text-4xl my-5">Title{blog.title}</h2>
            <p><small>{blog.hashtag}</small></p>
            <button className="my-4 "><small className="font-bold" onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)}>Mark As Read</small></button>
            <hr className="border-gray-300 mb-4" />
        </div>
    );
};

export default Blog;