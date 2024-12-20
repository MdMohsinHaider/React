import React, { useEffect, useState } from 'react'

const FetchApi5 = () => {

    let [dbData , setDbData] = useState(null);

    useEffect(()=>{
        let fun = async () => {
            let resp = await fetch("https://jsonplaceholder.typicode.com/todos");
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
        maxWidth: '800px',
        overflowX: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(45deg, #fef9c3, #fde68a)',
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
        background: 'linear-gradient(45deg, #34d399, #059669)',
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
        background: '#d1fae5',
    };

    const hoverStyle = {
        background: '#fef3c7',
    };

    return (
        <div style={containerStyle}>
            <table style={tableStyle}>
                <thead style={headerStyle}>
                    <tr>
                        <th style={thTdStyle}>User ID</th>
                        <th style={thTdStyle}>ID</th>
                        <th style={thTdStyle}>Title</th>
                        <th style={thTdStyle}>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele, index) => {
                        const { userId, id, title, completed } = ele;
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
                                <td style={thTdStyle}>{userId}</td>
                                <td style={thTdStyle}>{id}</td>
                                <td style={thTdStyle}>{title}</td>
                                <td style={thTdStyle}>{completed ? 'Yes' : 'No'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchApi5
