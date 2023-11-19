import './App.css';
import { useEffect } from 'react';    
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import Home from './components/Home';
import Tasks from './components/Tasks'; 
import {BrowserRouter as Router , Route, Routes, Navigate} from 'react-router-dom' 
import './App.css';
import {useDispatch} from "react-redux";
import { setTaskError, updateStoreFromMemory, beginWithNoTasks } from './redux/tasksSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
    try {
      let tasksls = localStorage.getItem('tasksls');
      if (tasksls === null ) { 
        dispatch(beginWithNoTasks()) 
        let arr = [];
        localStorage.setItem('tasksls', JSON.stringify(arr));
      }
      else{
        dispatch(updateStoreFromMemory())
      }
    } catch(e) {
      dispatch(setTaskError('major'))
    }
    
    
  }, []);

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
