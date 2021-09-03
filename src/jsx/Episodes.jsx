import SearchBar from "./Components/SearchBar";
import EpisodeList from "./Episodes/EpisodeList";

function Episodes(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Episodes " + applyTheme()}>
            <SearchBar placeholder="Найти эпизод" filter={false} theme={props.theme}/>
            <EpisodeList theme={props.theme}/>
        </div>
    )
}

export default Episodes;