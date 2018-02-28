import {UPDATE_USER} from '../actions/customer-action';

export default function customerReducer(state='', {type, payLoad}) {
    console.log("User REDUCER file called");
    switch (type){
        case UPDATE_USER :
            return payLoad.user;
        default:
            return state;
    }   
}