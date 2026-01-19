// import { nanoid } from 'nanoid';


// export const NewProduct = (props) => {
//     const { addProduct } = props;

//     const createProduct = async (event) => {
//         event.preventDefault();
//         const NewProduct = {
//             id: nanoid(),
//              name: event.target.name.value,
//               amount:'0', 
//               status: props.condition,
//               isBouht:false
//         }
//         event.target.reset();
//         addProduct(NewProduct);
//     }

//     return <form onSubmit={createProduct}>
//         <input type="text" name="name" placeholder='name' /> <br />
//         <button> הוסף את המוצר </button>
//     </form>;
// }
import React from 'react';
import { nanoid } from 'nanoid';

export const NewProduct = (props) => {
    const { addProduct } = props;

    const createProduct = async (event) => {
        event.preventDefault();
        const newProduct = {
            id: nanoid(),
            name: event.target.name.value,
            amount: '0',
            status: event.target.status.value, // Use the selected status
            isBought: false,
        };
        event.target.reset();
        await addProduct(newProduct);
    };

    return (
        <form onSubmit={createProduct}>
            <input type="text" name="name" placeholder='Product Name' required /> <br />
            <select name="status" required>
                <option value="BasicShopingList">Basic Shopping List</option>
                <option value="HostingShopingList">Hosting Shopping List</option>
                <option value="TravelingShopingList">Traveling Shopping List</option>
                <option value="Meal">Meal</option>
            </select>
            <br />
            <button>Add Product</button>
        </form>
    );
};