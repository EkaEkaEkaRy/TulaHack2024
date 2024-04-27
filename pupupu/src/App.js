import logo from './logo.svg';
import Main from './main_page'
import Profile from './main_comp/profile'
import Register from './main_comp/register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Booking from './main_comp/book';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={Main} />
        <Route path="/Profile" Component={Profile} />
        <Route path="/Register" Component={Register} />
        <Route path="/Booking" Component={Booking} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
