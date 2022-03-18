import SettingsProfile from "./Settings/SettingsProfile";
import SettingsTheme from "./Settings/SettingsTheme";
import SettingsAbout from "./Settings/SettingsAbout";
import SettingsVersion from "./Settings/SettingsVersion";
import ProfileEdit from "./Settings/ProfileEdit";

function Settings(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"Settings " + applyTheme()}>
            {/*<SettingsProfile theme={props.theme} changeTheme={props.changeTheme}/>*/}
            {/*<SettingsTheme theme={props.theme} />*/}
            {/*<SettingsAbout />*/}
            {/*<SettingsVersion />*/}
            <ProfileEdit />
        </div>
    )
}

export default Settings;