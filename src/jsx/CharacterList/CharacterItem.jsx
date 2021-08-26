function CharacterItem(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function renderGenderAndRace() {
        let gender;
        switch (props.gender) {
            case 0:
                gender = 'Мужской';
                break;
            case 1:
                gender = 'Женский';
                break;
            default:
                gender = 'Бесполый';
                break;
        }

        return props.race + ', ' + gender;
    }

    function renderStatus()
    {
        let status;
        switch (props.status) {
            case 0:
                status = 'Живой';
                break;
            case 1:
                status = 'Мертвый';
                break;
            default:
                status = 'Неизвестно';
                break;
        }

        return status;
    }

    function getStatusClass() {
        let classes;
        switch (props.status) {
            case 0:
                classes = 'Alive';
                break;
            case 1:
                classes = 'Dead';
                break;
            default:
                classes = 'Unknown';
                break;
        }

        return classes;
    }

    return (
        <div className={"CharacterItem " + props.layout}>
            <div className={"CharacterImage " + props.layout}>
                <img src={props.image} alt="MortyImage"/>
            </div>
            <div className={"CharacterInfo " + props.layout}>
                <div className={"CharacterStatus " + getStatusClass()}>{renderStatus()}</div>
                <div className={"CharacterName " + applyTheme()}>{props.name}</div>
                <div className={"CharacterGender " + applyTheme()}>{renderGenderAndRace()}</div>
            </div>
        </div>
    )
}

export default CharacterItem;