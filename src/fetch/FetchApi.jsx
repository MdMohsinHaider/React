import React, { useEffect, useState } from 'react';

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
        <div>
            {
                dbData?.map((ele)=>{
                    return(
                        <section key={ele.id}>
                            <h1>{}</h1>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default FetchApi;
