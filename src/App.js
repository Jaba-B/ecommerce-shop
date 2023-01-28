import { Routes, Route } from 'react-router-dom'
import Registration from "./components/Registration"
import LogIn from "./components/LogIn"
import Header from "./components/Header"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/products' element={<><Header /><Products /></>}></Route>
        <Route path='/products/:id'  element={<><Header /><ProductDetail /></>}/>
      </Routes>
    </div>
  );
}

export default App;
