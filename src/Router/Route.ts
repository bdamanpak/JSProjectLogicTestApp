import { Home } from "../Pages/Home/Home"
import { Login } from "../Pages/Login/Login";
import { News } from "../Pages/News/News";
import { Shopping } from "../Pages/Shopping/Shopping";

export const Router = () => {
    switch (window.location.pathname){
        case "/news":
            return News();
        case "/shopping":
            return Shopping();
        case "/login": 
            return Login();
        default: 
            return Home();
    }
}