import {createStore} from "redux";

const displaynavbar = "displaynavbar";

export const DisplayNavbar = (data) => (
    {
        type: displaynavbar,
        data,
    }
)

const navbarReducer = (state = [], action) =>{
    if(action.type === displaynavbar){
        return action.data;
    }
    return state;
}

const Store = createStore(navbarReducer);
export default Store;