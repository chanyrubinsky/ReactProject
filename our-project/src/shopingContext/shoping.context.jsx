import { useState, useEffect, createContext } from "react";
import {
    getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList,
    addNewBasicProduct, addNeeTravelingProduct, addNewMeal, addNewHostingProduct
} from "../data/shopingProductsList.js";

export const Taskscontext = createContext();

export const ShopingContextProvider = (props) => {
    // מערכי הנתונים
    const [hostingShopingList, setHostingShopingList] = useState([]);
    const [listMeal, setListMeal] = useState([]);
    const [travelingShopingList, setTravelingShopingList] = useState([]);
    const [basicShopingList, setBasicShopingList] = useState([]);

    // סטטוסים לתצוגה
    const [statusMealList, setStatusMealList] = useState(true);
    const [statusHostingShopingList, setStatusHostingShopingList] = useState(false);
    const [statusTravelingShopingList, setStatusTravelingShopingList] = useState(false);

    // טעינה ראשונית מה"שרת"
    useEffect(() => {
        getBasicShopingList().then(data => setBasicShopingList([...data]));
        getTravelingShopingList().then(data => setTravelingShopingList([...data]));
        getHostingShopingList().then(data => setHostingShopingList([...data]));
        getlistMeal().then(data => setListMeal([...data]));
    }, []);

    // פונקציית עזר להוספת מוצר (מעדכנת גם שרת וגם סטייט)
    const addProduct = async (product, type) => {
        switch (type) {
            case "basic":
                await addNewBasicProduct(product);
                setBasicShopingList(prev => [...prev, product]);
                break;
            case "hosting":
                await addNewHostingProduct(product);
                setHostingShopingList(prev => [...prev, product]);
                break;
            case "traveling":
                await addNeeTravelingProduct(product);
                setTravelingShopingList(prev => [...prev, product]);
                break;
            case "meal":
                await addNewMeal(product);
                setListMeal(prev => [...prev, product]);
                break;
            default:
                console.error("Unknown product type");
        }
    };

    return (
        <Taskscontext.Provider value={{
            // נתונים לתצוגה
            hostingShopingList,
            listMeal,
            travelingShopingList,
            basicShopingList,

            // פונקציית פעולה (Action)
            addProduct,

            // סטטוסים ושינויים
            statusMealList, setStatusMealList,
            statusHostingShopingList, setStatusHostingShopingList,
            statusTravelingShopingList, setStatusTravelingShopingList,
            setBasicShopingList,
            setListMeal,
            setTravelingShopingList,
            setHostingShopingList,
        }}>
            {props.children}
        </Taskscontext.Provider>
    );
};