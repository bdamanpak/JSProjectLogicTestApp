import { Box, Button } from "../../Components"

export const Home = () => {
    return Box({
        element: "div",
        attr: {
            class: "flex flex-col justify-center items-center "
        },
        children: [Box({
            element: "img",
            attr: {
                src: "Icons.svg",
                class: "mb-20 mt-40"
            },
            children: ""
        }), Box({
            element: "h1",
            attr: {
                class: "text-center font-mulish text-3xl px-20 font-semibold leading-10 mb-5 text-4xl"
            },
            children: "Lorem ipsum dolor sit, consectetur"
        }), Box({
            element: "p",
            attr: {
                class: "text-center text-lg max-w-xs"
            },
            children: "Lorem ipsum dolor sit amet, consectetur  adipiscin adipiscing elit."
        }), Button({
            children: "START",
            attr: {
                onClick: () => {
                    addEventListener("click", () => {
                        location.assign("/news");
                    })
                }
            }
        })]
    })
}