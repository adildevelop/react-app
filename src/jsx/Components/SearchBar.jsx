function SearchBar(props) {
    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function withoutFilter() {
        if (props.filter === false) return "NoFilter"

        return "";
    }

    return (
        <div className={"SearchBar " + applyTheme()}>
            <button className="SearchButton" />
            <input className={"SearchInput " + applyTheme()} type="text" placeholder={props.placeholder} />
            <div className={"SearchFilterWrapper " + withoutFilter()}>
                <div className={"SearchDivider " + applyTheme()} />
                <button className="SearchFilter" />
            </div>
        </div>
    )
}

export default SearchBar;