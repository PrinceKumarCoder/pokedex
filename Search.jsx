import './Search.css';

function Search(){
 
    return (
        <div className="Search-wrapper">
        <input
              id="pokemon-name-search"
              type="text"
              placeholder="pokemon name...."
              />
        </div>
    )
}

export default Search;