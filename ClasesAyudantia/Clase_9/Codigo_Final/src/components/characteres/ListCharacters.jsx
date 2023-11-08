import { useState, useEffect } from 'react';
import { getData } from '../../services/getCharacters';
import Character from './Character';

const ListCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData().then((data) => setCharacters(data));
  }, []);

  return (
    <>
      {characters.map((character) => (
        <div key={character.id}>
          <Character character={character} />
        </div>
      ))}
    </>
  );
};

export default ListCharacters;
