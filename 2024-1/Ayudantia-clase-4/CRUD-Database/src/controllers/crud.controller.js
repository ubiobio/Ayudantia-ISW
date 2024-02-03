import Pokemon from '../models/pokemones.model.js'
import crypto from "crypto";

//IMPORTANT: Crear un pokémon
export const crearPokemon = async (req, res) => {
    try {
        const newPokemon = new Pokemon(req.body);
        const PokemonSaved = await newPokemon.save();
        res.status(201).json(PokemonSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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

//IMPORTANT: Obtener todos los pokemones
export const obtenerPokemones = async (req, res) => {
    try {
        const pokemones = await Pokemon.find();
        res.status(200).json(pokemones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//IMPORTANT: Obtener un pokémon aleatorio
export const pokemonAleatorio = async (req, res) => {
    try {
        const randomNum = crypto.randomInt(1, 4);
        const pokemon = await Pokemon.findOne({numPokedex: randomNum})
        if(!pokemon){
            res.status(404).json({
                message: "Pokémon no encontrado",
                data: null
            })
            return;
        }
        
        res.status(200).json({
            message: "Pokémon aleatorio!",
            data: pokemon
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//IMPORTANT: Modificar un pokémon
export const modificarPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = req.body;

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

//IMPORTANT: Modificar parcialmente a un pokémon
export const modificarParcialPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = req.body;

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

//IMPORTANT: Eliminar un pokémon
export const eliminarPokemon = async (req, res) => {
    try {
        const id = req.params.id;

        const poke = await Pokemon.findByIdAndDelete(id);
        
        if(!poke){
            return res.status(404).json("Pokemon no encontrado")
        }

        res.status(200).json(poke)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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
