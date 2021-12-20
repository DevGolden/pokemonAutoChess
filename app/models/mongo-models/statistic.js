const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ITEMS, PKM} = require('./../enum');

const statisticSchema = new Schema(
    {
      playerId:{
        type: String
      },
      elo:{
        type: Number
      },
      time:{
        type: Number
      },
      name: {
        type: String
      },
      rank:{
        type: Number
      },
      avatar:{
        type: String
      },
      pokemons:[pokemon]
    }
);

const pokemon = new Schema({
  name:{
    type: String,
    enum: Object.values(PKM)
  },
  items:[
    {
      type: String,
      enum: Object.keys(ITEMS)
    }
  ]
});

const Statistic = mongoose.model('Statistic', statisticSchema);
module.exports = Statistic;
