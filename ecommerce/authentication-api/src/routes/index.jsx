import {
    BrowserRouter,
    Route,
    Switch,Redirect
} from "react-router-dom";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/Signup";
import Banners from "../pages/banners";
import Categories from "../pages/categories/index"
import Cupons from "../pages/cupons";
import Product from "../pages/product";
import Error from "../pages/auth/error";
import Orders from "../pages/orders";
import About from "../pages/about/about";
import Chatbox from "../pages/chat/chatbox";



export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Default */}
                <Route
                    exact
                    path="/"
                >
                    <Redirect to="/login" />
                </Route>
                
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/users">
                    <Signup />
                </Route>
                <Route path="/banners">
                    <Banners />
                </Route>
                <Route path="/cupons">
                    <Cupons />
                </Route>
                <Route path="/products">
                    <Product/>
                </Route>
                <Route path="/categories">
                    <Categories />
                </Route>
                <Route path="/error">
                    <Error />
                </Route>
           
            <Route path="/orders">
                <Orders />
            </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/chat">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
