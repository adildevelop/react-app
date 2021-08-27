import './App.scss';
import SplashScreen from "./jsx/SplashScreen/SplashScreen";
import Register from "./jsx/Security/Register";
import {Route} from "react-router-dom";
import Auth from "./jsx/Security/Auth";
import Characters from "./jsx/Characters";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState("Dark");

    function changeTheme() {
        if (theme === "Dark") {
            setTheme("Light")
        } else {
            setTheme("Dark");
        }
    }

    return (
      <div className="App">
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
      </div>
    );
}

export default App;
