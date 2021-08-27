function SubmitType(props) {
    return (
        <div className="SubmitTypeWrapper">
            <input
                className={props.classes ? "SubmitType " + props.classes : "SubmitType"}
                type="submit"
                value={props.value ? props.value : "Отправить"}
            />
        </div>

    )
}

export default SubmitType;