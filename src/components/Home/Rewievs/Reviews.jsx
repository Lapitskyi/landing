import React, {useState} from "react"

import "./Reviews.scss"


let Reviews = (props) => {

    const [reviews, setReviews] = useState([]);

    let newReviews = React.createRef();
    let imgReviews = React.createRef();

    let addReviews = () => {
        let img = imgReviews.current.src;
        let comment = newReviews.current.value;

        if (comment != '') {

            let comments = [...reviews, {img: img, text: comment}];
            setReviews(comments);
        }
        newReviews.current.value = '';
    }

    let onchangeReviews = () => {
        let comment = newReviews.current.value;
    }

    let itemArray =  reviews.map((item) =>
        <li className="reviews__list-item" >
            <img src={item.img} alt=""/>
            {item.text}
        </li>)

    return (
        <div className="reviews">
            <div className="reviews__inner">
                <img className="reviews__img" src="https://via.placeholder.com/150" alt="icon user" ref={imgReviews}/>
                <textarea className="reviews__text"
                          onChange={onchangeReviews}
                          ref={newReviews}
                          placeholder="Что у вас нового?"/>

                <button className="rewievs__btn" onClick={addReviews}>Push</button>
            </div>

            <ul className="reviews__list">
                {itemArray}

            </ul>
        </div>
    )
}


export default Reviews;
