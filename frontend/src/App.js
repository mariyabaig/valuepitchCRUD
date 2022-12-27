import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Edit from './Components/Edit';
import Details from './Components/Details';

function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
        <Route exact path="/details/:id" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
