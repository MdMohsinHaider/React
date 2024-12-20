import React, { useEffect, useState } from 'react'

const FetchApi4 = () => {

    let [dbData, setDbData] = useState(null);

    useEffect(()=>{
        let fun = async () => {
            let resp =await fetch("https://jsonplaceholder.typicode.com/photos");
            let data = await resp.json();
            console.log(data);
            setDbData(data);            
        }
        fun();
    },[]);

    // Inline CSS styles
    const containerStyle = {
        margin: '20px auto',
        padding: '10px',
        maxWidth: '1200px',
        overflowX: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(45deg, #e3ffe7, #d9e7ff)',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        background: 'white',
    };

    const headerStyle = {
        background: 'linear-gradient(45deg, #007bff, #0056b3)',
        color: 'white',
    };

    const thTdStyle = {
        padding: '10px',
        border: '1px solid #ddd',
    };

    const oddRowStyle = {
        background: '#f9f9f9',
    };

    const evenRowStyle = {
        background: '#e6f7ff',
    };

    const hoverStyle = {
        background: '#d1e7dd',
    };

    return (
        <div style={containerStyle}>
            <table style={tableStyle}>
                <thead style={headerStyle}>
                    <tr>
                        <th style={thTdStyle}>Album ID</th>
                        <th style={thTdStyle}>ID</th>
                        <th style={thTdStyle}>Title</th>
                        <th style={thTdStyle}>URL</th>
                        <th style={thTdStyle}>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele, index) => {
                        const { albumId, id, title, url, thumbnailUrl } = ele;
                        const rowStyle = index % 2 === 0 ? evenRowStyle : oddRowStyle;
                        return (
                            <tr
                                key={id}
                                style={rowStyle}
                                onMouseOver={(e) => (e.currentTarget.style.background = hoverStyle.background)}
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.background = index % 2 === 0
                                        ? evenRowStyle.background
                                        : oddRowStyle.background)
                                }
                            >
                                <td style={thTdStyle}>{albumId}</td>
                                <td style={thTdStyle}>{id}</td>
                                <td style={thTdStyle}>{title}</td>
                                <td style={thTdStyle}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                        {url}
                                    </a>
                                </td>
                                <td style={thTdStyle}>
                                    <img src={thumbnailUrl} alt={title} style={{ width: '50px', height: '50px' }} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchApi4