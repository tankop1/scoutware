import './Dashboard.css';

export function Dashboard(props) {
    return (
        <div className="dashboard">
            <Welcome name="Tanner" rank="Life" position="Webmaster"/>
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