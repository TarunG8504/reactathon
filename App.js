import './App.css';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from'./Product';
import Cart from './Cart';
import SearchBar from './SearchBar';
import Clothes from './Clothes';
import Bags from './Bags';
import Shoes from './Shoes';
import Watches from './Watches';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element ={<Home/>} path="/" />
        <Route element ={<About/>} path="/About" />
        <Route element ={<Contact/>} path="/Contact" />
        <Route element={<Product/>} path="/Product"/>
        <Route element ={<Cart/>} path="/Cart" />
        <Route element ={<SearchBar/>} path="/SearchBar" />
        <Route element={<Clothes/>} path="/Clothes"/>
        <Route element ={<Bags/>} path="/Bags" />
        <Route element ={<Watches/>} path="/Watches" />
        <Route element={<Shoes/>} path="/Shoes"/>
      </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
