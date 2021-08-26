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
                <h1 className="AuthHeader">Вход</h1>
                <form className="AuthForm" onSubmit={handleSubmit}>
                    <InputType name="login" placeholder="Логин" type="text" />
                    <InputType name="password" placeholder="Пароль" type="password" />

                    <div className="AuthNoAccountContainer">
                        <Link to="/register" className="AuthNoAccount">Нет аккаунта? Зарегистрируйтесь</Link>
                    </div>

                    <SubmitType value="Войти"/>
                </form>
            </div>
        </div>
    )
}

export default Auth;