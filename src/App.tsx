import "./App.css";
import PostGroup from "./pages/Group/Post";
import ProfileGroup from "./pages/Group/Profile";
import ProfileGroupM from "./pages/Group/ProfileM";
import Login from "./pages/Login";
import NewFeed from "./pages/NewFeed";
import Usermanager from "./pages/UserManager/Usermanager";

function App() {
    return (
        <div className="App">
            {/* <Login /> */}
            {/* <NewFeed /> */}
            {/* <PostGroup/> */}
            {/* <ProfileGroup/> */}
            {/* <ProfileGroupM/> */}
            <Usermanager/>
        </div>
    );
}

export default App;
