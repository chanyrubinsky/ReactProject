import { useState } from 'react'
import { ShopingProduct } from "./Components/shoping/ShopingProduct.jsx";
import { getBasicShopingList } from './data/shopingProductsList.js'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShopingList products={products} />
    </>
  )
}

export default App
