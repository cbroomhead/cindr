import {
  Routes,
  Route,
} from "react-router-dom";
 
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Pages/Explore";
import Chat from "./Pages/Chat";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";
 
function App() {
  return (
    <div className="App">
      <Sidenav />
        <Routes>
          <Route exact path="/" element={<Chat />}/>
          <Route path="/explore" element={<Explore />} />
          <Route path="/statistics" element={<Statistics />}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </div>
  );
}
export default App;
