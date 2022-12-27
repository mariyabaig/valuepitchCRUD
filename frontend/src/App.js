import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Edit from './Components/Edit';
import Details from './Components/Details';
import CSVtoTable from './Components/CSVtoTable';
import About from './Pages/About';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>

     <Routes>
     
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
        <Route exact path="/details/:id" element={<Details/>}/>
        <Route exact path="/csvtotable" element={<CSVtoTable/>}/>
        <Route exact path="/about" element={<About/>}/>

      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
