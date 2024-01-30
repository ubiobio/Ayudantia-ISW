
## Reto de la clase!

Si bien se implemento el **eliminar un pokémon de forma histórica**, lo cual quiere decir que no se borra de la base de datos, si no que se mantiene en la base de datos y se compone de un estado booleano false que viene por defecto.

### Código de eliminar de forma histórica:
```js
//IMPORTANT: Eliminar un pokémon con registro historico
export const eliminarPoke = async (req, res) => {
    try {
        const id = req.params.id;
        const poke = await Pokemon.findById(id);
        if(!poke){
            return res.status(404).json("Pokemon no encontrado")
        }
        const pokeDeleted = await Pokemon.findByIdAndUpdate(
            id,
            {$set: {deleted: true}},
            {new: true}
        );
        res.status(200).json(pokeDeleted)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```
### Lo que deben hacer es lo siguiente

Modificar el buscar pokémon por id, a la hora de buscar un pokémon quiero que verifique si el estado **deleted es true o false**.

- Si deleted es true, indicar que el pokémon no se encontró.
- Si deleted es false, indicar al pokémon.

Modificar este código de buscar pokémon por id (petición get):

```js
//IMPORTANT: Obtener un pokémon por el id
export const obtenerPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = await Pokemon.findById(id)
        if(!pokemon){
            res.status(404).json({
                message: "Pokémon no encontrado",
                data: null
            })
            return;
        }

        res.status(200).json({
            message: "Pokémon encontrado!",
            data: pokemon
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```

- Modificar el traer todos los pokémones, quiero que me traiga solo los que tienen deleted: false, eso quiere decir que quiero que me traiga los que aun siguen creados y no borrados con el deleted: true.

Modificar este código de traer a todos los pokémones (petición get):

```js
//IMPORTANT: Obtener todos los pokemones
export const obtenerPokemones = async (req, res) => {
    try {
        const pokemones = await Pokemon.find();
        res.status(200).json(pokemones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```

Cambiar el modificar pokémon (petición put), para que si uno quiere modificar un pokémon, me verifique si deleted es false, si es así puedo modificarlo.

- Tip: A la hora de buscar primero el pokémon por el id, nos traerá a todo el pokémon (en caso de que exista), en caso contrario debería soltar un pokémon no encontrado.
- Una vez encontrado el pokémon, deberían verificar si el deleted es true o false.

Cambiar el código Modificar pokémon (petición put):

```js
//IMPORTANT: Modificar un pokémon
export const modificarPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = req.body

        const poke = await Pokemon.findByIdAndUpdate(id, pokemon, {new: true});

        if(!poke){
            res.status(404).json({
                message:"Pokémon no encontrado",
                data: null
            })
            return;
        }

        res.status(200).json({
            message: "Pokémon actualizado correctamente!",
            data: poke
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```