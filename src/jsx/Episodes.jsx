function Episodes(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Episodes " + applyTheme()}>
            <div className="Message">
                Эта страница находится на стадии разработки.
            </div>
        </div>
    )
}

export default Episodes;