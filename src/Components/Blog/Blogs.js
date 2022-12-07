import React, { useEffect } from 'react';
import Blog from './Blog';
import { fetchBlogList } from "../../store/blog";
import { useSelector, useDispatch } from "react-redux"

const renderBloglist = (blogList) => {
    return (
        <>
            {blogList.map((blog, index) => (
                <Blog key={blog.id} index={index} blog={blog} />
            ))}
        </>
    )
}
const Blogs = () => {
    const dispatch = useDispatch();
    const { postList, isLoading } = useSelector(state => state.blog);
    
    useEffect(() => {
        dispatch(fetchBlogList())
    }, [])

    return (
        <div style={{ margin: '150px 150px' }}>
            {isLoading ? <h1> Loading...</h1> : (
                renderBloglist(postList)
            )}
        </div>
    )
}

export default Blogs;
