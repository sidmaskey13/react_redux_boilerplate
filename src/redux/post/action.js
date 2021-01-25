import axios from 'axios'
import { GET_POSTS } from './type'

export const getPosts = () => (dispatch,getState) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>
        {    
            console.log(res.data)
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })}
        ).catch(err=>{
        console.log('Cant fetch posts')
    })
};
