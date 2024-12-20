import React, { useEffect, useState } from 'react'

const FetchApi3 = () => {

    let [dbData,setDbData] = useState(null);

    useEffect(()=>{
        async function featchApi3() {
            let resp = await fetch("https://jsonplaceholder.typicode.com/albums");
            let data = await resp.json();
            console.log(data);
            setDbData(data);
        }
        featchApi3();
    },[]);

    // Inline CSS styles
    const containerStyle = {
        margin: '20px auto',
        padding: '10px',
        maxWidth: '800px',
        overflowX: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(45deg, #ffe6e6, #e6f3ff)',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        background: 'white',
    };

    const headerStyle = {
        background: 'linear-gradient(45deg, #ff7f50, #ff4500)',
        color: 'red',
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
        background: '#ffeeba',
    };

    return (
        <div style={containerStyle}>
            <table style={tableStyle}>
                <thead style={headerStyle}>
                    <tr>
                        <th style={thTdStyle}>User ID</th>
                        <th style={thTdStyle}>ID</th>
                        <th style={thTdStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele, index) => {
                        const rowStyle = index % 2 === 0 ? evenRowStyle : oddRowStyle;
                        return (
                            <tr
                                key={ele.id}
                                style={rowStyle}
                                onMouseOver={(e) => (e.currentTarget.style.background = hoverStyle.background)}
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.background = index % 2 === 0
                                        ? evenRowStyle.background
                                        : oddRowStyle.background)
                                }
                            >
                                <td style={thTdStyle}>{ele.userId}</td>
                                <td style={thTdStyle}>{ele.id}</td>
                                <td style={thTdStyle}>{ele.title}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchApi3
