'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the your name'
  },
  mobile: {
    type: String,
    required: 'Kindly enter the your mobile number'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);