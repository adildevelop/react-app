function SettingsVersion(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"SettingsVersion " + applyTheme()}>
            <h3 className="SettingsVersionHeader">Версия приложения</h3>
            <p className="SettingsVersionText">Rick & Morty v1.0.0</p>
        </div>
    );
}

export default SettingsVersion;