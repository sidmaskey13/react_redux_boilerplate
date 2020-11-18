import axios from 'axios'
import { GET_CAT_FACTS } from './type'

export const getFacts = () => (dispatch,getState) => {
    axios.get('https://cat-fact.herokuapp.com/facts')
        .then(res =>
        {    
            console.log(res.data)
            dispatch({
                type: GET_CAT_FACTS,
                payload: res.data.all
            })}
        ).catch(err=>{
        console.log('Cant fetch facts')
    })
};
