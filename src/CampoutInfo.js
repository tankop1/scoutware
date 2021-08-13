import './CampoutInfo.css';
import { ReactComponent as ScrollIcon } from './assets/download.svg';
import { Footer } from './Dashboard';

export function CampoutInfo(props) {
    return (
        <main className="campout-info">
            <NextCampout location="Camp Trevor Reeser Jones" date="August 18th - August 20th" activity="Altitude H20 Water Park" notes="Make sure to bring a swimsuit, 50+ spf sunscreen, and a lot of water"/>
            <div className="campout-scroll-container">
                <p>Other Campouts</p>
                <ScrollIcon/>
            </div>
            <div className="campout-item-container">
                <CampoutItem month="September"  location="BSA Camp James Ray" date="September 2nd - September 4th" activity="Group Dynamix Teambuilding and Ropes Course" />
                <CampoutItem month="October"  location="Boy Scout's Camp Wisdom" date="October 5th - October 6th" activity="Trinity Adventure Ropes Course" img="https://trinitytreetops.com/wp-content/uploads/2019/01/Trinity_Promo-20-1024x683.jpg" />
                <CampoutItem month="November"  location="BSA Camp James Ray" date="September 2nd - September 4th" activity="Group Dynamix Teambuilding and Ropes Course" />
                <CampoutItem month="December"  location="Boy Scout's Camp Wisdom" date="October 5th - October 6th" activity="Trinity Adventure Ropes Course" img="https://trinitytreetops.com/wp-content/uploads/2019/01/Trinity_Promo-20-1024x683.jpg" />
                <CampoutItem month="January"  location="BSA Camp James Ray" date="September 2nd - September 4th" activity="Group Dynamix Teambuilding and Ropes Course" />
                <CampoutItem month="February"  location="Boy Scout's Camp Wisdom" date="October 5th - October 6th" activity="Trinity Adventure Ropes Course" img="https://trinitytreetops.com/wp-content/uploads/2019/01/Trinity_Promo-20-1024x683.jpg" />
                <CampoutItem month="March"  location="BSA Camp James Ray" date="September 2nd - September 4th" activity="Group Dynamix Teambuilding and Ropes Course" />
                <CampoutItem month="April"  location="Boy Scout's Camp Wisdom" date="October 5th - October 6th" activity="Trinity Adventure Ropes Course" img="https://trinitytreetops.com/wp-content/uploads/2019/01/Trinity_Promo-20-1024x683.jpg" />
                <CampoutItem month="May"  location="BSA Camp James Ray" date="September 2nd - September 4th" activity="Group Dynamix Teambuilding and Ropes Course" />
            </div>
            <Footer />
        </main>
    );
}

function CampoutTitle(props) {
    return (
        <h1 className="campout-title" style={props.style}>{props.children}</h1>
    );
}

function CampoutButtons(props) {
    return (
        <div className={props.short ? "campout-buttons short-buttons" : "campout-buttons"}>
            <button className="campout-signup">Sign Up</button>
            <button className="campout-meal-planning">Meal Planning</button>
        </div>
    );
}

function NextCampout(props) {
    return (
        <section className="next-campout">
            <div className="next-campout-text">
                <CampoutTitle>UPCOMING CAMPOUT</CampoutTitle>
                <div className="next-campout-desc">
                    <p className="next-desc-line"><span className="next-desc-title">Date</span> {props.date}</p>
                    <p className="next-desc-line"><span className="next-desc-title">Location</span> {props.location}</p>
                    <p className="next-desc-line"><span className="next-desc-title">Activity</span> {props.activity}</p>
                    <p className="next-desc-line"><span className="next-desc-title">Notes</span> {props.notes}</p>
                </div>
                <CampoutButtons/>
            </div>
            <iframe
            title="Google Maps"
            className="next-campout-map"
            style={{border: 0}}
            loading="lazy"
            allowfullscreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCmKtGb67BeoU58Lb6FVJx2thBLygnOVhU&q=${props.location}`}>
            </iframe>
        </section>
    );
}

function CampoutItem(props) {
    return (
        <section className="small-campout-item">
            <div style={{backgroundImage: `url(${props.img ? props.img : 'https://www.switchbacktravel.com/sites/default/files/images/articles/Camping%20Tent%20%28REI%20Kingdom%206%20storing%20door%29.jpg'})`}} className="campout-img"></div>
            <CampoutTitle style={{marginTop: '-90px'}}>{props.month.toUpperCase()} CAMPOUT</CampoutTitle>
            <div className="campout-text">
                <p>{props.date}</p>
                <p>{props.location}</p>
                <p>{props.activity}</p>
            </div>
            <CampoutButtons short={true} />
        </section>
    );
}