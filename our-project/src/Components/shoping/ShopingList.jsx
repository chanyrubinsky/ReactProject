// // import React, { useState, useEffect } from "react";
// // import {
// //     getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList
// // } from "../../data/shopingProductsList.js";
// // import { ShopingProduct } from "./ShopingProduct";
// // export const ShopingList = () => {
// //     console.log("render ShopingList");
// //     const [hostingShopingList, gethostingShoping] = useState([]);
// //     const [listMeal, getListMeal] = useState([]);
// //     const [travelingShopingList, getTravelingShoping] = useState([]);
// //     const [basicShopingList, getbasicShoping] = useState([]);
// //     let statusMealList = true;
// //     let statusHostingShopingList = false;
// //     let statusTravelingShopingList = false;

// //     useEffect(() => {
// //         getBasicShopingList().then((data) => {
// //             getbasicShoping([...data]);
// //             console.log(data);
// //         });
// //         getTravelingShopingList().then((data) => {
// //             getTravelingShoping([...data]);
// //             console.log(data);

// //         });
// //         getHostingShopingList().then((data) => {
// //             gethostingShoping([...data]);
// //             console.log(data);

// //         });
// //         getlistMeal().then((data) => {
// //             getListMeal([...data]);
// //             console.log(data);

// //         });
// //     }, []);

// //     useEffect(() => {
// //         const condition = 'ghjk';

// //         if (condition === 'inHome') {
// //             statusMealList = true;
// //         } else if (condition === 'traveling') {
// //             statusTravelingShopingList = true;
// //         } else {
// //             statusHostingShopingList = true;
// //         }

// //     }, []);

// //     // const ShoppingList = ({ basicShoppingList }) => {
// //     //     const filteredShoppingList = basicShoppingList.filter(product => product.id >= 2 && product.id <= 4); // סינון לפי ID
// //     // };

// //     return (
// //         <>
// //             <h1>רשימת קניות לשבת:</h1>

// //             {statusHostingShopingList && (
// //                 <div>
// //                     <h2>:רשימת קניות למארחים</h2>
// //                     <ul>
// //                         {travelingShopingList.map(product => (
// //                             <ShopingProduct key={product.id} product={product} />
// //                         ))}
// //                     </ul>
// //                 </div>)}

// //             {statusTravelingShopingList && (
// //                 <div>
// //                     <h2>:רשימת קניות לאורחים</h2>
// //                     <ul>
// //                         {hostingShopingList.map(product => (
// //                             <ShopingProduct key={product.id} product={product} />
// //                         ))}
// //                     </ul>
// //                 </div>)}




// //             <h3>רשימת קניות בסיסית:</h3>
// //             <ul>
// //                 {basicShopingList.map(b => <ShopingProduct key={b.id} product={b} />)}
// //             </ul>
// //             {/*לשנות את הפומקציה*/}
// //             {/* <ul>
// //                 {statusMealList&&listMeal.map(m=><ShopingProduct key={m.id}/>).filter()}
// //             </ul> */}
// //         </>);
// // }
// import React, { useState, useEffect } from "react";
// // import {
// //     getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList
// // } from "../../data/shopingProductsList.js";
// import { ShopingProduct } from "./ShopingProduct";
// import { Taskscontext, } from "../../shopingContext/shoping.context.jsx";
// import { useContext } from "react";
// import { getBasicShopingList } from "../../data/shopingProductsList";

// export const ShopingList = () => {
//     console.log("render ShopingList");
//     const {
//         hostingShopingList,
//         listMeal,
//         travelingShopingList,
//         basicShopingList,

//         // פונקציית פעולה (Action)
//         addProduct,

//         // סטטוסים ושינויים
//         statusMealList, setStatusMealList,
//         statusHostingShopingList, setStatusHostingShopingList,
//         statusTravelingShopingList, setStatusTravelingShopingList
//     } = useContext(Taskscontext);

//     const addProductToList = async (product) => {
//         let newProducts;
//         switch (product.status) {
//             case "TravelingShopingList":
//                 console.log(product);
//                 newProducts = await addNewTravelingProduct(product);
//                 console.log(newProducts);
//                 travelingShopingList(newProducts);
//                 //break;
//                 // case "HostingShopingList":
//                 newProducts = await addNewHostingProduct(product);
//                 sethostingShoping(newProducts);
//                 break;
//             case "BasicShopingList":
//                 newProducts = await addNewBasicProduct(product);
//                 setBasicShoping(newProducts);
//                 break;
//             default:
//                 newProducts = await addNewMeal(product);
//                 setListMeal(newProducts);
//                 break;
//         }
//     }



//     const displayItem = (arrProducts, setArrProducts) => {
//         return arrProducts.map(b =>
//             <ShopingProduct
//                 key={b?.id}
//                 product={b}
//                 setProductList={setArrProducts}
//                 productList={arrProducts}
//             />
//         );
//     }
//     return (
//         <>
//             <h1>רשימת קניות לשבת:</h1>

