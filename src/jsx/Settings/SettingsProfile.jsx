import arrow from "../../static/img/security/arrow.svg";
import defaultAvatar from "../../static/img/profile/default.jpeg";
import {useEffect, useState} from "react";
import wretch from "wretch";

function SettingsProfile(props) {
    const [profile, setProfile] = useState();

    useEffect(() => {
       let url = "http://173.249.20.184:7001/api/Account/GetProfile?userName=adiltest";
       loadProfile(url);
    }, []);

    function loadProfile(url) {
        wretch(url)
            .get()
            .json(res => {
                console.log(res.data);
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function getAvatar() {
        if (profile !== undefined) {
            return profile.avatar ? profile.avatar : defaultAvatar;
        }
    }

    function renderName() {
        if (profile !== undefined) {
            return profile.firstName + " " + profile.lastName;
        }
    }

    function renderLogin() {
        if (profile !== undefined) {
            return profile.firstName;
        }
    }

    return (
        <div className={"SettingsProfile " + applyTheme()}>
            <div className="SettingsHeader">
                <button>
                    <img src={arrow} alt="Back"/>
                </button>
                <h1>Настройки</h1>
            </div>
            <div className="SettingsProfileInfo">
                <div className="SettingsProfileInfoBlock">
                    <img src={getAvatar()} alt="ProfileLogo"/>
                    <div className="SettingsProfileNameBlock">
                        <p className="SettingsProfileName">{renderName()}</p>
                        <p className="SettingsProfileLogin">{renderLogin()}</p>
                    </div>
                </div>
                <button>Редактировать</button>
                <hr />
            </div>
        </div>
    );
}

export default SettingsProfile;