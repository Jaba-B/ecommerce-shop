import { Routes, Route } from 'react-router-dom'
import Registration from "./components/Registration"
import LogIn from "./components/LogIn"
import Header from "./components/Header"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import Feedbacks from "./components/Feedbacks"
import Cart from "./components/Cart"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/products' element={<><Header /><Products /></>}></Route>
        <Route path='/products/:id'  element={<><Header /><ProductDetail /></>}/>
        <Route path='/feedbacks'  element={<><Header /><Feedbacks /></>}/>
        <Route path='/home'  element={<><Header /><Home /></>}/>
        <Route path='/cart'  element={<><Header /><Cart /></>}/>
      </Routes>
    </div>
  );
}

export default App;
