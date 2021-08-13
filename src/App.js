import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/Home.css'
import './styles/Navigation.css'
import Home from './components/Home.js'
import Artwork from './components/Artwork.js'
import Characters from './components/Characters'
import Clothing from './components/Clothing'
import Contact from './components/Contact'
import Critters from './components/Critters'
import DIY from './components/DIY'
import Events from './components/Events'
import FAQ from './components/FAQ'
import Fossils from './components/Fossils'
import Furniture from './components/Furniture'
import Locations from './components/Locations'
import Music from './components/Music'
import Tools from './components/Tools'
import Villagers from './components/Villagers'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route path="/artwork" component={Artwork} />
         <Route path="/characters" component={Characters} />
         <Route path="/clothing" component={Clothing} />
         <Route path="/contact" component={Contact} />
         <Route path="/critters" component={Critters} />
         <Route path="/diy" component={DIY} />
         <Route path="/events" component={Events} />
         <Route path="/faq" component={FAQ} />
         <Route path="/fossils" component={Fossils} />
         <Route path="/furniture" component={Furniture} />
         <Route path="/locations" component={Locations} />
         <Route path="/music" component={Music} /> 
         <Route path="/tools" component={Tools} />  
         <Route path="/villagers" component={Villagers} />  
      </Switch>
    </Router>
  );
}

export default App;
