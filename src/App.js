import {
  Routes,
  Route,
} from "react-router-dom";
 
import './App.css';
import Sidenav from './Components/Sidenav';
import Letters from "./Pages/Letters";
import Chat from "./Pages/Chat";
import Settings from "./Pages/Settings";
import SavedChats from "./Pages/SavedChats";
import PageNotFound from "./Pages/PageNotFound";
 
function App() {
  return (
    <div className="App">
      <Sidenav />
        <Routes>
          <Route exact path="/" element={<Chat />}/>
          <Route path="/letters" element={<Letters />} />
          <Route path="/savedchats" element={<SavedChats />}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="" component={<PageNotFound />} />
        </Routes>
    </div>
  );
}
export default App;
