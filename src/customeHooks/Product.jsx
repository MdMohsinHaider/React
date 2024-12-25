import React from 'react'
import { useApi } from './useApi'

const Product = () => {

    let data = useApi("https://jsonplaceholder.typicode.com/posts");
    console.log(data);

    return (
        <div>
        
        </div>
    )
}
export default Product
