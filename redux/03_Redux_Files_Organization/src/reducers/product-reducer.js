export default function productReducer(state=[], {type, payLoad}) {
    console.log("User REDUCER file called");
    switch (type){
        case 'upproductlist' :
            return payLoad.products;
        default:
            return state;
    }   
}