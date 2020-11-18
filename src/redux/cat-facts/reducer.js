import {GET_CAT_FACTS} from "./type";

const initialState = {
    catFacts: [
        { id: 1, 'text': 'Cats has 4 legs' },
        { id: 2, 'text': 'Cats has 1 tail' },
    ]
};

const CatFactsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAT_FACTS:
        return{
            ...state,
            catFacts: action.payload
            }
        default:
            return state
    }
}

export default CatFactsReducer
