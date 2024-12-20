import React, { useEffect, useState } from 'react'

const FetchApi6 = () => {

    let [dbData,setDbData] = useState(null);

    useEffect(()=>{
        let fun = async () => {
            let resp = await fetch("https://jsonplaceholder.typicode.com/users");
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
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.49)',
        background: 'linear-gradient(45deg, #e3ffe7,rgb(165, 97, 97))',
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
        background: 'linear-gradient(45deg,rgb(91, 73, 228),rgb(8, 109, 187))',
        color: 'black',
    };

    const thTdStyle = {
        padding: '10px',
        border: '1px solid #ddd',
    };

    const oddRowStyle = {
        background: '#f9f9f9',
    };

    const evenRowStyle = {
        background: '#dfe6e9',
    };

    const hoverStyle = {
        background: '#a29bfe',
    };

    return (
        <div style={containerStyle}>
            <table style={tableStyle}>
                <thead style={headerStyle}>
                    <tr>
                        <th style={thTdStyle}>ID</th>
                        <th style={thTdStyle}>Name</th>
                        <th style={thTdStyle}>Username</th>
                        <th style={thTdStyle}>Email</th>
                        <th style={thTdStyle}>Street</th>
                        <th style={thTdStyle}>Suite</th>
                        <th style={thTdStyle}>City</th>
                        <th style={thTdStyle}>Zipcode</th>
                        <th style={thTdStyle}>Geo (Lat, Lng)</th>
                    </tr>
                </thead>
                <tbody>
                    {dbData?.map((ele, index) => {
                        const { id, name, username, email, address } = ele;
                        const { street, suite, city, zipcode, geo } = address;
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
                                <td style={thTdStyle}>{id}</td>
                                <td style={thTdStyle}>{name}</td>
                                <td style={thTdStyle}>{username}</td>
                                <td style={thTdStyle}>{email}</td>
                                <td style={thTdStyle}>{street}</td>
                                <td style={thTdStyle}>{suite}</td>
                                <td style={thTdStyle}>{city}</td>
                                <td style={thTdStyle}>{zipcode}</td>
                                <td style={thTdStyle}>
                                    {geo.lat}, {geo.lng}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchApi6
