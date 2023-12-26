import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import Privacypolicy from './pages/Privacypolicy';
import Refundpolicy from './pages/Refundpolicy';
import Shippingpolicy from './pages/Shippingpolicy';
import TermsandCondition from './pages/TermsandCondition';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>}/>
    <Route path="product" element={<OurStore/>}/>
    <Route path="product/:id" element={<Singleproduct/>}/>
    <Route path="blog" element={<Blog/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    <Route path="blog/:id" element={<Singleblog/>}/>
    <Route path="compare-product" element={<CompareProduct/>}/>
    <Route path="wishlist" element={<Wishlist/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="forgot-password" element={<Forgotpassword/>}/>
    <Route path="reset-password" element={<Resetpassword/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="privacy-policy" element={<Privacypolicy/>}/> 
    <Route path="refund-policy" element={<Refundpolicy/>}/>
    <Route path="shipping-policy" element={<Shippingpolicy/>}/>
    <Route path="terms-condition" element={<TermsandCondition/>}/>
  </Route>
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
