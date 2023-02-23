import React from "react";
import Sidebar from "./Home_components/Sidebar"
import Chat from "./Home_components/Chat"
const Home=()=>{
    return (<>
        <div className="home">
                  <div className="container">
            <Sidebar />
            <Chat />
            </div>
            </div> 
       </>) }

export default Home;