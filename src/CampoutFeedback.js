import './CampoutFeedback.css';
import { CampoutTitle } from './CampoutInfo';
import { Footer } from './Dashboard';
import { ReactComponent as CaretIcon } from './assets/right-arrow.svg';
import { useState } from 'react';
import { SignUpItem } from './SignUp';
import { ReactComponent as StarIcon } from './assets/star.svg';
import { ReactComponent as FilledStarIcon } from './assets/starFilled.svg';

export function CampoutFeedback(props) {
    return (
        <main className="campout-feedback">
            <SelectCampout />
            <FeedbackForm selectedCampout="August Campout" />
            <Footer />
        </main>
    );
}

function SelectCampout(props) {

    const [transitionAmount, setTransitionAmount] = useState(0);

    const moveLeft = () => {

        if (transitionAmount !== 0) {
            setTransitionAmount(transitionAmount - 1050);
        }
    }
    
    const moveRight = () => {
        if (transitionAmount !== 3150) {
            setTransitionAmount(transitionAmount + 1050);
        }
    }

    function SelectCampoutItem(props) {

        const [selected, setSelected] = useState(false);

        return (
            <article className="select-campout-item">
                <img src={props.img ? props.img : 'https://www.switchbacktravel.com/sites/default/files/images/articles/Camping%20Tent%20%28REI%20Kingdom%206%20storing%20door%29.jpg'} alt="Campout Image" className="select-img" />
                <div className="select-text">
                    <CampoutTitle>{props.month.toUpperCase()}</CampoutTitle>
                    <p className="select-activity">{props.activity}</p>
                    <button className={selected ? "select-button selected-button" : "select-button"} onClick={() => setSelected(!selected)}>{selected ? 'Selected Campout' : 'Select Campout'}</button>
                </div>
            </article>
        );
    }

    return (
        <section className="select-campout-container">
            <button className="select-arrow-container select-arrow-left" onClick={moveLeft}>
                <CaretIcon />
            </button>
            <div className="select-campout-frame">
                <div className="select-campout" style={{transform: `translateX(-${transitionAmount}px)`}}>
                    <SelectCampoutItem month="August" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="September" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="October" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="November" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="December" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="January" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="February" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="March" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="April" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                    <SelectCampoutItem month="May" activity="Altitude H20 Water Park" date="August 18th - August 20th" />
                </div>
            </div>
            <button className="select-arrow-container select-arrow-right" onClick={moveRight}>
                <CaretIcon />
            </button>
        </section>
    );
}

function FeedbackForm(props) {

    function FeedbackRatingItem() {
        const [feedbackRating, setFeedbackRating] = useState(0);

        return (
            <div className="feedback-rating-item">
                <button className="rating-star" onClick={e => {e.preventDefault(); setFeedbackRating(1)}}>
                    {feedbackRating > 0 ? <FilledStarIcon /> : <StarIcon />}
                </button>
                <button className="rating-star" onClick={e => {e.preventDefault(); setFeedbackRating(2)}}>
                    {feedbackRating > 1 ? <FilledStarIcon /> : <StarIcon />}
                </button>
                <button className="rating-star" onClick={e => {e.preventDefault(); setFeedbackRating(3)}}>
                    {feedbackRating > 2 ? <FilledStarIcon /> : <StarIcon />}
                </button>
                <button className="rating-star" onClick={e => {e.preventDefault(); setFeedbackRating(4)}}>
                    {feedbackRating > 3 ? <FilledStarIcon /> : <StarIcon />}
                </button>
                <button className="rating-star" onClick={e => {e.preventDefault(); setFeedbackRating(5)}}>
                    {feedbackRating > 4 ? <FilledStarIcon /> : <StarIcon />}
                </button>
            </div>
        )
    }

    return (
        <form className="feedback-form">
            <CampoutTitle>{props.selectedCampout.toUpperCase()} FEEDBACK</CampoutTitle>
            <FeedbackRatingItem />
            <SignUpItem type="text" long={true}>What is one thing that would improve this campout?</SignUpItem>
            <textarea className="feedback-workspace" placeholder="What are your favorite and least favorite parts of this campout? Would you go on this campout again?"></textarea>
        </form>
    );
}

//<p className="select-date">{props.date}</p>