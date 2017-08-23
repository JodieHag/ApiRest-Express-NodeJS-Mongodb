'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = Schema({
  name: String,
  surname: String,
  alias: Boolean,
  alias_name: String,
  password: String,
  email: String,
  picture: String,
  city: {
    locality: String,
    administrtive_are_level_1: String,
    administrtive_are_level_2: String,
    country: String,
    postal_code: Number,
    lat: Number,
    lng: Number,
  },
  birth_date: Date,
  bio: String,
  about: String,
  skills: Array,
  genero: {
    type: String,
    enum: ['Agender', 'Andrógino', 'BiGenero', 'FTM', 'Hombre', 'MTF', 'Mujer', 'No-binario', 'Transgénero', 'Transexual', 'No te importa']
  },
  date: {
    type: Date
  },
  visibility: Boolean
});

module.exports = mongoose.model('Users', UsersSchema);
