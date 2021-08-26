import characters from "../../static/img/navigation/characters.svg"
import places from "../../static/img/navigation/places.svg"
import episodes from "../../static/img/navigation/episodes.svg"
import settings from "../../static/img/navigation/settings.svg"
import charactersSelected from "../../static/img/navigation/characters-selected.svg"
import placesSelected from "../../static/img/navigation/places-selected.svg"
import episodesSelected from "../../static/img/navigation/episodes-selected.svg"
import settingsSelected from "../../static/img/navigation/settings-selected.svg"
import charactersLight from "../../static/img/navigation/characters-selected-light.svg"
import placesLight from "../../static/img/navigation/places-selected-light.svg"
import episodesLight from "../../static/img/navigation/episodes-selected-light.svg"
import settingsLight from "../../static/img/navigation/settings-selected-light.svg"
import {useState} from "react";

function Navigation(props) {
    const [selected, setSelected] = useState("Characters");
    const [selectedIcon, setSelectedIcon] = useState(getIconByTheme(charactersSelected, charactersLight));

    function applyTheme() {
        if (props.theme === "Light") return "Light";

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

    function selectPlaces() {
        setSelected("Places");
        setSelectedIcon(getIconByTheme(placesSelected, placesLight));
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
      <div className={"Navigation " + applyTheme()}>
          <div className="NavigationCharacters">
              <img src={selected === "Characters" ? selectedIcon : characters} alt="Characters" onClick={selectCharacters}/>
          </div>
          <div className="NavigationPlaces">
              <img src={selected === "Places" ? selectedIcon : places} alt="Places" onClick={selectPlaces}/>
          </div>
          <div className="NavigationEpisodes">
              <img src={selected === "Episodes" ? selectedIcon : episodes} alt="Episodes" onClick={selectEpisodes}/>
          </div>
          <div className="NavigationSettings">
              <img src={selected === "Settings" ? selectedIcon : settings} alt="Settings" onClick={selectSettings}/>
          </div>
      </div>
    );
}

export default Navigation;