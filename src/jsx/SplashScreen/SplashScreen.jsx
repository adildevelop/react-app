import rick from '../../static/img/splash_screen/rick.png';
import and from '../../static/img/splash_screen/and.png';
import morty from '../../static/img/splash_screen/morty.png';
import rickPerson from '../../static/img/splash_screen/rick-person.png';
import mortyPerson from '../../static/img/splash_screen/morty-person.png';
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

function SplashScreen(props) {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/login');
        }, props.expire);
    });

    return (
      <div className="SplashScreen">
          <div className="SplashScreenContainer">
              <img className="Rick" src={rick} alt="Rick"/>
              <img className="And"src={and} alt="And"/>
              <img className="Morty"src={morty} alt="Morty"/>
              <img className="RickPerson"src={rickPerson} alt="RickPerson"/>
              <img className="MortyPerson"src={mortyPerson} alt="MortyPerson"/>
          </div>
      </div>
    );
}

export default SplashScreen;