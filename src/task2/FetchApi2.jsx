import React, { useEffect, useState } from 'react'

export default function FetchApi2() {

    let [dbData, setDbData] = useState(null);

    useEffect(()=>{
        async function fetchApi2() {
            let res = await fetch("https://jsonplaceholder.typicode.com/comments");
            let data = await res.json();
            console.log(data);
            setDbData(data);
        }
        fetchApi2();
    })

    return (
        <div style={{ margin: '20px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: '#f9f9f9' }}>
                <thead style={{ backgroundColor: '#007bff', color: 'black' }}>
                    <tr>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Post ID</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele) => {
                        let { postId, id, name, email, body } = ele;
                        return (
                            <tr key={id}>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{postId}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{id}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{name}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{email}</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
