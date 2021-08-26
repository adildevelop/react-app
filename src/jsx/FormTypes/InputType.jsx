function InputType(props) {
    return (
        <input
            className={props.classes ? "InputType" + props.classes : "InputType"}
            name={props.name}
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder ? props.placeholder : ""}
        />
    )
}

export default InputType;