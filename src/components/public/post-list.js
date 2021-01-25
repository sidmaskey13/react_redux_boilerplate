import React, {useEffect, useState} from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post/action";
import { Pagination } from 'semantic-ui-react'

function PostList() {
    const posts = useSelector(state => state.post.posts)
    const [currentPage, setCurrentPage] = useState(1);
    const [showPerPage] = useState(10);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const indexOfLastData = currentPage * showPerPage;
    const indexOfFirstData = indexOfLastData - showPerPage;
    const currentData = posts.slice(indexOfFirstData, indexOfLastData)

    const handlePaginationChange = (e, { activePage }) => setCurrentPage(activePage);
        return (
            <div>
                <h1>All Posts</h1>
                <Pagination
                    defaultActivePage={1}
                    totalPages={Math.ceil(posts.length / showPerPage)}
                    onPageChange={handlePaginationChange}
                    activePage={currentPage}
                />
                <ul className="list-group">
                    {posts ? currentData.map(post => (
                        <li key={post.id} className="list-group-item">{post.title}</li>
                    )) : "Not Found"}
                </ul>  
            </div>
        )   
}

export default PostList;