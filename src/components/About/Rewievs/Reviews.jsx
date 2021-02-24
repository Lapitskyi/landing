import React, {useState} from "react"
import ReviewsList from "./ReviewsList/ReviewsList";

import "./Reviews.scss"


let Reviews = (props) => {

    const [user, setUser] = useState({img: "https://via.placeholder.com/200"})
    const [reviews, setReviews] = useState([{
        img: "https://via.placeholder.com/150",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"
    }]);

    let newReviews = React.createRef();
    let imgReviews = React.createRef();

    let addReviews = (e) => {
        e.preventDefault()
        let img = imgReviews.current.src;
        let review = newReviews.current.value;

        if (review !== '') {
            let rev = [...reviews, {img: img, text: review}];
            setReviews(rev);
        }
        newReviews.current.value = '';
    }

    let onchangeReviews = () => {
        let review = newReviews.current.value;
        console.log(review);
    }


    return (
        <div className="reviews">
            <h2 className="reviews__title">Review</h2>

            <ReviewsList reviews={reviews}/>

            <div className="reviews__inner">
                <img className="reviews__img" src={user.img} alt="icon user" ref={imgReviews}/>

                <form className="reviews__form">
                  <textarea className="reviews__text"
                            onChange={onchangeReviews}
                            ref={newReviews}
                            placeholder="Leave a review"/>

                    <button className="reviews__btn btn" onClick={addReviews}>Add</button>
                </form>
            </div>
        </div>
    )
}


export default Reviews;
