
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Card from './components/Card/Card'
import MainPart1 from './components/Main/MainPart1'
import Navbar from './components/Navbar/Navbar'
import PricingCard from './components/Transparent pricing card/PricingCard'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <>
   <Navbar></Navbar>
   <Bannar></Bannar>
   <MainPart1></MainPart1>
   <Card></Card>
   <PricingCard></PricingCard>
   <Workflow></Workflow>
   <Footer></Footer>
    </>
  )
}

export default App
