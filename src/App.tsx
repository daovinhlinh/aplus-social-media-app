import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Friendslist from './components/FriendsList';
import FriendList from './pages/FriendList';
import Login from "./pages/Login";
import NewFeed from "./pages/NewFeed";
import NotFound from './pages/NotFound';
import PhotoList from './pages/PhotoList';
import PostList from './pages/PostList';
import Profile from './pages/Profile';

function App(){
    return (
        <div className="App">
            <Routes >
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<NewFeed />} />
                <Route path='/friend' element={<FriendList />} />
                <Route path='/photo' element = {<PhotoList/>}/>
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/post' element={<PostList/>}/>

            </Routes>
        </div>
    );
}

export default App;
