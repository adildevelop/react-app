function SearchBar(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"SearchBar " + applyTheme()}>
            <button className="SearchButton" />
            <input className={"SearchInput " + applyTheme()} type="text" placeholder="Найти персонажа" />
            <div className="SearchFilterWrapper">
                <div className={"SearchBar " + applyTheme()} />
                <button className="SearchFilter" />
            </div>
        </div>
    )
}

export default SearchBar;