import './App.css';
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import Home from './components/Home';
import Tasks from './components/Tasks'; 
import {BrowserRouter as Router , Route, Routes, Navigate} from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div>
    <Router>   
        <Header />  
            <Routes>
              <Route path='/' element={<Home/>} />   
              <Route path='/tasks' element={<Tasks/>} />  
            </Routes>    
        <Footer />    
    </Router>  
</div>   
  );
}

export default App;
