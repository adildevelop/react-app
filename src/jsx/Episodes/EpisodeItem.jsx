function EpisodeItem(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function renderPremiereDate() {
        return (new Date(props.premiere).toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).toString().slice(0, -3));
    }

    return (
        <div className={"EpisodeItem " + applyTheme()}>
            <div className="EpisodeImage">
                <img src={props.image} alt="EpisodeImage"/>
            </div>
            <div className={"EpisodeWrapper " + applyTheme()}>
                <p className={"EpisodeSeries " + applyTheme()}>{"Серия " + props.series}</p>
                <h1 className={"EpisodeName " + applyTheme()}>{props.name}</h1>
                <p className={"EpisodePremiere " + applyTheme()}>
                    {renderPremiereDate()}
                </p>
            </div>
        </div>
    );
}

export default EpisodeItem;