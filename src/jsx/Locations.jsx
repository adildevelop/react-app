import SearchBar from "./Components/SearchBar";
import LocationList from "./Locations/LocationList";

function Locations(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Locations " + applyTheme()}>
            <SearchBar theme={props.theme} placeholder="Найти локацию" />
            <LocationList theme={props.theme} />
        </div>
    )
}

export default Locations;