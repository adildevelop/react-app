import {useEffect, useState} from "react";
import wretch from "wretch";
import EpisodeItem from "./EpisodeItem";
import EpisodeTab from "./EpisodeTab";

function EpisodeList(props) {
    const [currentSeason, setCurrentSeason] = useState('1');
    const [episodes, setEpisodes] = useState({'1': [], '2': [], '3': [], '4': []});

    useEffect(() => {
        let url = 'http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=1&PageSize=100';
        loadEpisodes(url);
    });

    function loadEpisodes(url) {
        if (episodes['1'].length === 0) {
            wretch(url)
                .get()
                .res(res => {
                    res.json().then(data => {
                        let episodesArray = {
                            '1': [],
                            '2': [],
                            '3': [],
                            '4': []
                        };

                        data.data.forEach((current) => {
                            episodesArray[current.season].push(current);
                        });

                        for (const key in episodesArray) {
                            episodesArray[key] = episodesArray[key].sort(function (a, b) {
                                return a.series - b.series;
                            });
                        }

                        setEpisodes(episodesArray);
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    function openSeason(e) {
        setCurrentSeason(e.target.id);
    }

    function renderSeasons() {
        let seasons = [];
        for (const key in episodes) {
            seasons.push(<EpisodeTab
                key={key}
                season={key}
                theme={props.theme}
                active={currentSeason === key}
                openSeason={openSeason}
            />);
        }

        return seasons;
    }

    function renderEpisodes() {
        if (episodes[currentSeason] !== undefined) {
            return episodes[currentSeason].map((current) => {
                return (<EpisodeItem
                    key={current.id}
                    series={current.series}
                    image={current.imageName}
                    name={current.name}
                    premiere={current.premiere}
                    theme={props.theme}
                />);
            });
        } else {
            return null;
        }
    }

    return (
        <div className="EpisodeList">
            <div className="EpisodeTabs">
                {renderSeasons()}
            </div>
            <div className="EpisodeItems">
                {renderEpisodes()}
            </div>
        </div>
    );
}

export default EpisodeList;