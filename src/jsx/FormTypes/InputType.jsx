import showPass from "../../static/img/security/show-pass.svg"
import {useState} from "react";

function InputType(props) {
    const [passVisible, setPassVisible] = useState(false);

    function renderInput() {
        if (props.type === "password") {
            return <input
                className={props.classes ? "InputType " + props.classes : "InputType"}
                name={props.name}
                type={passVisible ? "text" : "password"}
                placeholder={props.placeholder ? props.placeholder : ""}
            />;
        } else {
            return <input
                className={props.classes ? "InputType " + props.classes : "InputType"}
                name={props.name}
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder ? props.placeholder : ""}
            />;
        }
    }

    function renderIcon() {
        if (props.icon !== null) {
            return (
                <div className="InputTypeIconWrapper">
                    <img className="InputTypeIcon" src={props.icon} alt="Icon"/>
                </div>
            );
        }

        return null;
    }

    function renderShowPassIcon() {
        if (props.type === "password") {
            return (
                <div className="InputTypeIconWrapper">
                    <img className="InputTypeIcon" src={showPass} alt="Icon" onClick={hidePassword}/>
                </div>
            );
        }

        return null;
    }

    function hidePassword() {
        setPassVisible(!passVisible);
    }

    return (
        <div className="InputTypeContainer">
            <label className="InputTypeLabel">{props.placeholder}</label>
            <div className="InputTypeWrapper">
                {renderIcon()}
                {renderInput()}
                {renderShowPassIcon()}
            </div>
        </div>

    )
}

export default InputType;