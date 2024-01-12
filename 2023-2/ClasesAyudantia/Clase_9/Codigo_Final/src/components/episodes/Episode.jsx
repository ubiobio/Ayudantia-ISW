const Episode = ({ character }) => {
  return (
    <>
      <div>
        <h2>{character.name}</h2>
        <p>{character.episode}</p>
      </div>
      <br />
    </>
  );
};

export default Episode;
