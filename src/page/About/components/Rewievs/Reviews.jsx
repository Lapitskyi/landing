import React from "react"
import ReviewsList from "./ReviewsList/ReviewsList";
import userPhoto from "../../../../assets/images/userPhoto.svg"

import "../../scss/Reviews.scss"


let Reviews = (props) => {

    let imgReviews = React.createRef();

    let onAddReviews = (e) => {
        e.preventDefault();
        let userImg = imgReviews.current.src;
        props.addReviews(userImg);
    }

    let onChangeReviews = (e) => {
        let text = e.target.value;
        props.newReviewsText(text);

    }

    return (
        <div className="reviews">
            <h2 className="reviews__title">Review</h2>

            <ReviewsList reviews={props.reviews}/>

            <div className="reviews__inner">
                <img className="reviews__img" src={userPhoto} alt="icon user" ref={imgReviews}/>

                <form className="reviews__form">
                  <textarea className="reviews__text"
                            onChange={onChangeReviews}
                            value={props.reviewText}
                            placeholder="Leave a review"/>

                    <button className="reviews__btn btn" onClick={onAddReviews}>Add</button>
                </form>
            </div>
        </div>
    )
}


export default Reviews;
