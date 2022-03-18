import layoutGrid from "../../static/img/layout/layout-grid.svg"
import layoutList from "../../static/img/layout/layout-list.svg"
import {useEffect, useState} from "react";
import CharacterItem from "./CharacterItem";
import wretch from "wretch";

function CharacterList(props) {
    const [layout, setLayout] = useState("List");
    const [layoutImage, setLayoutImage] = useState(layoutGrid);
    const [characters, setCharacters] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let url = 'http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=1&PageSize=100';
        loadCharacters(url);
    });

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function loadCharacters(url) {
        if (characters.length === 0) {
            wretch(url)
                .get()
                .res(res => {
                    res.json().then(data => {
                        setCount(data.totalRecords);
                        setCharacters(data.data.map((current) => {
                            return current;
                        }));
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    function renderCharacters() {
        return characters.map((current) => {
            return (<CharacterItem
                key={current.id}
                layout={layout}
                image={current.imageName}
                status={current.status}
                name={current.fullName}
                race={current.race}
                gender={current.gender}
                theme={props.theme}
            />);
        });
    }

    function handleLayoutButton() {
        if (layout === "List") {
            setLayout("Grid");
            setLayoutImage(layoutList);
        } else {
            setLayout("List");
            setLayoutImage(layoutGrid);
        }
    }

    return (
        <div className="CharacterList">
            <div className="CharacterListHeader">
                <p className={"CharacterListTotal " + applyTheme()}>Всего персонажей: {count}</p>
                <button onClick={handleLayoutButton} className={"CharacterListLayout " + applyTheme()}>
                    <img src={layoutImage} alt="LayoutList"/>
                </button>
            </div>
            <div className={"CharacterItemContainer " + layout}>
                {renderCharacters()}
            </div>
        </div>
    )
}

export default CharacterList;