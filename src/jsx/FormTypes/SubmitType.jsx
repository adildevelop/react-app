function SubmitType(props) {
    return (
        <input
            className={props.classes ? "SubmitType" + props.classes : "SubmitType"}
            type="submit"
            value={props.value ? props.value : "Отправить"}
        />
    )
}

export default SubmitType;