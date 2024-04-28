import logo from './logo.svg';
import Main from './main_page'
import Profile from './main_comp/profile'
import Register from './main_comp/register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Booking from './main_comp/book';
import Complete from './main_comp/after';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={Main} />
        <Route path="/Profile" Component={Profile} />
        <Route path="/Register" Component={Register} />
        <Route path="/Booking" Component={Booking} />
        <Route path="/Complete" Component={Complete} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
