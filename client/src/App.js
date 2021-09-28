import Home from './pages/home/Home.jsx';
import Topbar from './components/topbar/Topbar.jsx'
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import Settings from './pages/settings/Settings.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import { Context } from './context/Context'
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/register">{user ? <Home/> : <Register/>}</Route>
      <Route exact path="/login">{user ? <Home/> : <Login/>}</Route>
      <Route exact path="/write">{user ? <Write/> : <Register/>}</Route>
      <Route exact path="/settings">{user ? <Settings/> : <Register/>}</Route>
      <Route exact path="/post/:postId"><Single/></Route>
      </Switch>

    </Router>
  );
}

export default App;