//             {statusHostingShopingList && (
//                 <div>
//                     <h2>:רשימת קניות למארחים</h2>
//                     <ul>
//                         {hostingShopingList.map(product => (
//                             <ShopingProduct key={product.id} item={product} arr={hostingShopingList} setArr={sethostingShoping} ifEdit={false} />
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             {statusTravelingShopingList && (
//                 <div>
//                     <h2>:רשימת קניות לאורחים</h2>
//                     <ul>
//                         {travelingShopingList.map(product => (
//                             <ShopingProduct key={product.id} item={product} arr={travelingShopingList} setArr={setTravelingShoping} ifEdit={false} />
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             <h3>רשימת קניות בסיסית:</h3>
//             <ul>
//                 {getBasicShopingList.map(b => <ShopingProduct key={b.id} item={b} arr={basicShopingList} setArr={setbasicShoping} ifEdit={false} />)}
//             </ul>

//             {statusMealList && (
//                 <>
//                     <h2>רשימת קניות בסיסית:</h2>
//                     <h3>ארוחה בסיסית:</h3>
//                     <ul>
//                         {listMeal.filter(item => item.status === 'homeShopingBasicMeal').map(item => (
//                             <ShopingProduct key={item.id} product={item} />
//                         ))}
//                     </ul>
//                     <h3>ארוחה ראשונה:</h3>
//                     <ul>
//                         {listMeal.filter(item => item.status === 'homeShopingfirstMeal').map(item => (
//                             <ShopingProduct key={item.id} product={item} />
//                         ))}
//                     </ul>
//                     <h3>ארוחה שנייה:</h3>
//                     <ul>
//                         {listMeal.filter(item => item.status === 'homeShopingSecondMeal').map(item => (
//                             <ShopingProduct key={item.id} product={item} />
//                         ))}
//                     </ul>
//                     <h3>ארוחה שלישית:</h3>
//                     <ul>
//                         {listMeal.filter(item => item.status === 'homeShopingthirdMeal').map(item => (
//                             <ShopingProduct key={item.id} product={item} />
//                         ))}
//                     </ul>
//                 </>
//             )}
//         </>
//     );
// };
import React, { useContext, useState } from "react";
import { ShopingProduct } from "./ShopingProduct";
import { Taskscontext } from "../../shopingContext/shoping.context.jsx";

export const ShopingList = ({ isEditMode = false }) => {
    const {
        hostingShopingList,
        listMeal,
        travelingShopingList,
        basicShopingList,
        statusMealList,
        statusHostingShopingList,
        statusTravelingShopingList,
        setHostingShopingList,
        setListMeal,
        setTravelingShopingList
    } = useContext(Taskscontext);

    // סטייט לניהול השדות של המוצר החדש (שם וכמות)
    const [newItem, setNewItem] = useState({ name: "", amount: "" });
    // סטייט כדי לדעת איזו קטגוריה פתוחה כרגע להוספה
    const [activeCategory, setActiveCategory] = useState(null);

    // פונקציית שמירה שמעדכנת את הקונטקסט
    const handleSave = (category, status = "") => {
        if (!newItem.name || !newItem.amount) return;

        const productToAdd = {
            id: Date.now(),
            name: newItem.name,
            amount: newItem.amount,
            status: status || category
        };

        if (category === "hosting") setHostingShopingList(prev => [...prev, productToAdd]);
        else if (category === "traveling") setTravelingShopingList(prev => [...prev, productToAdd]);
        else if (category === "meal") setListMeal(prev => [...prev, productToAdd]);

        // איפוס השדות וסגירת תיבת ההוספה
        setNewItem({ name: "", amount: "" });
        setActiveCategory(null);
    };

    // תבנית לשורת ההוספה שמופיעה בתוך האתר
    const renderAddInput = (category, status = "") => (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
            <input 
                type="text" 
                placeholder="שם מוצר..." 
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            />
            <input 
                type="text" 
                placeholder="כמות" 
                style={{ width: '60px', marginRight: '5px' }}
                value={newItem.amount}
                onChange={(e) => setNewItem({...newItem, amount: e.target.value})}
            />
            <button onClick={() => handleSave(category, status)} style={{ marginRight: '5px', color: 'green' }}>שמור</button>
            <button onClick={() => setActiveCategory(null)} style={{ marginRight: '5px', color: 'gray' }}>ביטול</button>
        </div>
    );

    return (
        <div style={{ direction: 'rtl', padding: '20px' }}>
            <h1>רשימת קניות לשבת {isEditMode && "(עריכה)"}</h1>

            {/* רשימה בסיסית - ללא מחיקה/הוספה */}
            <section>
                <h3>רשימת קניות בסיסית:</h3>
                <ul>
                    {basicShopingList.map(p => (
                        <ShopingProduct key={p.id} item={p} category="basic" isEditMode={false} />
                    ))}
                </ul>
            </section>

            {/* רשימת מארחים */}
            {statusHostingShopingList && (
                <section>
                    <h3>קניות למארחים:</h3>
                    <ul>
                        {hostingShopingList.map(p => (
                            <ShopingProduct key={p.id} item={p} category="hosting" isEditMode={isEditMode} />
                        ))}
                    </ul>
                    {isEditMode && (
                        activeCategory === "hosting" 
                        ? renderAddInput("hosting") 
                        : <button onClick={() => setActiveCategory("hosting")}>+ הוסף מוצר למארחים</button>
                    )}
                </section>
            )}

            {/* ארוחות בבית */}
            {statusMealList && (
                <section style={{ marginTop: '20px' }}>
                    <h2>פירוט ארוחות בבית:</h2>
                    {['homeShopingBasicMeal', 'homeShopingfirstMeal', 'homeShopingSecondMeal', 'homeShopingthirdMeal'].map(cat => (
                        <div key={cat} style={{ marginBottom: '15px', paddingRight: '15px' }}>
                            <h4>{cat.replace('homeShoping', '')}:</h4>
                            <ul>
                                {listMeal.filter(m => m.status === cat).map(item => (
                                    <ShopingProduct key={item.id} item={item} category="meal" isEditMode={isEditMode} />
                                ))}
                            </ul>
                            {isEditMode && (
                                activeCategory === cat 
                                ? renderAddInput("meal", cat) 
                                : <button onClick={() => setActiveCategory(cat)} style={{ fontSize: '0.8em' }}>+ הוסף ל{cat.replace('homeShoping', '')}</button>
                            )}
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};