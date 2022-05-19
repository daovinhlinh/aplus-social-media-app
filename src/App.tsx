import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import FriendList from './pages/FriendList';
import Login from "./pages/Login";
import NewFeed from "./pages/NewFeed";
import NotFound from './pages/NotFound';
import PhotoList from './pages/PhotoList';
import PostList from './pages/PostList';
import Profile from './pages/Profile';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<NewFeed />} />
                <Route path='/login' element={<Login />} />
                <Route path='/friend' element={<FriendList />} />
                <Route path='/photo' element={<PhotoList />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/post' element={<PostList />} />
                <Route path='*' element={<NotFound />} />

            </Routes>
        </div>
    );
}

export default App;
