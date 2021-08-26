import rick from "../../static/img/splash_screen/rick.png"
import and from "../../static/img/splash_screen/and.png"
import morty from "../../static/img/splash_screen/morty.png"
import auth from "../../static/img/security/auth.svg"
import pass from "../../static/img/security/pass.svg"
import InputType from "../FormTypes/InputType";
import SubmitType from "../FormTypes/SubmitType";
import wretch from "wretch";
import {Link, useHistory} from "react-router-dom";

function Auth(props) {
    let history = useHistory();

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function handleSubmit(e) {
        e.preventDefault();
        wretch("http://173.249.20.184:7001/api/Account/Login").post({
            "userName": e.target.login.value,
            "password": e.target.password.value,
        }).json(res => {
            if (res.succeeded === true) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("refreshToken", res.data.refreshToken);

                history.push('/characters');
            } else {
                console.log(res);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="Auth">
            <div className="AuthContainer">
                <div className="AuthImage">
                    <img src={rick} alt="Rick" />
                    <img src={and} alt="And" />
                    <img src={morty} alt="Morty" />
                </div>
                <form className="AuthForm" onSubmit={handleSubmit}>
                    <InputType icon={auth} name="login" placeholder="Логин" type="text" />
                    <InputType icon={pass} name="password" placeholder="Пароль" type="password" />
                    <SubmitType value="Войти"/>
                </form>
                <div className="AuthNoAccountContainer">
                    У вас еще нет аккаунта?
                    <Link to="/register" className="AuthNoAccount">Создать</Link>
                </div>
            </div>
        </div>
    )
}

export default Auth;