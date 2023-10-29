import { Box } from "../../Components"

export const News = () => {
    return Box({
        element: "div",
        attr: {
            class: "d-flex"
        },
        children: [
            Box({
            element: "div",
            attr: {
                class: "flex justify-between pt-5"
            },
            children: [
                Box({
                element: "img",
                attr: {
                    src: "side_nav.svg"
                },
                children: ""
            }), Box({
                element: "img",
                attr: {
                    src: "Account.svg"
                },
                children: ""
            })]
        }), Box({
            element: "h2",
            attr: {
                class: "pt-6 text-xl"
            },
            children: "News & Community"
        }), Box({
            element: "div",
            attr: {
                class: "flex flex-col justify-center items-center bg-gray-300 mt-6 rounded-2xl shadow-2xl mb-6"
            },
            children: Box({
                element: "img",
                attr: {
                    src: "Icons.svg",
                    class: "py-20"
                },
                children: ""
            })
        }), Box({
            element: "a",
            attr: {
                class: "pt-6 text-xl",
                href: "/shopping"
            },
            children: "New Arrivals"
        }), Box({
            element: "div",
            attr: {
                class: "flex flex-col pt-5 bg-gray-300 shadow-2xl rounded-2xl mt-6"
            },
            children: [Box({
                element: "div",
                attr: {
                    class: "flex justify-end px-3 items-center"
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "love.svg",
                    },
                    children: ""
                })
            }), Box({
                element: "div",
                attr: {
                    class: "flex justify-center items-center"
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "Icons.svg",
                        class: "py-20"
                    },
                    children: ""
                })
            }), Box({
                element: "h3",
                attr: {
                    class: "text-lg px-5 font-bold"
                },
                children: "Lorem ipsum dolor"
            }), Box({
                element: "p",
                attr: {
                    class: "text-md px-5 font-bold text-slate-500 pb-8 mt-2"
                },
                children: "$15.18"
            })]
        }), Box({
            element: "div",
            attr: {
                class: "flex justify-between bg-gray-300 shadow-2xl mt-12 p-8 rounded-3xl"
            },
            children: [
                Box({
                element: "img",
                attr: {
                    src: "home.svg"
                }
            }), Box({
                element: "img",
                attr: {
                    src: "catalog.svg"
                }
            }), Box({
                element: "img",
                attr: {
                    src: "favorite.svg"
                }
            }), Box({
                element: "img",
                attr: {
                    src: "shopping_cart.svg"
                }
            })]
        })]
    })
}