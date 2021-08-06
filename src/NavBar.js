import './NavBar.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import { ReactComponent as CaretIcon } from './assets/right-arrow.svg';
import { ReactComponent as TentIcon } from './assets/camping-tent.svg';
import { ReactComponent as UserIcon } from './assets/user.svg';
import { ReactComponent as FleurIcon } from './assets/fleur-de-lis.svg';
import { ReactComponent as BadgeIcon } from './assets/badge.svg';
import { ReactComponent as LeaderIcon } from './assets/team-leader.svg';
import { ReactComponent as ScoutIcon } from './assets/boy-scout.svg';
import { ReactComponent as LogoutIcon } from './assets/logout.svg';
import { ReactComponent as BackIcon } from './assets/arrow.svg';

import { ReactComponent as InfoIcon } from './assets/information.svg';
import { ReactComponent as MealIcon } from './assets/cereal.svg';
import { ReactComponent as FeedbackIcon } from './assets/like.svg';
import { ReactComponent as LogIcon } from './assets/google-docs.svg';

import { ReactComponent as RankIcon } from './assets/scout.svg';
import { ReactComponent as ResourceIcon } from './assets/handyman-tools.svg';

import { ReactComponent as FlagLeaderIcon } from './assets/flag-leader.svg';
import { ReactComponent as PresentationIcon } from './assets/leader.svg';
import { ReactComponent as TrainingIcon } from './assets/dumbbell.svg';

import { auth } from './App';

export function NavBar(props) {
  return (
    <nav className="navbar">
        <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

export function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
      <li className="nav-item">
          <a href={props.link ? props.link : '#'} target={props.link ? "_blank" : ""} rel="noreferrer" className="icon-button" onClick={() => setOpen(!open)}>
              {props.icon}
          </a>

          {open && props.children}
      </li>
    );
}

export function NavLogo() {
    return (
      <Link to="/" className="nav-logo"><h1>SCOUTWARE</h1></Link>
    );
}

export function DropdownMenu(props) {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {

        function onClick() {
            props.goToMenu && setActiveMenu(props.goToMenu);
            props.children === 'Logout' && auth.signOut();
        }

        return (
            <a href="#" className="menu-item" onClick={onClick}>
                <span className="icon-button">{props.leftIcon}</span>
    
                <span style={{marginLeft: '8px'}}>{props.children}</span>
    
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{height: menuHeight}}>

            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
                <div className="menu">

                    <DropdownItem leftIcon={<UserIcon/>}>{ auth.currentUser && auth.currentUser.displayName }</DropdownItem>
                    <DropdownItem goToMenu="camping" leftIcon={<TentIcon/>} rightIcon={<CaretIcon/>}>Campout Manager</DropdownItem>
                    <DropdownItem goToMenu="advancement" leftIcon={<FleurIcon/>} rightIcon={<CaretIcon/>}>Advancement</DropdownItem>
                    <DropdownItem goToMenu="badge" leftIcon={<BadgeIcon/>} rightIcon={<CaretIcon/>}>Merit Badges</DropdownItem>
                    <DropdownItem goToMenu="leader" leftIcon={<LeaderIcon/>} rightIcon={<CaretIcon/>}>Leadership</DropdownItem>
                    <DropdownItem goToMenu="scout" leftIcon={<ScoutIcon/>} rightIcon={<CaretIcon/>}>Scouts</DropdownItem>
                    <DropdownItem leftIcon={<LogoutIcon/>}>Logout</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'camping'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">

                    <DropdownItem leftIcon={<BackIcon/>} goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon={<InfoIcon/>}>Campout Info</DropdownItem>
                    <DropdownItem leftIcon={<MealIcon/>}>Meal Planner</DropdownItem>
                    <DropdownItem leftIcon={<FeedbackIcon/>}>Campout Feedback</DropdownItem>
                    <DropdownItem leftIcon={<LogIcon/>}>Past Campouts</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'advancement'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">

                    <DropdownItem leftIcon={<BackIcon/>} goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon={<RankIcon/>}>Ranks</DropdownItem>
                    <DropdownItem leftIcon={<ResourceIcon/>}>Resources</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'badge'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">

                    <DropdownItem leftIcon={<BackIcon/>} goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon={<LogIcon/>}>Merit Badge List</DropdownItem>
                    <DropdownItem leftIcon={<ScoutIcon/>}>MB Counselors</DropdownItem>
                    <DropdownItem leftIcon={<ResourceIcon/>}>Resources</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'leader'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">

                    <DropdownItem leftIcon={<BackIcon/>} goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon={<PresentationIcon/>}>Leadership Opportunities</DropdownItem>
                    <DropdownItem leftIcon={<FlagLeaderIcon/>}>Current Roles</DropdownItem>
                    <DropdownItem leftIcon={<TrainingIcon/>}>Leadership Training</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'scout'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">

                    <DropdownItem leftIcon={<BackIcon/>} goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon={<LogIcon/>}>Patrol Rosters</DropdownItem>
                    <DropdownItem leftIcon={<InfoIcon/>}>Contact Information</DropdownItem>

                </div>
            </CSSTransition>

        </div>
    );
}