import { useState } from 'react'
import { EditShabbatSettings } from './Components/home/EditShabbatSettings'
import ListTask from "./Components/Task/ListTask.jsx";
import { ListCooking } from './Components/Cooking/listCooking.jsx'
import './App.css'
import { Header } from './Components/header/Header.jsx';
import { ShabbatSettings } from './Components/home/ShabbatSettings.jsx';
import { ShopingList } from './Components/Shoping/ShopingList.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';////


function App() {

  return (
    <>
      {/* <EditShabbatSettings /> */}
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={ShabbatSettings} />
                <Route path="/cookingList" component={ListCooking} />
                <Route path="/tasksList" component={ListTask} />
                <Route path="/ShopingList" component={ShopingList} />
                {/* הוספת רוטים נוספים */}
            </Switch>
        </Router>

        <nav>
            <a href="/">הגדרות שבת</a>
            <a href="/ListTask">משימות</a>
            <a href="/ListCooking">בישולים</a>
            <a href="/ShopingList">קניות</a>
            {/* <ListCooking to="/ListCooking" end>בישולים</ListCooking> */}
            {/* <ShopingList to="/ShopingList" end>קניות</ShopingList> */}

        </nav>
    </>
  )
}

export default App
