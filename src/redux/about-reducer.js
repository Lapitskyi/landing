const ADD_REVIEW = 'ADD_REVIEW';
const REVIEW_TEXT = 'REVIEW_TEXT';
const SET_REVIEWS = 'SET_REVIEWS'


let initialState = {
    about: {
        title: "Lorem",
        suptitle: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,temporibus!",
        text: [
            {
                id: 1, text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea\n" +
                    "                    cupiditate sapiente saepe architecto vitae eius odit est, sed vel\n" +
                    "                    voluptatem voluptatibus pariatur perferendis reprehenderit a hic\n" +
                    "                    delectus consequatur? Reprehenderit!\n" +
                    "                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid\n" +
                    "                    perspiciatis doloribus veniam ut sequi! Quos, eaque illum officiis\n" +
                    "                    natus debitis autem iste, veniam ut, praesentium recusandae iure\n" +
                    "                    esse deserunt amet."
            },
            {id: 2, text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"}
        ]
    },

    reviews: [
        {
            id: 1,
            img: "https://via.placeholder.com/150",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"
        },
        {
            id: 2,
            img: "https://via.placeholder.com/150",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"
        },
        {
            id: 3,
            img: "https://via.placeholder.com/150",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,eveniet!"
        },
    ],
    reviewText: ''
}
const aboutReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_REVIEW:
            let text = state.reviewText;

            return {
                ...state,
                reviewText: '',
                reviews: [...state.reviews, {id: 4, img: action.userImg, text: text}]
            }

        case REVIEW_TEXT:
            return {
                ...state, reviewText: action.text
            };

        case SET_REVIEWS:
            return {
                ...state,reviews: [...action.reviews]
            }

        default:
            return state;


    }
}

export const addReviewAC = (userImg) => ({type: ADD_REVIEW, userImg});
export const newReviewTextAC = (text) => ({type: REVIEW_TEXT, text:text});
export const setReviewsAC = (reviews) => ({type:SET_REVIEWS}, reviews)

export default aboutReducer;