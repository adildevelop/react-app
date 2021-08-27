import arrow from "../../static/img/security/arrow.svg";
import arrowLight from "../../static/img/security/arrow-light.svg";
import login from "../../static/img/security/auth.svg";
import pass from "../../static/img/security/pass.svg";
import InputType from "../FormTypes/InputType";
import SubmitType from "../FormTypes/SubmitType";
import wretch from "wretch"
import {Link, useHistory} from "react-router-dom";

function Register(props) {
    let history = useHistory();

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function handleSubmit(e) {
        e.preventDefault();
        wretch("http://173.249.20.184:7001/api/Account/Register").post({
            "userName": e.target.login.value,
            "password": e.target.password.value,
            "firstName": e.target.firstname.value,
            "lastName": e.target.lastname.value,
            "patronymic": e.target.patronymic.value,
        }).json((res) => {
            if (res.succeeded === true) {
                history.push('/login');
            } else {
                console.log(res);
            }
        });
    }

    function renderBackIcon() {
        if (props.theme === "Dark") {
            return <img src={arrow} alt="Back"/>
        } else {
            return <img src={arrowLight} alt="Back"/>
        }
    }

    return (
        <div className={"Register " + applyTheme()}>
            <div className="RegisterContainer">
                <Link to="/login" className="RegisterBack">
                    {renderBackIcon()}
                </Link>
                <h1 className={"RegisterHeader " + applyTheme()}>Регистрация</h1>
                <form className="RegisterForm" onSubmit={handleSubmit}>
                    <InputType theme={props.theme} name="firstname" placeholder="Имя" type="text" />
                    <InputType theme={props.theme} name="lastname" placeholder="Фамилия" type="text" />
                    <InputType theme={props.theme} name="patronymic" placeholder="Отчество" type="text" />
                    <div className={"RegisterFormBreaker " + applyTheme()} />
                    <InputType theme={props.theme} icon={login} name="login" placeholder="Логин" type="text" />
                    <InputType theme={props.theme} icon={pass} name="password" placeholder="Пароль" type="password" />
                    <SubmitType classes="RegisterSubmit" value="Регистрация"/>
                </form>
            </div>
        </div>
    )
}

export default Register;