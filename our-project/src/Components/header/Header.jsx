import { createBrowserRouter } from "react-router";
import { EditShabbatSettings } from "../home/EditShabbatSettings";
import { ShabbatSettings } from "../home/ShabbatSettings";
import { ListCooking } from "../Cooking/listCooking";
import { ShopingList } from "../Shoping/ShopingList";
import ListTask from "../Task/ListTask.jsx";


export const Header = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: <EditShabbatSettings />,
        },
        {
            path: "/ShabbatSettings",
            Component: <ShabbatSettings />,
        },
        {
            path: "/ShopingList",
            Component: <ShopingList />,
        },
        {
            path: "/ListCooking",
            Component: <ListCooking />,
        },
        {
            path: "/ListTask",
            Component: <ListTask />,
        },
        
    ]);

    return <>
        <header>
            <h1>Shabbat Planner</h1>
        </header>
        
    </>
}