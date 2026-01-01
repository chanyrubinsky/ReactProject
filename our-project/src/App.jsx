import { useState } from 'react'
import { ShopingProduct } from "./Components/shoping/ShopingProduct.jsx";
import { getBasicShopingList } from './data/shopingProductsList.js'

import { Home } from './Components/home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShopingList products={products} />
      <Home/>
    </>
  )
}

export default App
