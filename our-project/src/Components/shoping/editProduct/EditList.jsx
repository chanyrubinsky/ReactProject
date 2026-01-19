// // import { ShopingList } from "../ShopingList";
// // import { NewProduct } from "./NewProduct";
// // import { DeleteProduct } from "./DeleteProduct";
// // import {
// //     getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList, removeBasicById, removeTravelingById, removeHostingById, removeMealById, addNewBasicProduct, addNewTravelingProduct, addNewHostingProduct, addNewMeal
// // } from "../data/shopingProductsList";
// // export const EditList = () => {
// //     const [products, setProducts] = useState([]);
// //     const [hostingShopingList, sethostingShoping] = useState([]);
// //     const [listMeal, setListMeal] = useState([]);
// //     const [travelingShopingList, setTravelingShoping] = useState([]);
// //     const [basicShopingList, setBasicShoping] = useState([]);
// //     const addProductToList = async (product) => {
// //         //DATA את המערך וכו וכן להמשיך את הפונקציה שתשנה בוגם להמשיך את קומפוננטת ההוספה והמחיקה 
// //         switch (product.status) {
// //             case "TravelingShopingList": {
// //                const newProduct= await addNewTravelingProduct(product);
// //                 setTravelingShoping(newProduct);
// //                 return;
// //             }
// //             case "HostingShopingList": {
// //                 const newProducts = await addNewHostingProduct(product);
// //                 sethostingShoping(newProducts);
// //                 return;
// //             }
// //             case "BasicShopingList": {
// //                 const newProducts = await addNewBasicProduct(product);
// //                 setBasicShoping(newProducts);
// //                 return;
// //             }
// //             // אם הסטאטוס מציין Meal או לא מצוין – נעשה שימוש בפונקציית addNewMeal כברירת מחדל
// //             case "Meal":
// //             case "MealShopingList":
// //             default:
// //                 break;
// //         }
// //         const newProducts = await addNewMeal(product);
// //         // מההוספה בצד השרת כביכול חוזר מערך משימות עדכני שצריך לעדכן אותו בסטייט
// //         setProducts(newProducts);
// //     }

// //     const deleteProductFromList = async (id) => {
// //         //  הדמיה של עדכון המשימות בצד השרת
// //         const newTasks = await deleteTask(id);
// //         // מההוספה בצד השרת כביכול חוזר מערך משימות עדכני שצריך לעדכן אותו בסטייט
// //         setTasks(newTasks);
// //     }
// //     return (<>
// //         <DeleteProduct deleteProduct={deleteProductFromList} />
// //         { /*יהיה בסוף*/}
// //         <ShopingList products={products} />

// //     </>);
// // }
// import React, { useState, useEffect } from 'react';
// import { ShopingList } from "../ShopingList";
// import { NewProduct } from "./NewProduct";
// //import { DeleteProduct } from "./DeleteProduct";
// import {
//     getlistMeal, getHostingShopingList, getTravelingShopingList, 
//     getBasicShopingList,
//     addNewBasicProduct, addNewTravelingProduct, 
//     addNewHostingProduct, addNewMeal, 
//     removeBasicById, removeTravelingById, 
//     removeHostingById, removeMealById 
// } from "../../data/shopingProductsList";

// export const EditList = () => {
//     const [products, setProducts] = useState([]);
//     const [hostingShopingList, sethostingShoping] = useState([]);
//     const [listMeal, setListMeal] = useState([]);
//     const [travelingShopingList, setTravelingShoping] = useState([]);
//     const [basicShopingList, setBasicShoping] = useState([]);

//     const addProductToList = async (product) => {
//         let newProducts;
//         switch (product.status) {
//             case "TravelingShopingList":
//                 newProducts = await addNewTravelingProduct(product);
//                 setTravelingShoping(newProducts);
//                 break;
//             case "HostingShopingList":
//                 newProducts = await addNewHostingProduct(product);
//                 sethostingShoping(newProducts);
//                 break;
//             case "BasicShopingList":
//                 newProducts = await addNewBasicProduct(product);
//                 setBasicShoping(newProducts);
//                 break;
//             default:
//                 newProducts = await addNewMeal(product);
//                 setProducts(newProducts);
//                 break;
//         }
//     };

//     // const deleteProductFromList = async (id, status) => {
//     //     let newTasks;
//     //     switch (status) {
//     //         case "TravelingShopingList":
//     //             newTasks = await removeTravelingById(id);
//     //             setTravelingShoping(newTasks);
//     //             break;
//     //         case "HostingShopingList":
//     //             newTasks = await removeHostingById(id);
//     //             sethostingShoping(newTasks);
//     //             break;
//     //         case "BasicShopingList":
//     //             newTasks = await removeBasicById(id);
//     //             setBasicShoping(newTasks);
//     //             break;
//     //         default:
//     //             newTasks = await removeMealById(id);
//     //             setProducts(newTasks);
//     //             break;
//     //     }
//     // };

//     useEffect(() => {
//         // Fetch your initial data here
//         const fetchData = async () => {
//             const basicProducts = await getBasicShopingList();
//             setBasicShoping(basicProducts);

//             const travelingProducts = await getTravelingShopingList();
//             setTravelingShoping(travelingProducts);

//             const hostingProducts = await getHostingShopingList();
//             sethostingShoping(hostingProducts);

//             const mealProducts = await getlistMeal();
//             setListMeal(mealProducts);
//         };
//         fetchData();
//     }, []);

//     return (
//         <>
//             <NewProduct addProduct={addProductToList} />
//             {/* <DeleteProduct deleteProduct={deleteProductFromList} /> */}
//             <ShopingList products={basicShopingList} />
//             <NewProduct addProduct={addProductToList} />

//             <ShopingList products={hostingShopingList} />
//             <NewProduct addProduct={addProductToList} />

//             <ShopingList products={travelingShopingList} />
//             <NewProduct addProduct={addProductToList} />

//             <ShopingList products={listMeal} />
//         </>
//     );
// };