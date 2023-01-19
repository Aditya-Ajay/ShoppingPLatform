import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import ModalProvider  from './context/Modal/ModalContext';
import { ModalContext } from './context/Modal/ModalContext';


import { data } from './data/effect';
import { Store , Navbar , Loading} from "./components /index"
import "./App.css"
import { useState } from 'react';
const App:React.FC = () => {
  const [product , setProduct] = useState<any[]>([])
  const [loading , setLoading] = useState(true)
  const [counter , setCounter] = useState(1)
  const [cartAmount , setCartAmount] = useState(0)
  useEffect(()=>{
    data("https://dummyjson.com/products").then((e)=>{
        setProduct(e.products)
        setLoading(false)
    })
 },[])
  return (
    <ModalProvider>
    <BrowserRouter>
   <Navbar product={product} setProduct={setProduct} cartAmount={cartAmount} setCartAmount={setCartAmount}/>
   {loading ? <Loading /> : 
    <Routes>
    <Route path="/" element={<Store product={product} setProduct={setProduct} loading={loading} setLoading={setLoading}/>} />
    </Routes>
}
   
  </BrowserRouter>
  </ModalProvider>
  )
}

export default App