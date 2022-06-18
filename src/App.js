import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={""} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<AddEmployee />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
