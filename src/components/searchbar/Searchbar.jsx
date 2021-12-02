import style from './Searchbar.module.scss';

const Searchbar = () => {
    return (
        <div id="searchSection">
            <div id="searchBar">
                <input type="text" id="search" placeholder="Search for a city" autocomplete='off' />
                <img src="" alt="search-icon" id="searchIcon" />
            </div>
            <div id="results"></div>
        </div>
    )
};

export default Searchbar;