function SearchBar(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    return (
        <div className={"SearchBar " + applyTheme()}>
            <button className="SearchButton"></button>
            <input className={"SearchInput " + applyTheme()} type="text" placeholder="Найти персонажа"/>
            <button className="SearchFilter"></button>
        </div>
    )
}

export default SearchBar;