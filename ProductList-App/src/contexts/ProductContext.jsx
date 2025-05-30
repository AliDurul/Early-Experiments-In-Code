import { createContext, useState } from "react";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [data, setData] = useState()

    const values = {
        data,
        setData
    }

    return(
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )
}




export default ProductContext;
