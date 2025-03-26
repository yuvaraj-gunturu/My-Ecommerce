import { createContext } from "react";
import { products } from "../assets/assets";

 export const Shopcontext = createContext();

const Shopcontextprovider = (props) => {

    const currency = "₹";
    const shippingCost = 10;
    
        const value = {
            products,currency,shippingCost
        }
        return (
            <Shopcontext.Provider value={value}>
                {props.children}
            </Shopcontext.Provider>
        )

}

export default Shopcontextprovider