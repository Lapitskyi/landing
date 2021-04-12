import React from "react"
import {connect} from "react-redux";
import Reviews from "./Reviews";
import {addReviewAC, newReviewTextAC, setReviewsAC} from "../../../../redux/about-reducer";


let mapStateToProps = (state) => {

    return {
        reviews: state.aboutPage.reviews,
        reviewText: state.aboutPage.reviewText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        newReviewsText: (text) => {
            dispatch(newReviewTextAC(text));
        },
        addReviews: (userImg) => {
            dispatch(addReviewAC(userImg))
        },
        setReviews: (reviews) =>{
            dispatch(setReviewsAC(reviews))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
