import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    naturaleza: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    numPokedex: {
        type: Number,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
      }
})

export default mongoose.model('Pokemon', pokemonSchema);