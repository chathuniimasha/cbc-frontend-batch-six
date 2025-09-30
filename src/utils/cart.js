export function getCart(){
    let cartInString = localStorage.getItem("cart");

    if(cartInString == null){
        cartInString = "[]";
        localStorage.setItem("cart",cartInString);
    }

    const cart = JSON.parse(cartInString);
    return cart;
}

export function addToCart(product,qty){
 
    const cart = getCart();
    const existingProductIndex = cart.findIndex((item)=>{
        return item.productId === product.productId;
    })

    if(existingProductIndex == -1){
        cart.push(
            {
                productId: product.productId,
                quantity: qty,
                price: product.price,
                name: product.name,
                altNames: product.altNames,
                image: product.images[0]
            }
        )
        localStorage.setItem("cart",JSON.stringify(cart));
    }else{
        const newQty = cart[existingProductIndex].quantity + qty;
        if(newQty <= 0){
            const newCart = cart.filter((item,index)=>{
                return index !== existingProductIndex;
            })
            localStorage.setItem("cart",JSON.stringify(newCart));
        }else{
            cart[existingProductIndex].quantity = newQty;
            localStorage.setItem("cart",JSON.stringify(cart));
        }
    }
}


export function getTotal(){
    const cart = getCart();
    let total = 0;
    cart.forEach((item)=>{
        total += item.quantity * item.price;
    })
    return total;
}