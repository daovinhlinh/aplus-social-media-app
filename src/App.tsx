import { Profiler } from "react";
import "./App.css";
import Login from "./pages/Login";
import NewFeed from "./pages/NewFeed";
import Profile from "./pages/Profile";

function App(){
    return (
        <div className="App">
            {/* <Login /> */}
            {/* <NewFeed /> */}
            <Profile />
        </div>
    );
}

export default App;
