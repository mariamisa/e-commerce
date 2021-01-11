import { useReducer } from "react";

const INITIAL_STATE={
    currentUser:null
}

//function get the state object and the action dependent what the type of action is will return /make something
const userReducer=(state = INITIAL_STATE ,action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payload
            }


        default:
            return state;

    }
}

export default userReducer;