import SearchBar from "./Components/SearchBar";
import CharacterList from "./CharacterList/CharacterList";

function Characters(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Characters " + applyTheme()}>
            <SearchBar theme={props.theme} />
            <CharacterList theme={props.theme} />
        </div>
    )
}

export default Characters;