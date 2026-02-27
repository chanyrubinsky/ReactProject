// import React, { useState, useEffect } from "react";
// import {
//     getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList
// } from "../../data/shopingProductsList.js";
// import { ShopingProduct } from "./ShopingProduct";
// export const ShopingList = () => {
//     console.log("render ShopingList");
//     const [hostingShopingList, gethostingShoping] = useState([]);
//     const [listMeal, getListMeal] = useState([]);
//     const [travelingShopingList, getTravelingShoping] = useState([]);
//     const [basicShopingList, getbasicShoping] = useState([]);
//     let statusMealList = true;
//     let statusHostingShopingList = false;
//     let statusTravelingShopingList = false;

//     useEffect(() => {
//         getBasicShopingList().then((data) => {
//             getbasicShoping([...data]);
//             console.log(data);
//         });
//         getTravelingShopingList().then((data) => {
//             getTravelingShoping([...data]);
//             console.log(data);

//         });
//         getHostingShopingList().then((data) => {
//             gethostingShoping([...data]);
//             console.log(data);

//         });
//         getlistMeal().then((data) => {
//             getListMeal([...data]);
//             console.log(data);

//         });
//     }, []);

//     useEffect(() => {
//         const condition = 'ghjk';

//         if (condition === 'inHome') {
//             statusMealList = true;
//         } else if (condition === 'traveling') {
//             statusTravelingShopingList = true;
//         } else {
//             statusHostingShopingList = true;
//         }

//     }, []);

//     // const ShoppingList = ({ basicShoppingList }) => {
//     //     const filteredShoppingList = basicShoppingList.filter(product => product.id >= 2 && product.id <= 4); // סינון לפי ID
//     // };

//     return (
//         <>
//             <h1>רשימת קניות לשבת:</h1>

//             {statusHostingShopingList && (
//                 <div>
//                     <h2>:רשימת קניות למארחים</h2>
//                     <ul>
//                         {travelingShopingList.map(product => (
//                             <ShopingProduct key={product.id} product={product} />
//                         ))}
//                     </ul>
//                 </div>)}

//             {statusTravelingShopingList && (
//                 <div>
//                     <h2>:רשימת קניות לאורחים</h2>
//                     <ul>
//                         {hostingShopingList.map(product => (
//                             <ShopingProduct key={product.id} product={product} />
//                         ))}
//                     </ul>
//                 </div>)}




//             <h3>רשימת קניות בסיסית:</h3>
//             <ul>
//                 {basicShopingList.map(b => <ShopingProduct key={b.id} product={b} />)}
//             </ul>
//             {/*לשנות את הפומקציה*/}
//             {/* <ul>
//                 {statusMealList&&listMeal.map(m=><ShopingProduct key={m.id}/>).filter()}
//             </ul> */}
//         </>);
// }
import React, { useState, useEffect } from "react";
// import {
//     getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList
// } from "../../data/shopingProductsList.js";
import { ShopingProduct } from "./ShopingProduct";
import { Taskscontext, } from "../../shopingContext/shoping.context.jsx";
import { useContext } from "react";

export const ShopingList = () => {
    console.log("render ShopingList");
    const {
        statusMealList,
        statusHostingShopingList,
        statusTravelingShopingList,
        basicShopingList,
        hostingShopingList,
        travelingShopingList,
        listMeal,
        setStatusMealList,
        setStatusHostingShopingList,
        setStatusTravelingShopingList
    } = useContext(Taskscontext);
    // const [hostingShopingList, gethostingShoping] = useState([]);
    // const [listMeal, getListMeal] = useState([]);
    // const [travelingShopingList, getTravelingShoping] = useState([]);
    // const [basicShopingList, getbasicShoping] = useState([]);
    // const [statusMealList, setStatusMealList] = useState(true);
    // const [statusHostingShopingList, setStatusHostingShopingList] = useState(false);
    // const [statusTravelingShopingList, setStatusTravelingShopingList] = useState(false);

    // useEffect(() => {
    //     getBasicShopingList().then((data) => {
    //         getbasicShoping([...data]);
    //         console.log(data);
    //     });
    //     getTravelingShopingList().then((data) => {
    //         getTravelingShoping([...data]);
    //         console.log(data);
    //     });
    //     getHostingShopingList().then((data) => {
    //         gethostingShoping([...data]);
    //         console.log(data);
    //     });
    //     getlistMeal().then((data) => {
    //         getListMeal([...data]);
    //         console.log(data);
    //     });
    // }, []);

    // useEffect(() => {
    //     const condition = 'InHome';

    //     if (condition === 'inHome') {
    //         setStatusMealList(true);
    //     } else if (condition === 'traveling') {
    //         setStatusTravelingShopingList(true);
    //     } else {
    //         setStatusHostingShopingList(true);
    //     }
    // }, []);

    return (
        <>
            <h1>רשימת קניות לשבת:</h1>

            {statusHostingShopingList && (
                <div>
                    <h2>:רשימת קניות למארחים</h2>
                    <ul>
                        {hostingShopingList.map(product => (
                            <ShopingProduct key={product.id} item={product} arr={hostingShopingList} setArr={sethostingShoping} ifEdit={false} />
                        ))}
                    </ul>
                </div>
            )}

            {statusTravelingShopingList && (
                <div>
                    <h2>:רשימת קניות לאורחים</h2>
                    <ul>
                        {travelingShopingList.map(product => (
                            <ShopingProduct key={product.id} item={product} arr={travelingShopingList} setArr={setTravelingShoping} ifEdit={false} />
                        ))}
                    </ul>
                </div>
            )}

            <h3>רשימת קניות בסיסית:</h3>
            <ul>
               {basicShopingList.map(b => <ShopingProduct key={b.id} item={b} arr={basicShopingList} setArr={setbasicShoping} ifEdit={false} />)}
            </ul>

            {statusMealList && (
                <>
                    <h2>רשימת קניות בסיסית:</h2>
                    <h3>ארוחה בסיסית:</h3>
                    <ul>
                        {listMeal.filter(item => item.status === 'homeShopingBasicMeal').map(item => (
                            <ShopingProduct key={item.id} product={item} />
                        ))}
                    </ul>
                    <h3>ארוחה ראשונה:</h3>
                    <ul>
                        {listMeal.filter(item => item.status === 'homeShopingfirstMeal').map(item => (
                            <ShopingProduct key={item.id} product={item} />
                        ))}
                    </ul>
                    <h3>ארוחה שנייה:</h3>
                    <ul>
                        {listMeal.filter(item => item.status === 'homeShopingSecondMeal').map(item => (
                            <ShopingProduct key={item.id} product={item} />
                        ))}
                    </ul>
                    <h3>ארוחה שלישית:</h3>
                    <ul>
                        {listMeal.filter(item => item.status === 'homeShopingthirdMeal').map(item => (
                            <ShopingProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};