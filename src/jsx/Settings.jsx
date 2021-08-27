import SettingsWindow from "./Settings/SettingsWindow";

function Settings(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Settings " + applyTheme()}>
            <SettingsWindow theme={props.theme} changeTheme={props.changeTheme}/>
        </div>
    )
}

export default Settings;