import InputType from "../FormTypes/InputType";
import SubmitType from "../FormTypes/SubmitType";
import wretch from "wretch"
import {Link, useHistory} from "react-router-dom";

function Register() {
    let history = useHistory();

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

    return (
        <div className="Register">
            <div className="RegisterContainer">
                <h1 className="RegisterHeader">Регистрация</h1>
                <form className="RegisterForm" onSubmit={handleSubmit}>
                    <InputType name="login" placeholder="Логин" type="text" />
                    <InputType name="password" placeholder="Пароль" type="password" />
                    <InputType name="firstname" placeholder="Фамилия" type="text" />
                    <InputType name="lastname" placeholder="Имя" type="text" />
                    <InputType name="patronymic" placeholder="Отчество" type="text" />

                    <div className="RegisterHasAccountContainer">
                        <Link to="/login" className="RegisterHasAccount">Есть аккаунт? Войдите</Link>
                    </div>

                    <SubmitType value="Регистрация"/>
                </form>
            </div>
        </div>
    )
}

export default Register;