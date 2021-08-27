import characters from "../../static/img/navigation/characters.svg"
import locations from "../../static/img/navigation/locations.svg"
import episodes from "../../static/img/navigation/episodes.svg"
import settings from "../../static/img/navigation/settings.svg"
import charactersSelected from "../../static/img/navigation/characters-selected.svg"
import locationsSelected from "../../static/img/navigation/locations-selected.svg"
import episodesSelected from "../../static/img/navigation/episodes-selected.svg"
import settingsSelected from "../../static/img/navigation/settings-selected.svg"
import charactersLight from "../../static/img/navigation/characters-selected-light.svg"
import locationsLight from "../../static/img/navigation/locations-selected-light.svg"
import episodesLight from "../../static/img/navigation/episodes-selected-light.svg"
import settingsLight from "../../static/img/navigation/settings-selected-light.svg"
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

function Navigation(props) {
    const location = useLocation();
    const [selectedIcon, setSelectedIcon] = useState(getIconByTheme(charactersSelected, charactersLight));
    const [selected, setSelected] = useState();

    useEffect(() => {
        switch (location.pathname) {
            case "/characters":
                selectCharacters();
                break;
            case "/locations":
                selectLocations();
                break;
            case "/episodes":
                selectEpisodes();
                break;
            case "/settings":
                selectSettings();
                break;
            default:
                selectCharacters();
                break;
        }
    });

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function showNav() {
        if (props.show === true) {
            return "Active";
        }

        return "";
    }

    function getIconByTheme(dark, light) {
        if (props.theme === "Light") return light;

        return dark;
    }

    function selectCharacters() {
        setSelected("Characters");
        setSelectedIcon(getIconByTheme(charactersSelected, charactersLight));
    }

    function selectLocations() {
        setSelected("Locations");
        setSelectedIcon(getIconByTheme(locationsSelected, locationsLight));
    }

    function selectEpisodes() {
        setSelected("Episodes");
        setSelectedIcon(getIconByTheme(episodesSelected, episodesLight));
    }

    function selectSettings() {
        setSelected("Settings");
        setSelectedIcon(getIconByTheme(settingsSelected, settingsLight));
    }

    return (
      <div className={"Navigation " + applyTheme() + " " + showNav()}>
          <Link to="/characters" className="NavigationCharacters">
              <img src={selected === "Characters" ? selectedIcon : characters} alt="Characters" onClick={selectCharacters}/>
          </Link>
          <Link to="/locations" className="NavigationLocations">
              <img src={selected === "Locations" ? selectedIcon : locations} alt="Locations" onClick={selectLocations}/>
          </Link>
          <Link to="/episodes" className="NavigationEpisodes">
              <img src={selected === "Episodes" ? selectedIcon : episodes} alt="Episodes" onClick={selectEpisodes}/>
          </Link>
          <Link to="/settings" className="NavigationSettings">
              <img src={selected === "Settings" ? selectedIcon : settings} alt="Settings" onClick={selectSettings}/>
          </Link>
      </div>
    );
}

export default Navigation;