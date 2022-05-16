import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./pages/Login";
import NewFeed from "./pages/NewFeed";
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <Routes >
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<NewFeed />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
