import { useState, useEffect } from 'react';
import { getData } from '../../services/getEpisodes';
import Episode from './Episode';

const Listepisodes = () => {
  const [episodes, setepisodes] = useState([]);

  useEffect(() => {
    getData().then((data) => setepisodes(data));
  }, []);

  return (
    <>
      {episodes.map((character) => (
        <div key={character.id}>
          <Episode character={character} />
        </div>
      ))}
    </>
  );
};

export default Listepisodes;
