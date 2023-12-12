import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Overview';

function App() {

    
    return (
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            
        </Routes>
    );
}

export default App;
