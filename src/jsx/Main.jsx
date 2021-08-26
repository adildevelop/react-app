import SearchBar from "./Components/SearchBar";
import CharacterList from "./CharacterList/CharacterList";
import Navigation from "./Components/Navigation";

function Main(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Main " + applyTheme()}>
            <SearchBar theme={props.theme} />
            <CharacterList theme={props.theme} />
            <Navigation theme={props.theme} />
        </div>
    )
}

export default Main;