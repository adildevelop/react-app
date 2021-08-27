function SettingsWindow(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"SettingsWindow " + applyTheme()}>
            <div className="Message">
                Эта страница находится на стадии разработки. Но уже при помощи этой кнопки вы можете менять тему :)
            </div>
            <button className="SettingsChangeTheme" onClick={props.changeTheme}>Изменить тему</button>
        </div>
    );
}

export default SettingsWindow;