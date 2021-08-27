function Locations(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Locations " + applyTheme()}>
        </div>
    )
}

export default Locations;