import {useEffect, useState} from "react";

const useApi = (API_URL)=>{
    let [data, setData] = useState(null);

    useEffect(()=>{
        async function fetchApi() {
            try {
                let resp = await fetch(API_URL);
                let data = await resp.json();
                
                setData(data);
            } catch (error) {
                console.log(error);
                setData({message:"something went wron"});
            }
        }
        fetchApi();
    },[API_URL]);
    return data;
};

export {useApi};