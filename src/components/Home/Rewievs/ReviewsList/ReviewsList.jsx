import React from "react"
import "../Reviews.scss"
import ReviewsItem from "./ReviewsItem/ReviewsItem";

let ReviewsList = (props) =>{

    let itemArray =  props.reviews.map((item, index) =>
        <ReviewsItem
        key={index.toString()}
        img={item.img}
        text={item.text}

        />
       )

    return(
        <ul className="reviews__list">
            {itemArray}
        </ul>
    )
}




export default ReviewsList;