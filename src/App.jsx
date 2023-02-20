import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home';
import Books from './components/Pages/Books';
import UserHpage from './components/Pages/UserHpage';
import UserBooksList from './components/Pages/UserBooksList';
import BookIssue from './components/Pages/BookIssue';
import Lreglog from './components/Pages/Lreglog';
import Lbooks from './components/Pages/Lbooks';
import UserLoginForm from './components/Pages/UserLoginForm';
import LibHpage from './components/Pages/LibHpage';
import Addbook from './components/Pages/Addbook';
import UserReg from './components/Pages/UserReg';
import AllUsers from './components/Pages/AllUsers';
import Libreg from './components/Pages/Libreg';
import Liblog from './components/Pages/Liblog';
import Librarianhp from './components/Pages/Librarianhp';
import LibHome from './components/LibHome';
import Issueddbooks from './components/Pages/Issueddbooks';
import Updatebook from './components/Pages/Updatebook';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='book' element={<Books/>}/>
        <Route path='librarian' element={<Libreg/>}/>
        
        <Route path='login' element={<Liblog/>}/>
        <Route path='test' element={<Lreglog/>}/>
        <Route path='libhomee' element={<LibHome/>}/>
        <Route path='issuedbooks' element={<Issueddbooks/>}/>




        <Route path='libhome' element={<Librarianhp/>}/>
        <Route path='books' element={<Lbooks/>}/>
        <Route path='addbook' element={<Addbook/>}/>
        <Route path='adduser' element={<UserReg/>}/>
        <Route path='alluser' element={<AllUsers/>}/>
        <Route path='ubooks' element={<Updatebook/>}/>



        <Route path='Userlogin' element={<UserLoginForm/>}/>
        <Route path='UserHpage' element={<UserHpage/>}/>
        <Route path='userbooks' element={<UserBooksList/>}/>
        <Route path='issue' element={<BookIssue/>}/>
      </Routes>
      </BrowserRouter>
      
    </>

  );
}

export default App;
