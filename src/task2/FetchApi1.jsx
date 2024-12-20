import { useEffect, useState } from "react"
import style from "./fetchApi.module.css"
export default function FetchApi1() {

    let [dbData, setDbData] = useState(null);

    useEffect(()=>{
        async function fetchApi1() {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
            console.log(data);
            setDbData(data);
        }
        fetchApi1();
    },[]);

    console.log(dbData);
    

    return (
        
        <div className={style.usersContainer}>
            <table className={style.dataTable}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele) => {
                        let { userId, id, title, body } = ele;
                        return (
                            <tr key={id}>
                                <td>{userId}</td>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
