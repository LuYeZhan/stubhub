import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Account from "./containers/Account";
import Category from "./containers/Category";
import Event from "./containers/Event";
import Login from "./containers/Login";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Account />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/event/:eventName/:eventId" element={<Event />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
