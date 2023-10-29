import { Box } from "../Box"
import { LayoutProps } from "./types";

export const Layout = (props: LayoutProps) => {
    return Box({
        element: "div",
        attr:{
            class : "max-h-xl bg-gray-100 max-w-lg mx-auto p-5 rounded-2xl mt-10"
        },
        children: props.children
    });
};
