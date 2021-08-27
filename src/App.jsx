import './App.scss';
import SplashScreen from "./jsx/SplashScreen/SplashScreen";
import Register from "./jsx/Security/Register";
import {Route, Switch, useLocation} from "react-router-dom";
import Auth from "./jsx/Security/Auth";
import Characters from "./jsx/Characters";
import {useEffect, useState} from "react";
import Navigation from "./jsx/Components/Navigation";
import Locations from "./jsx/Locations";
import Episodes from "./jsx/Episodes";
import Settings from "./jsx/Settings";

function App() {
    const location = useLocation();
    const [theme, setTheme] = useState();
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
       setTheme(localStorage.getItem("theme") ?? "Dark");
    }, [setTheme]);

    useEffect(() => {
       switch (location.pathname) {
           case "/":
               setShowNav(false);
               break;
           case "/login":
               setShowNav(false);
               break;
           case "/register":
               setShowNav(false);
               break;
           default:
               setShowNav(true);
       }
    }, [location, setShowNav]);

    function changeTheme() {
        if (theme === "Dark") {
            localStorage.setItem("theme", "Light");
            setTheme("Light");
        } else {
            localStorage.setItem("theme", "Dark");
            setTheme("Dark");
        }
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={(props) => (
                    <SplashScreen {...props} expire="3000" />
                )} />
                <Route path="/register" render={(props) => (
                    <Register {...props} theme={theme} />
                )}/>
                <Route path="/login" render={(props) => (
                    <Auth {...props} theme={theme} />
                )} />
                <Route path="/characters" render={(props) => (
                    <Characters {...props} theme={theme} />
                )} />
                <Route path="/locations" render={(props) => (
                    <Locations {...props} theme={theme} />
                )} />
                <Route path="/episodes" render={(props) => (
                    <Episodes {...props} theme={theme} />
                )} />
                <Route path="/settings" render={(props) => (
                    <Settings {...props} theme={theme} changeTheme={changeTheme} />
                )} />
            </Switch>

            <Navigation theme={theme} show={showNav}/>
        </div>
    );
}

export default App;
