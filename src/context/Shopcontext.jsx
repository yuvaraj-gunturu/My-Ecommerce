import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

 export const Shopcontext = createContext();

const Shopcontextprovider = (props) => {

    const currency = "₹";
    const shippingCost = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(true);
    
        const value = {
            products,currency,shippingCost,
            search,setSearch,showSearch,setShowSearch
        }
        return (
            <Shopcontext.Provider value={value}>
                {props.children}
            </Shopcontext.Provider>
        )

}

export default Shopcontextprovider