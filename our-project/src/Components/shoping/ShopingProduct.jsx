// export const ShopingProduct = (item, arr, setArr, ifEdit) => {
//     ifEdit=true;
//     const { product } = item;
//     console.log(product);
//     const To_delete = (id) => {
//         setArr(arr.filter((index) => index.id !== id));

//     }
//     return (

//         <><div>
//             <li>{product.name}
//             </li>
//         </div>
//             {ifEdit && <button onClick={() => To_delete(product.id)}>Delete</button>}
//         </>
//     );
// }

import React, { useContext } from "react";
import { Taskscontext } from "../../shopingContext/shoping.context.jsx";

export const ShopingProduct = ({ item, category, isEditMode }) => {
    // שליפת פונקציות העדכון מהקונטקסט
    const { 
        setBasicShopingList, 
        setHostingShopingList, 
        setTravelingShopingList, 
        setListMeal 
    } = useContext(Taskscontext);

    // פונקציה שמחליטה איזה מערך לעדכן לפי הקטגוריה
    const handleDelete = () => {
        const filterFn = (prev) => prev.filter(p => p.id !== item.id);

        if (category === "basic") setBasicShopingList(filterFn);
        else if (category === "hosting") setHostingShopingList(filterFn);
        else if (category === "traveling") setTravelingShopingList(filterFn);
        else if (category === "meal") setListMeal(filterFn);
    };

    return (
        <li style={{ listStyle: 'none', margin: '10px 0', borderBottom: '1px solid #eee' }}>
            <span>{item.name} - כמות: {item.amount}</span>
            
            {/* כפתור המחיקה יוצג רק אם המשתנה isEditMode הוא אמת */}
            {isEditMode && (
                <button 
                    onClick={handleDelete}
                    style={{ marginRight: '15px', color: 'red', cursor: 'pointer', border: '1px solid red', borderRadius: '4px' }}
                >
                    מחק
                </button>
            )}
        </li>
    );
};