import { Box } from "../Box"
import { ButtonProps } from "./types"

export const Button = (props: ButtonProps) => {
    return Box({
        element: "button",
        attr: {
            ...props.attr,
            class: "bg-slate-500 w-full px-12 py-4 text-white rounded-xl mt-5 mb-56"
        },
        children: props.children
    });
};