const card = [];

const handleCart = (state = card, action)=>{
    const product = action.payload ;
    switch (action.type){
        case "ADDITEM":
            // check if product is alreay exits
            const exits = state.find(p=>p.id === product.id)
            if(exits){
                // Increase the quantity
                return state.map(p=>
                    p.id === product.id?{...p,qty:p.qty + 1}: p
                )
            }else{
                const product = action.payload;
                return[
                    ...state,
                    { ...product,qty:1 }
                ]
            }
            break;
            case "DELITEM":
            const exist1 = state.find(x=> x.id === product.id );
            if(exist1.qty === 1){
                return state.filter(p=> p.id !== product.id);
            }else{
                return state.map(p=> 
                    p.id === product.id ? { ...p, qty: p.qty-1} : p
                    )
            }
            break;
            default:
                return state;
            break;

    }

}

export default handleCart;