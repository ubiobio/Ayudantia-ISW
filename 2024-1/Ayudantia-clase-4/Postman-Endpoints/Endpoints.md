
## Peticiones con Postman!

- Petición **post** a `http://localhost:4000/api/pokemon/crear` para crear un pokémon:

![crearPokemon.png](../images/crearPokemon%20Post.png)

- Petición **get** a la ruta `http://localhost:4000/api/pokemon/obtener/:id` para obtener un pokémon por el id:

![obtenerPokemon.png](../images/obtener%20un%20pokemon%20por%20id.png)

- Petición **get** a la ruta `http://localhost:4000/api/pokemon/todos/` para obtener a todos los pokémones:

![obtenerPokemones.png](../images/obtener%20todos%20los%20pokemones.png)

- Petición **get** a la ruta `http://localhost:4000/api/pokemon/aleatorio/` para obtener un pokémon aleatorio:

![obtenerPokeRandom.png](../images/obtener%20un%20pokemon%20aleatorio.png)

- Petición **put** a la ruta `http://localhost:4000/api/pokemon/modificar/:id` para modificar a un pokémon por el id:

![modificarPokemon.png](../images/modificar%20pokemon.png)

- Petición **patch** a la ruta `http://localhost:4000/api/pokemon/modparcial/:id` para modificar parcialmente a un pokémon por el id:

![modificarParcialPokemon.png](../images/modificar%20pokemon%20parcialmente.png)

- Petición **delete** a la ruta `http://localhost:4000/api/pokemon/eliminar/:id` para eliminar a un pokémon por el id:

![eliminarPokemon.png](../images/eliminar%20pokemon.png)

- Petición **delete** a la ruta `http://localhost:4000/api/pokemon/eliminarHistorico/:id` para modificar un parámetro del pokemón, el cual es deleted. Por defecto viene como false, lo cual significa que no esta eliminado y al hacer esta petición le coloca un estado booleano true, el cual indica que fue eliminado pero no se borra directamente de la base de datos:

![eliminarHistoricoPokemon.png](../images/eliminar%20historico%20pokemon.png)