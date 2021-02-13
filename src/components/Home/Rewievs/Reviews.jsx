import React, {useState} from "react"

import "./Reviews.scss"
import ReviewsList from "./ReviewsList/ReviewsList";


let Reviews = (props) => {

    const [reviews, setReviews] = useState([]);

    let newReviews = React.createRef();
    let imgReviews = React.createRef();

    let addReviews = () => {
        let img = imgReviews.current.src;
        let comment = newReviews.current.value;

        if (comment !== '') {
            let comments = [...reviews, {img: img, text: comment}];
            setReviews(comments);
        }
        newReviews.current.value = '';
    }

    let onchangeReviews = () => {
        let comment = newReviews.current.value;
        console.log(comment);
    }



    return (
        <div className="reviews">
            <div className="reviews__inner">
                <img className="reviews__img" src="https://via.placeholder.com/150" alt="icon user" ref={imgReviews}/>
                <textarea className="reviews__text"
                          onChange={onchangeReviews}
                          ref={newReviews}
                          placeholder="Leave a review"/>

                <button className="reviews__btn btn" onClick={addReviews}>Push</button>
            </div>

            <ReviewsList reviews={reviews}/>
        </div>
    )
}


export default Reviews;
