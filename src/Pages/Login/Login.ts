import { Box, Button, TextField } from "../../Components"


export const Login = () => {
    const user = {
        username: "",
        password: ""
    }; 
    return Box({
        element: "form",
        attr: {
            class: "p-10"
        },
        children: [Box({element: "center", attr: {}, children: Box({
            element: "img", 
            attr: {
                src: "/apple.svg",
                class: "mb-10"
            }
        })}), TextField({label: "Username", onKeyup: (event: Event) => {
            user.username = (event.target as HTMLInputElement).value;
        }}),TextField({label: "Password"}), Button({children: "LOGIN"})]
    })
}