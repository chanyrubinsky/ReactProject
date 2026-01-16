import React from 'react';
export function Cooking({ item, arr, setArr }) {

    const To_delete = (id) => {
        setArr(arr.filter((index) => index.id !== id));

    }
    return (
        <div>
            
            <p>שם:: {item.name}</p>
            <p>זמן הכנה: {item.PreparationTime}</p>
            <p>status: {item.status}</p>
            <button onClick={() => To_delete(item.id)}>Delete</button>
        </div>
    );
}

