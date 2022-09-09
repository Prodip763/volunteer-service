import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Share/Header/Header';
import Footer from './Share/Footer/Footer';
import Detail from './Service/Detail/Detail';
import ServiceDetail from './Service/ServiceDetail/ServiceDetail';
import NotFound from './Share/NotFound/NotFound';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Share/RequireAuth/RequireAuth';
import Checkout from './Checkout/Checkout';
import SocialLogin from './Login/SocialLogin/SocialLogin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/detail/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;



