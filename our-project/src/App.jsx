// // import { useState } from 'react'
// // import { EditShbbatSettings } from './Components/home/EditShabbatSettings'
// // import './App.css'
// // import { ShopingList } from "./Components/shoping/ShopingList";

// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // // import{ListCooking} from './Components/Cooking/listCooking.jsx' 
// // function App() {
// //   return (
// //     <>
// //       <ShopingList/>
// //        {/* <EditShbbatSettings />   */}
// //          {/* <ListCooking />  */}
// //          {/* <ListTask />  */}

// //     </>
// //   )
// // }

// // export default App
// import { ShopingContextProvider } from "./shopingContext/shoping.context.jsx";
// import { ShopingList } from "./components/ShopingList";

// function App() {
//   return (
//     // ה-Provider חייב לעטוף את הכל!
//     <ShopingContextProvider>
//       <div className="App">
//         <ShopingList isEditMode={true} />
//       </div>
//     </ShopingContextProvider>
//   );
// }
import { ShopingContextProvider } from "./shopingContext/shoping.context.jsx";
// וודאי שהנתיב כאן מדויק לקובץ שלך! 
// אם הוא בתוך תיקיית components, רשמי כך:
import ShoppingPage  from "./Components/shoping/ShoppingPage.jsx"; 

function App() {
  return (
    <ShopingContextProvider>
      <div className="App">
        {/* העברתי לכאן את ה-isEditMode כדי שתוכלי לשלוט בזה */}
        <ShoppingPage />
      </div>
    </ShopingContextProvider>
  );
}

export default App;