const Character = ({ character }) => {
  return (
    <>
      <div>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
      <br />
    </>
  );
};

export default Character;
