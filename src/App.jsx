import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Overview';
// import { useEffect } from 'react';
// import AnimatedRoutes from './components/AnimatedRoutes';
import Cookies from 'universal-cookie';



function App() {

    
    return (
        <Routes>
            <Route path='/' element={<Homepage/>}/>
        </Routes>
        // <AnimatedRoutes/>
    );
}

export default App;
