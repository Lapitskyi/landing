let state = {
    header: {
        menu: [
            {id: 1, name: "Home", link: "/"},
            {id: 2, name: "About", link: "/about"},
            {id: 3, name: "Order", link: "/order"},
            {id: 4, name: "Portfolio", link: "/portfolio"},
            {id: 5, name: "Login", link: "/login"},
            {id: 6, name: "Registration", link: "/registration"}
        ],
        social: [
            {id: 1, link: "mailto:mail@gmail.com", icon: "#email", alt: "email"},
            {id: 2, link: "tel:80000000000", icon: "#phone", alt: "phone"},
            {id: 3, link: "https://git-scm.com", icon: "#git", alt: "github"}
        ]
    },

    formAuth: {
        login: {
            input: [
                {id: "email", label: "Username or email", placeholder: "email"},
                {id: "password", label: "Password", placeholder: "password"}
            ],
            btn: "Sing in",
            link: [
                {id: 1, title: "Forgot your password?", path: '/reset'},
                {id: 2, title: "Don't have an account yet? Register now", path: '/registration'}
            ]
        },

        registration: {
            input: [
                {id: "email", label: "Email", placeholder: "email"},
                {id: "password", label: "Password", placeholder: "password"},
                {id: "repassword", label: "Repassword", placeholder: "repassword"}
            ],
            btn: "Sing Up",
            link: [
                {id: 1, title: "Already have login and password? Sign in", path: '/login'}
            ]
        },

        reset: {
            input: [
                {id: "email", label: "Email", placeholder: "email", btn: "Reset password"},
            ],
            btn: "Reset password",
            link: [
                {id: 1, title: "Already have login and password? Sign in", path: '/login'}
            ]
        }
    },

    aboutPage: {
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

    portfolioPage: [
        {
            id: "web",
            title: "Web",
            item: [
                {
                    id: "1",
                    img: "https://via.placeholder.com/150",
                    text: "Web-text",
                    alt: "Web-photo"
                },
                {
                    id: "1",
                    img: "https://via.placeholder.com/150",
                    text: "Web-text",
                    alt: "Web-photo"
                },
            ]
        },
        {
            id: "desing",
            title: "Desing",
            item: [
                {
                    id: "1",
                    img: "https://via.placeholder.com/150",
                    alt: "Desing-photo",
                    text: "Desing-text",
                },
                {
                    id: "2",
                    img: "https://via.placeholder.com/150",
                    alt: "Desing-photo",
                    text: "Desing-text",
                },
            ]
        }


    ]
}


export default state;