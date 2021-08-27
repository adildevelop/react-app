function SettingsWindow(props) {
    return (
        <div className="SettingsWindow">
            <button className="SettingsChangeTheme" onClick={props.changeTheme}>Темная тема</button>
        </div>
    );
}

export default SettingsWindow;