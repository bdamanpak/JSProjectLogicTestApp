import { Box } from "../Box";
import { TextFieldProps } from "./types";


export const TextField = (props: TextFieldProps) => {
    const { label, helpertext, ...restProps } = props;
    const id = crypto.randomUUID();
    return Box({
        element: "div",
        attr: {
            class: "pb-2"
        },
        children: [label ?
            Box({
                element: "label",
                attr: {
                    for: id,
                },
                children: label
            }) : Box({
                element:""
            }),
        Box({ 
            element: "div",
            attr: {
                class: "overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            },
            children: [Box({
                element: "input",
                attr: {
                    id,
                    class: "p-4 h-full w-full bg-transparent",
                    ...restProps
                },
            })]
        })]
    });
};