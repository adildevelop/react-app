function EpisodeItem(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function isActive() {
        if (props.active === true) return "Active";

        return "";
    }

    return (
        <button className={"EpisodeTab " + applyTheme() + " " + isActive()} onClick={props.openSeason}><span id={props.season}>Сезон {props.season}</span></button>
    );
}

export default EpisodeItem;