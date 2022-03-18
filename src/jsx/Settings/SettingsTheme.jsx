import theme from "../../static/img/profile/theme.svg";
import themeArrow from "../../static/img/profile/theme-arrow.svg";

function SettingsTheme(props) {

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"SettingsTheme " + applyTheme()}>
            <h3 className="SettingsThemeHeader">Внешний вид</h3>
            <button>
                <img src={theme} alt="Theme"/>
                <div className="SettingsThemeBlock">
                    <p className="SettingsThemeTitle">Темная тема</p>
                    <p className="SettingsThemeStatus">Включена</p>
                </div>
                <img src={themeArrow} alt="Change"/>
            </button>
            <hr />
        </div>
    );
}

export default SettingsTheme;