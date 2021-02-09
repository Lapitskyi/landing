let state = {
    header: {
        menu: [
            {id: "1", name: "Home", link: "/"},
            {id: "2", name: "Order", link: "/order"},
            {id: "3", name: "Portfolio", link: "/portfolio"},
            {id: "4", name: "Login", link: "/login"},
            {id: "5", name: "Registration", link: "/registration"}
        ],
        social: [
            {id: "1", link: "mailto:mail@gmail.com", icon: "#email", alt: "email"},
            {id: "2", link: "tel:80000000000", icon: "#phone", alt: "phone"},
            {id: "3", link: "https://git-scm.com", icon: "#git", alt: "github"}
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
                {id: "1", title: "Forgot your password?", path: '/reset'},
                {id: "2", title: "Don't have an account yet? Register now", path: '/registration'}
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
                {id: "1", title: "Already have login and password? Sign in", path: '/login'}
            ]
        },

        reset: {
            input: [
                {id: "email", label: "Email", placeholder: "email", btn: "Reset password"},
            ],
            btn: "Reset password",
            link: [
                {id: "1", title: "Already have login and password? Sign in", path: '/login'}
            ]
        }
    }
}


export default state;