import theme from "../../static/img/profile/theme.svg";
import themeArrow from "../../static/img/profile/theme-arrow.svg";
import arrow from "../../static/img/security/arrow.svg";

function ProfileEdit(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"ProfileEdit " + applyTheme()}>
            <div className="ProfileEditHeader">
                <button>
                    <img src={arrow} alt="Back"/>
                </button>
                <h1>Редактировать профиль</h1>
            </div>
            <div className="ProfileEditAvatar">
                <img src="dsa" alt="Avatar"/>
                <button>Изменить фото</button>
            </div>
            <div className="ProfileEditName">

            </div>
        </div>
    );
}

export default ProfileEdit;