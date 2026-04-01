
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Card from './components/Card/Card'
import MainPart1 from './components/Main/MainPart1'
import Navbar from './components/Navbar/Navbar'
import PricingCard from './components/Transparent pricing card/PricingCard'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'
import DigitalTools from './components/DigitalTools/DigitalTools'
import Models from './components/Models/Models'
import { useState } from 'react'
import Cart from './components/Cart/Cart'
import { toast } from 'react-toastify'

const getModels = async () =>{
  const res = await fetch("/model.json")
  return res.json()
}

const modelPromise = getModels()
function App() {

  const[cart, setCart] = useState([]);
  const[view, setView] = useState("products");


  const addToCart = (product) => {

 const exists = cart.find(item => item.id === product.id);

  if(exists){
    toast.error("Item already added!"); 
    return false;
  }

    setCart([...cart, product]);
      toast.success("Item added to cart!"); 
  return true;
  }


  return (
    <>
   
   

   {view === "products" ?(
    <>
    <Navbar cartCount={cart.length}></Navbar>

<Bannar></Bannar>
   <MainPart1></MainPart1>

   
<Models 
modelPromise={modelPromise}
addToCart={addToCart}
 setView={setView}
  cart={cart}
  view={view}
></Models>

<Card></Card>
   <PricingCard></PricingCard>
   <Workflow></Workflow>
   <Footer></Footer>
</>
   ) : (
 <Cart 
 cart={cart}
  setCart={setCart}
  setView={setView}
  view={view}
  ></Cart>
   
   )}

   
    </>
  )
}

export default App
