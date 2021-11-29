import './PastCampouts.css';
import { ReactComponent as SearchIcon } from './assets/loupe.svg';
import { ReactComponent as RefreshIcon } from './assets/refreshing.svg';
import { ReactComponent as CaretIcon } from './assets/right-arrow.svg';
import { useState } from 'react';
import { Footer } from './Dashboard';

export function PastCampouts(props) {
    return (
        <main className="past-campouts">
            <CampoutLog />
        </main>
    );
}

function CampoutLog(props) {
    return (
        <section className="campout-log">
            <LogHeader />
            <LogItem identifier="August Water Sports Campout" date="August 18th - 20th" activity="Altitude H20 Water Park" location="Camp Trevor Reese Jones" />
            <LogItem identifier="August Water Sports Campout" date="August 18th - 20th" activity="Altitude H20 Water Park" location="Camp Trevor Reese Jones" />
            <LogItem identifier="August Water Sports Campout" date="August 18th - 20th" activity="Altitude H20 Water Park" location="Camp Trevor Reese Jones" />
            <LogItem identifier="August Water Sports Campout" date="August 18th - 20th" activity="Altitude H20 Water Park" location="Camp Trevor Reese Jones" />
            <LogItem identifier="August Water Sports Campout" date="August 18th - 20th" activity="Altitude H20 Water Park" location="Camp Trevor Reese Jones" />
            <LogFooter pageCount="1" itemCount="2" />
        </section>
    );
}

function LogHeader(props) {
    return (
        <article className="log-header">
            <div className="header-top">
                <div className="search-bar">
                    <SearchIcon />
                    <input type="text" className="search-input" placeholder="Search for campout date, activity, or location" />
                </div>
                <button className="search-button">Add Campout</button>
                <button className="search-button current-campout-button">Current Campout</button>
                <RefreshIcon />
            </div>
            <div className="header-bottom">
                <h3 className="log-title identifier">Identifier</h3>
                <h3 className="log-title date">Date</h3>
                <h3 className="log-title activity">Activity</h3>
                <h3 className="log-title location">Location</h3>
            </div>
        </article>
    );
}

function LogItem(props) {
    const [logItemHover, setLogItemHover] = useState(false);

    return (
        <article className="log-item" onMouseEnter={() => {setLogItemHover(true)}} onMouseLeave={() => {setLogItemHover(false)}}>
            <p className="log-item-identifier">{props.identifier}</p>
            <p className="log-item-date">{props.date}</p>
            <p className="log-item-activity">{props.activity}</p>
            <p className="log-item-location">{props.location}</p>
            <img className="delete-log-item" src="https://img.icons8.com/windows/32/FFFFFF/trash.png" style={logItemHover ? {'display': 'block'} : {'display': 'none'}}/>
        </article>
    );
}

function LogFooter(props) {
    return (
        <article className="log-footer">
            <div className="log-footer-container">
                <div className="rows">
                    <label className="rows-text" for="rows-select">Rows per page:</label>
                    <select id="rows-select" className="rows-select">
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <p className="log-pages">{props.pageCount} - {props.itemCount} of {props.itemCount}</p>
                <div className="log-arrows">
                    <span className="turn-around"><CaretIcon /></span>
                    <CaretIcon />
                </div>
            </div>
        </article>
    );
}