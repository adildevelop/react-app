import showPass from "../../static/img/security/show-pass.svg"
import {useState} from "react";

function InputType(props) {
    const [passVisible, setPassVisible] = useState(false);

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function renderInput() {
        if (props.type === "password") {
            return <input
                className={props.classes ? "InputType " + applyTheme() + " " + props.classes : "InputType " + applyTheme()}
                name={props.name}
                type={passVisible ? "text" : "password"}
                placeholder={props.placeholder ? props.placeholder : ""}
                required={true}
            />;
        } else {
            return <input
                className={props.classes ? "InputType " + applyTheme() + " " + props.classes : "InputType " + applyTheme()}
                name={props.name}
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder ? props.placeholder : ""}
                required={true}
            />;
        }
    }

    function renderIcon() {
        if (props.icon !== undefined) {
            return (
                <img className="InputTypeIcon" src={props.icon} alt="Icon"/>
            );
        }

        return null;
    }

    function renderShowPassIcon() {
        if (props.type === "password") {
            return (
                <img className="InputTypePassIcon" src={showPass} alt="Icon" onClick={hidePassword}/>
            );
        }

        return null;
    }

    function hidePassword() {
        setPassVisible(!passVisible);
    }

    return (
        <div className="InputTypeContainer">
            <label className={"InputTypeLabel " + applyTheme()}>{props.placeholder}</label>
            <div className={"InputTypeWrapper " + applyTheme()}>
                {renderIcon()}
                {renderInput()}
                {renderShowPassIcon()}
            </div>
        </div>

    )
}

export default InputType;