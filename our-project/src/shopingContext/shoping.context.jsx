import { useState, useEffect, createContext } from "react";
import { getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList } from "../data/shopingProductsList.js";
// יצירה של קונטקסא, קונטקבט הוא אובייקט שמכיל מידע שאמור להיות משותף לכל הקומפוננטות שמתחתיו
export const Taskscontext = createContext();

export const shopingContextProvider = (props) => {
    console.log("render ShopingList");
    const [hostingShopingList, gethostingShoping] = useState([]);
    const [listMeal, getListMeal] = useState([]);
    const [travelingShopingList, getTravelingShoping] = useState([]);
    const [basicShopingList, getbasicShoping] = useState([]);
    const [statusMealList, setStatusMealList] = useState(false);

    const [statusHostingShopingList, setStatusHostingShopingList] = useState(false);
    const [statusTravelingShopingList, setStatusTravelingShopingList] = useState(false);

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

    useEffect(() => {
        const condition = 'traveling';

        if (condition === 'inHome') {
            setStatusMealList(true);
        } else if (condition === 'traveling') {
            setStatusTravelingShopingList(true);
        } else {
            setStatusHostingShopingList(true);
        }
    }, []);

   return (
  <Taskscontext.Provider value={{
    hostingShopingList,
    travelingShopingList,
    basicShopingList,
    listMeal,
    statusMealList,
    statusHostingShopingList,
    statusTravelingShopingList,
    setStatusMealList,
    setStatusHostingShopingList,
    setStatusTravelingShopingList
  }}>
    {props.children}
  </Taskscontext.Provider>
);
}
