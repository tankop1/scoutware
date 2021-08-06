import { DropdownMenu, NavBar, NavItem, NavLogo } from './NavBar';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { Dashboard } from './Dashboard';
import { ReactComponent as HomeIcon } from './assets/homeIcon.svg';
import { ReactComponent as FacebookIcon } from './assets/facebookIcon.svg';
import { ReactComponent as SmugmugIcon } from './assets/smugmugIcon.svg';
import { ReactComponent as MenuIcon } from './assets/menuIcon.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCmKtGb67BeoU58Lb6FVJx2thBLygnOVhU",
  authDomain: "scoutware-322000.firebaseapp.com",
  projectId: "scoutware-322000",
  storageBucket: "scoutware-322000.appspot.com",
  messagingSenderId: "873247733339",
  appId: "1:873247733339:web:4cb376b34a6df96550b17e",
  measurementId: "G-FJE8RS39RP"
});

export const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

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

          <Route path={user ? "/login" : "/"} exact component={LogIn} />
          <Route path="/signup" component={SignUp} />
          {user && <Route path="/" exact component={Dashboard}/>}

        </Switch>

      </div>
    </Router>
  );
}

export default App;