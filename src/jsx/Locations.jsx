function Locations(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Locations " + applyTheme()}>
            <div className="Message">
                Эта страница находится на стадии разработки.
            </div>
        </div>
    )
}

export default Locations;