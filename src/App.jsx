import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
function App() {

  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="product" element={<Product/>} />
            <Route path="product/:id" element={<ProductDetails/>} />
            <Route path="product/product/:id" element={<ProductDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
