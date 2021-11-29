import './MealPlanning.css';

export function MealPlanner(props) {
    return (
        <main className="meal-planner">
            <ControlBar patrol="Purple" month="August" approved={false} />
            <MealWorkspace />
            <p className="myplate"><span className="hide-on-950">For nutrition tips and help with meal planning, go to </span><a className="myplate-link" href="https://www.myplate.gov/eat-healthy/what-is-myplate" target="_blank" rel="noreferrer">https://www.myplate.gov/eat-healthy/what-is-myplate</a></p>
        </main>
    );
}

function ControlBar(props) {
    return (
        <section className="control-bar">
            <p className="meal-info">{props.patrol} Patrol<span className="hide-on-600"> • {props.month} Campout</span> • <span style={{color: props.approved ? 'green' : 'orangered'}}>{props.approved ? 'Approved' : 'Unapproved'}</span></p>
            <div className="meal-buttons">
                <button className="save-meal">Save Meal Plan</button>
                <button className="finish-plan">Submit For Review</button>
            </div>
        </section>
    );
}

function MealWorkspace(props) {
    return (
        <section className="meal-workspace">
            <textarea className="meal-input"></textarea>
        </section>
    );
}