
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout';

function App() {
  return (
  
      <div className="app">
       
            <Header />
            <Home />
        
      </div>
   
  );
}

export default App;
