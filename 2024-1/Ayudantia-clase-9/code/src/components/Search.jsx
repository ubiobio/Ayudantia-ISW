import { useState } from "react";
import '../styles/search.css';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch(query)
        }
    }

    return (
        <div className="search-container">
            <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nombre o número pokemón"
            className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Buscar</button>
        </div>
    )
}

export default Search;