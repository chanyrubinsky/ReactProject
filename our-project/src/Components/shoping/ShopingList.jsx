import React, { useState, useEffect } from "react";
// import {
//     getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList, addNewBasicProduct, addNewTravelingProduct, addNewHostingProduct, addNewMeal, removeBasicById, removeTravelingById, removeHostingById, removeMealById,deleteProductFromList,de
// } from "../data/shopingProductsList";
import { NewProduct } from "./NewProduct.jsx";
import {
    getlistMeal, getHostingShopingList, getTravelingShopingList,
    getBasicShopingList,
    addNewBasicProduct, addNewTravelingProduct,
    addNewHostingProduct, addNewMeal,
    removeBasicById, removeTravelingById,
    removeHostingById, removeMealById
} from "../data/shopingProductsList.js";
import { ShopingProduct } from "./ShopingProduct.jsx";
export const ShopingList = () => {
    const statusMealList = true;
    const statusHostingShopingList = true;
    const statusTravelingShopingList = true;
    const [hostingShopingList, sethostingShoping] = useState([]);
    const [listMeal, setListMeal] = useState([]);
    const [travelingShopingList, setTravelingShoping] = useState([]);
    const [basicShopingList, setBasicShoping] = useState([]);

    useEffect(() => {
        getBasicShopingList().then((data) => {
            setBasicShoping([...data]);
            console.log(data);
        });
        getTravelingShopingList().then((data) => {
            setTravelingShoping([...data]);
            console.log(data);
        });
        getHostingShopingList().then((data) => {
            sethostingShoping([...data]);
            console.log(data);

        });
        getlistMeal().then((data) => {
            setListMeal([...data]);
            console.log(data);

        });
    }, []);

    // useEffect(() => {
    //     const { condition } = props;

    //     if (condition == 'inHome') {
    //         statusMealList = true;

    //     }
    //     else {
    //         if (condition == 'traveling') {
    //             statusTravelingShopingList = true;

    //         }
    //         else {
    //             statusHostingShopingList = true;
    //         }
    //     }
    // }, [])
    // const displayItem = (arrProducts, setArrProducts) => {
    //     { arrProducts.map(b => <ShopingProduct key={b.id} product={b} setProductList={setArrProducts} productList={arrProducts} />) }

    const addProductToList = async (product) => {
        let newProducts;
        switch (product.status) {
            case "TravelingShopingList":
                console.log(product);
                dibbugger;
                newProducts = await addNewTravelingProduct(product);
                console.log(newProducts);
                setTravelingShoping(newProducts);
                //break;
                // case "HostingShopingList":
                newProducts = await addNewHostingProduct(product);
                sethostingShoping(newProducts);
                break;
            case "BasicShopingList":
                newProducts = await addNewBasicProduct(product);
                setBasicShoping(newProducts);
                break;
            default:
                newProducts = await addNewMeal(product);
                setListMeal(newProducts);
                break;
        }
    }



    const displayItem = (arrProducts, setArrProducts) => {
        return arrProducts.map(b =>
            <ShopingProduct
                key={b?.id}
                product={b}
                setProductList={setArrProducts}
                productList={arrProducts}
            />
        );
    }
    return (
        <>

            <h1>רשימת קניות לשבת:</h1>
            <h2>{statusTravelingShopingList}&& "    :רשימת קניות לנסיעה"</h2>
            <h3>רשימת קניות בסיסית:</h3>

            <ul>
                {displayItem(basicShopingList, setBasicShoping)}
            </ul>
            <NewProduct addProduct={addProductToList} />
            <div>
                {statusTravelingShopingList && <div><h2> "    :רשימת קניות לנסיעה"</h2>
                    <ul> {displayItem(travelingShopingList, setTravelingShoping)} </ul>
                </div>}
            </div>
            <div>
                {statusHostingShopingList && <div><h2> "    :רשימת קניות לאירוח"</h2>
                    <ul> {displayItem(hostingShopingList, sethostingShoping)} </ul>
                </div>}
            </div>
            <div>
                {statusMealList && <div><h2> "    :רשימת קניות לבית"</h2>
                    <ul> {displayItem(listMeal, setListMeal)} </ul>
                </div>}
            </div>
        </>);


};