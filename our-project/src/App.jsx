
 import { ShopingContextProvider } from "./shopingContext/shoping.context.jsx";
// import { ShopingList } from "./components/ShopingList";
import ShoppingPage  from "./Components/shoping/ShoppingPage.jsx"; 

 function App() {
return (
//     // ה-Provider חייב לעטוף את הכל!
 <ShopingContextProvider>
       <div className="App">
         <ShoppingPage />
       </div>
     </ShopingContextProvider>
   );
 }
// import { ShopingContextProvider } from "./shopingContext/shoping.context.jsx";
// // וודאי שהנתיב כאן מדויק לקובץ שלך! 
// // אם הוא בתוך תיקיית components, רשמי כך:

// function App() {

//   return (
//     <>
//         {/* <Router>
//             <Header />
//             <Switch>
//                 <Route path="/" exact component={ShabbatSettings} />
//                 <Route path="/cookingList" component={ListCooking} />
//                 <Route path="/tasksList" component={ListTask} />
//                 <Route path="/ShopingList" component={ShopingList} />
//                 הוספת רוטים נוספים
//             </Switch>
//         </Router> */}

//         {/* <nav>
//             <a href="/">הגדרות שבת</a>
//             <a href="/ListTask">משימות</a>
//             <a href="/ListCooking">בישולים</a>
//             <a href="/ShopingList">קניות</a>
//         </nav> */}
//             {/* <ListCooking to="/ListCooking" end>בישולים</ListCooking>
//             <ShopingList to="/ShopingList" end>קניות</ShopingList> */}
//       <ShabbatProvider>
//         <Header />
//       <EditShabbatSettings />
//         {/* <ShabbatSettings /> */}
//       </ShabbatProvider>

//     </>
//   )
// }

export default App;