import './App.css';

import { useState, useEffect } from 'react';

async function getData() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results;
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData().then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      <h1>Lista de mis personajes de Rick & Morty</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.species}</p>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
