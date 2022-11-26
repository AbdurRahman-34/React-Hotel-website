import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from "./Components/HomePage/Home/Home"
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Blog from './Components/Blog/Blog';
import RequerAuth from './Components/RequerAuth/RequerAuth';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog' element={
        <RequerAuth>
          <Blog/>
        </RequerAuth>
      }></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
