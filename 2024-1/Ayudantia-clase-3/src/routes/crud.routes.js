import express from "express";
import { 
    crearPokemon, 
    obtenerPokemon, 
    modificarPokemon, 
    modificarParcialPokemon, 
    eliminarPokemon,
    pokemonAleatorio,
    obtenerPokemones
} from '../controllers/crud.controller.js';


const router = express.Router();

//Petición post para crear un pokemon
router.post('/crear', crearPokemon);

//Petición get para obtener un pokemon por el id
router.get('/obtener/:id', obtenerPokemon);

//Petición get para traer un pokemon aleatorio
router.get('/aleatorio', pokemonAleatorio);

//Petición get para traer a todos los pokemones
router.get('/todos', obtenerPokemones);

//Petición put para modificar completamente a un pokemon por el id
router.put('/modificar/:id', modificarPokemon);

//Petición patch para modificar parcialmente a un pokemon por el id
router.patch('/modparcial/:id', modificarParcialPokemon);

//Petición delete para eliminar a un pokemon por el id
router.delete('/eliminar/:id', eliminarPokemon);

export default router;