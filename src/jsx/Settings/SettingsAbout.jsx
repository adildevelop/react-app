function SettingsAbout(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"SettingsAbout " + applyTheme()}>
            <h3 className="SettingsAboutHeader">О Приложении</h3>
            <p className="SettingsAboutText">Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концентрированной темной материи.</p>
            <hr />
        </div>
    );
}

export default SettingsAbout;