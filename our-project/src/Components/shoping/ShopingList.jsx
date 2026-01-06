import React, { useState, useEffect } from "react";
import {
    getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList
} from "../data/shopingProductsList";
import { ShopingProduct } from "./ShopingProduct";
export const ShopingList = () => {
    const [hostingShopingList, gethostingShoping] = useState([]);
    const [listMeal, getListMeal] = useState([]);
    const [travelingShopingList, getTravelingShoping] = useState([]);
    const [basicShopingList, getbasicShoping] = useState([]);
    const statusMealList = true;
    const statusHostingShopingList = false;
    const statusTravelingShopingList = false;

    useEffect(() => {
        getBasicShopingList().then((data) => {
            getbasicShoping([...data]);
            console.log(data);
        });
        getTravelingShopingList().then((data) => {
            getTravelingShoping([...data]);
            console.log(data);

        });
        getHostingShopingList().then((data) => {
            gethostingShoping([...data]);
            console.log(data);

        });
        getlistMeal().then((data) => {
            getListMeal([...data]);
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

    return (
        <>
            <h1>רשימת קניות לשבת:</h1>
dibager
            <h2>{statusHostingShopingList && "    :רשימת קניות לנסיעה"}</h2>
            <h3>רשימת קניות בסיסית:</h3>
            <ul>
                {basicShopingList.map(b => <ShopingProduct key={b.id} product={b} />)}
            </ul>
            {/*לשנות את הפומקציה*/}
            {/* <ul>
                {statusMealList&&listMeal.map(m=><ShopingProduct key={m.id}/>).filter()}
            </ul> */}
        </>);
}   