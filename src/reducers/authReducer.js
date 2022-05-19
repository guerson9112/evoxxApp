import { types } from "../types/types";

const initialState  = {
    uid: 123212143,
    name: 'Daniel'
}


export const authReducer = ( state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:

            return {}   
    
        default:
            return state;
    }


}