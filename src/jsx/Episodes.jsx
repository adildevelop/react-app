function Episodes(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Episodes " + applyTheme()}>
        </div>
    )
}

export default Episodes;