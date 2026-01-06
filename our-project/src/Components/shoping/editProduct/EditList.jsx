import { ShopingList } from "../ShopingList";
import { NewProduct } from "./NewProduct";
import { DeleteProduct } from "./DeleteProduct";
import {
    getlistMeal, getHostingShopingList, getTravelingShopingList, getBasicShopingList,removeBasicById,removeTravelingById,removeHostingById,removeMealById, addNewBasicProduct,addNewTravelingProduct,addNewHostingProduct,addNewMeal
} from "../data/shopingProductsList";
export const EditList=()=>{
    const [products, setProducts] = useState([]);
     const [hostingShopingList, sethostingShoping] = useState([]);
    const [listMeal, setListMeal] = useState([]);
    const [travelingShopingList, setTravelingShoping] = useState([]);
    const [basicShopingList, setBasicShoping] = useState([]);
    const addProductToList = async (product) => {
        
       //DATA את המערך וכו וכן להמשיך את הפונקציה שתשנה בוגם להמשיך את קומפוננטת ההוספה והמחיקה 
        switch (product.status) {
       case "TravelingShopingList": {
           await addNewTravelingProduct(product);
            setTravelingShoping(travelingShopingList);
            return;
            }
            case "HostingShopingList": {
            const newProducts = await addNewHostingProduct(product);
            sethostingShoping(newProducts);
            return;
            }
            case "BasicShopingList": {
            const newProducts = await addNewBasicProduct(product);
            setBasicShoping(newProducts);
            return;
            }
            // אם הסטאטוס מציין Meal או לא מצוין – נעשה שימוש בפונקציית addNewMeal כברירת מחדל
            case "Meal":
            case "MealShopingList":
            default:
            break;
        }
        const newProducts = await addNewMeal(product);
        // מההוספה בצד השרת כביכול חוזר מערך משימות עדכני שצריך לעדכן אותו בסטייט
        setProducts(newProducts);
    }

    const deleteProductFromList = async (id) => {
        //  הדמיה של עדכון המשימות בצד השרת
        const newTasks = await deleteTask(id);
        // מההוספה בצד השרת כביכול חוזר מערך משימות עדכני שצריך לעדכן אותו בסטייט
        setTasks(newTasks);
    }
    return (<>
    <NewProduct addProduct={addProductToList}/>
    <DeleteProduct deleteProduct={deleteProductFromList}/>
   { /*יהיה בסוף*/}
    <ShopingList products={products}/>
    </>);
}