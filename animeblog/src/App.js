import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/screens/Login';
import CreateBlog from './components/screens/CreateBlog';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/screens/SignUp';
import Read from './components/screens/Read';
import MyBlog from './components/screens/MyBlog';
import Blog from './components/screens/Blog';
import EditBlog from './components/screens/EditBlog';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/:id' element={<Read />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/edit/:id' element={<EditBlog />} />
        <Route index path='/blog' element={<Blog />} />
        <Route path='/myblog' element={<MyBlog />} />
        <Route path='/createblog' element={<CreateBlog />} />
      </Routes>
    </>
  );
}

export default App;
