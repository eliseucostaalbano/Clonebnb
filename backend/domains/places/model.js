import {model, Schema} from 'mongoose';

const PlaceSchema = new Schema({
    dono: { type: Schema.Types.ObjectId, ref: "User" },
    titulo: String,
    cidade: String,
    foto: [String],
    descrição: String,
    extras: String,
    preço: Number,
    checkin: String,
    checkout: String,
    convidados: Number,
})


export default model('Lugar', PlaceSchema);
