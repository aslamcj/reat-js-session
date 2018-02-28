
export function updateProducts(newlist) {
    console.log("Product ACTION triggered", newlist);
    return {
        type: 'upproductlist',
        payLoad : {
            products : newlist
        }
    }
}