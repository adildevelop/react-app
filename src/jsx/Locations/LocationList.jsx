import {useEffect, useState} from "react";
import wretch from "wretch";
import LocationItem from "./LocationItem";

function LocationList(props) {
    const [count, setCount] = useState(0);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        let url = 'http://173.249.20.184:7001/api/Locations/GetAll?PageNumber=1&PageSize=10';
        loadLocations(url);
    });

    function applyTheme() {
        if (props.theme === "Light") return "Light";

        return "";
    }

    function loadLocations(url) {
        if (locations.length === 0) {
            wretch(url)
                .get()
                .res(res => {
                    res.json().then(data => {
                        setCount(data.totalRecords);
                        setLocations(data.data.map((current) => {
                            return current;
                        }));
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    function renderLocations() {
        return locations.map((current) => {
            return (<LocationItem
                key={current.id}
                theme={props.theme}
                image={current.imageName}
                name={current.name}
                type={current.type}
                measurements={current.measurements}
            />);
        });
    }

    return (
        <div className="LocationList">
            <div className="LocationListHeader">
                <p className={"LocationListTotal " + applyTheme()}>Всего локаций: {count}</p>
            </div>
            <div className="LocationItemContainer">
                {renderLocations()}
            </div>
        </div>
    );
}

export default LocationList;