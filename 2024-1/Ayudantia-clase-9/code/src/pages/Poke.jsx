import { useState } from "react";
import { showSuccessAlert, showErrorAlert } from "../helpers/alert.js";
import Search  from '../components/Search.jsx'
import '../styles/poke.css';

function Pokes() {
    const [pokeData, setPokeData] = useState(null);
    const [error, setError] = useState(null);
    const [showCard, setShowCard] = useState(false);

    const pokeFetch = async (poke) => {
        setError(null);

        setShowCard(false);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}`);
            console.log(response)
            if (!response.ok) {
                console.log("Error al buscar al pokémon");
            }

            const data = await response.json();

            showSuccessAlert();


            setTimeout(() => {
                setPokeData(data);

                setShowCard(true);
            }, 1500);

        } catch (error) {
            setError(error.message);

            setPokeData(null);

            showErrorAlert();
        }
    };

    return (
        <main className="container">
            <header>
                <h1 className="name-poke">Pokemón</h1>
            </header>
            <section>
                <Search onSearch={pokeFetch} />
            </section>
            <section>
                {showCard && pokeData && !error && (
                    <article id="card">
                        <header>
                            <h2 className="poke-name">{pokeData.name}</h2>
                        </header>
                        <div className="hp">
                            <span>HP: {pokeData.stats[0].base_stat}</span>
                        </div>
                        <figure>
                            <img src={pokeData.sprites.front_default} alt={pokeData.name} />
                        </figure>
                        <div className="types">
                            {pokeData.types.map((typeInfo, index) => (
                                <span key={index} style={{backgroundColor: typeInfo.type.name === "water" ? "#76c7c0" : "#ff8c00" }}>
                                    {typeInfo.type.name}
                                </span>
                            ))}
                        </div>
                        <div className="stats">
                            <p><strong>{pokeData.stats[1].base_stat}</strong><br />Attack</p>
                            <p><strong>{pokeData.stats[2].base_stat}</strong><br />Defense</p>
                            <p><strong>{pokeData.stats[5].base_stat}</strong><br />Speed</p>
                        </div>
                    </article>
                )}
            </section>
        </main>
    )
}

export {Pokes};