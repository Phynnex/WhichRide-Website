import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar" 
import TheApp from './pages/TheApp';
import AboutUs from './pages/AboutUs';
import GetInTouch from './pages/GetInTouch';
import './App.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div>
          <Switch>
            <Route exact path="/" component={TheApp} />
            <Route path="/" component={AboutUs} />
            <Route path="/" component={GetInTouch} />
            
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
 export default App;