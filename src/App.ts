import { Layout } from "./Components"
import { Router } from "./Router";

export const App = () => {
    return Layout({children: Router()});
};