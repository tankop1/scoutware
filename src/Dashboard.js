import './Dashboard.css';
import { Link } from 'react-router-dom';
import { ReactComponent as SignUpIcon } from './assets/new-user.svg';
import { auth } from './App';

function getFirstWord(text) {
    let word = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            return word;
        }
        else {
            word += text[i];
        }
    }
}

export function Dashboard(props) {
    return (
        <div className="dashboard">
            <Welcome name={auth.currentUser && getFirstWord(auth.currentUser.displayName)} rank="Life" position="Webmaster"/>
            <div className="dashboard-items" style={{marginTop: '50px'}}>
                <CampoutItem image="https://i5.walmartimages.com/asr/da857512-049f-4bd3-85da-a41ae206c98d.72667db24ef1835d0efa1caf1492dade.jpeg" date="August 21st, 2021" activity="Altitude H2O Water Park"/>
                <VolunteerItem />
            </div>
            <div className="dashboard-items" style={{marginTop: '200px'}}>
                <ContactItem />
                <CalendarItem />
            </div>

            <Footer />
        </div>
    );
}

// Numbers not supported in font family
function Welcome(props) {
    return (
        <section className="welcome">
            <div className="welcome-text">
                <h1 className="welcome-title">Welcome {props.name}</h1>
                <h3 className="welcome-info">Troop <span style={{fontFamily: 'cursive', fontSize: '1.7rem'}}>570</span> • {props.rank} Rank • {props.position}</h3>
            </div>
            <div className="welcome-img"></div>
        </section>
    );
}

function CampoutItem(props) {

    const campoutStyle = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div className="campout-item-bundle"  style={{marginTop: '-100px'}}>
            <h1 className="item-title">CAMPOUT</h1>
            <section className="campout-item" style={campoutStyle}>
                <div className="campout-item-text">
                    <h3 className="campout-item-date">{props.date}</h3>
                    <h2 className="campout-item-activity">{props.activity}</h2>
                    <Link to="/camping"><button className="campout-item-button">Learn More</button></Link>
                </div>
            </section>
        </div>
    );
}

function VolunteerItem(props) {

    function JobItem(props) {
        return (
            <article className="job-item">
                <img src={props.image} alt="Job Image" className="job-image" />
                <div className="job-text">
                    <h2 className="job-title">{props.title}</h2>
                    <p className="job-info">{props.date} • {props.location}</p>
                    <p className="job-desc">{props.description}</p>
                </div>
                <button className="job-button"><SignUpIcon/></button>
            </article>
        );
    }

    return (
        <div className="volunteer-item-bundle" style={{marginTop: 100}}>
            <h1 className="item-title">VOLUNTEER</h1>
            <section className="volunteer-item">
                <JobItem image="https://designythings.files.wordpress.com/2016/10/libraryweek-littlefreelibrary-7.jpg" title="Tanner's Eagle Project" description="Help Tanner build an outdoor reading area for the Jewish Community Center of Dallas. He can use as much help as he can get!" date="Tuesday, August 18th" location="1234 North Blvd Dallas, TX 76543"/>
                <JobItem image="https://franklinrehab.com/wp-content/uploads/2016/11/yarkwork-800x600-web.jpg" title="Clean Donor's Yard" description="We will be meeting at one of our donor's houses to help clean their yard. Bring any tools you have to cut down trees, clip bushes, and more." date="Sunday, September 2nd" location="1234 Royal Rd Dallas, TX 76543" />
                <JobItem image="https://www.manassasmall.com/wp-content/uploads/sites/6/2019/09/BS-Popcorn-Image-large.jpg" title="Popcorn Fundraiser" description="Meet at the Tom Thumb on Campbell and Coit to sell popcorn to Tom Thumb customers. Make sure to come with a smile!" date="Friday, August 26th" location="1234 Coit Rd Dallas, TX 76543" />
            </section>
        </div>
    );
}

function ContactItem() {
    return (
        <section className="contact-item" style={{marginTop: '-200px'}}>
            <p className="contact-body"><span className="contact-title">Remind</span>@jsldhasf</p>
            <p className="contact-body"><span className="contact-title">Venmo</span>opinuavofcj</p>
            <p className="contact-body"><span className="contact-title">PayPal</span>ksldfcnids</p>
            <p className="contact-body" style={{marginTop: '15px'}}>troopfsz@gmail.com</p>
            <p className="contact-body">scoutmaster@bsatroopfsz.org</p>
            <p className="contact-body">tfc@bsatroopfsz.org</p>
            <p className="contact-body">advancement@bsatroopfsz.org</p>
            <p className="contact-body">payments@bsatroopfsz.org</p>
            <p className="contact-body">committeechair@bsatroopfsz.org</p>
            <p className="contact-title"><a href="https://www.bsatroop570.org/" target="_blank" rel="noreferrer">https://www.bsatroopfsz.org/</a></p>
            <button className="contact-button">More Contacts</button>
        </section>
    );
}

function CalendarItem(props) {
    return (
        <section className="calendar-item" style={{marginTop: 100}}>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=dDU3MGNhbGVuZGFyQGdtYWlsLmNvbQ&amp;color=%237CB342&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=1&amp;showTz=0&amp;showTabs=0&amp;showNav=1" style={{borderWidth: 0, borderRadius: '25px'}} width="1000" height="500" frameborder="0" scrolling="no"></iframe>
        </section>
    );
}

function Footer() {
    return (
      <footer className="footer">
        <p className="copyright">Scoutware 1.0.0 created by <a href="https://tankop1.github.io/personal_website/" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>Tanner Kopel</a> © Troop 570. All rights reserved.</p>
      </footer>
    );
  }