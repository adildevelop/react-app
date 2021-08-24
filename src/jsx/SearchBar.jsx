function SearchBar() {
    return (
        <div className="SearchBar">
            <button className="SearchButton"></button>
            <input className="SearchInput" type="text" placeholder="Найти персонажа"/>
            <button className="SearchFilter"></button>
        </div>
    )
}

export default SearchBar;