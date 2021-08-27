import SearchBar from "./Components/SearchBar";
import CharacterList from "./Characters/CharacterList";

function Characters(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Characters " + applyTheme()}>
            <SearchBar theme={props.theme} placeholder="Найти персонажа" />
            <CharacterList theme={props.theme} />
        </div>
    )
}

export default Characters;