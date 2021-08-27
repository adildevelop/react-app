function LocationItem(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"LocationItem " + applyTheme()}>
            <div className="LocationImage">
                <img src={props.image} alt="LocationImage"/>
            </div>
            <div className={"LocationWrapper " + applyTheme()}>
                <h1 className={"LocationName " + applyTheme()}>{props.name}</h1>
                <p className={"LocationInfo " + applyTheme()}>
                    {props.type}{props.measurements ? ' \u00B7 ' + props.measurements : ''}
                </p>
            </div>
        </div>
    );
}

export default LocationItem;