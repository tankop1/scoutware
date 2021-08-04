import { DropdownMenu, NavBar, NavItem, NavLogo } from './NavBar';
import { Dashboard } from './Dashboard';
import { ReactComponent as HomeIcon } from './assets/homeIcon.svg';
import { ReactComponent as FacebookIcon } from './assets/facebookIcon.svg';
import { ReactComponent as SmugmugIcon } from './assets/smugmugIcon.svg';
import { ReactComponent as MenuIcon } from './assets/menuIcon.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar>
          <NavLogo />
          <Link to="/"><NavItem icon={<HomeIcon/>}/></Link>
          <NavItem icon={<SmugmugIcon/>} link="https://sm570.smugmug.com/"/>
          <NavItem icon={<FacebookIcon/>} link="https://www.facebook.com/Troop570" />
          <NavItem icon={<MenuIcon/>} dropdown={true}>
            <DropdownMenu/>
          </NavItem>
        </NavBar>

        <Switch>

          <Route path="/" exact component={Dashboard}/>

        </Switch>

      </div>
    </Router>
  );
}

export default App;