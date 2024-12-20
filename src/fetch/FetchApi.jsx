import React, { useEffect, useState } from 'react';
import style from "./fetchApi.module.css";

function FetchApi() {

    let [dbData,setDbData] = useState(null);


    useEffect(()=>{
        async function fetchApi() {
            let res = await fetch("https://fakestoreapi.com/products");
            let data =await res.json();
            // console.log(data);
            setDbData(data);
        }
        fetchApi();
    },[]);

    console.log(dbData);

    // https://fakestoreapi.com/products




    return (
        <div className={style.usersContainer}>
            <table className={style.productTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele) => {
                        let { category, description, id, image, price, rating, title } = ele;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{category}</td>
                                <td>{description}</td>
                                <td>
                                    <img src={image} alt={title} style={{ width: "100px", height: "80px" }} />
                                </td>
                                <td>${price.toFixed(2)}</td>
                                <td>{rating?.rate} ({rating?.count} reviews)</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchApi;
