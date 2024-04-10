/* 
* apicred Schema
* Author : Konstantins Kolcovs
* (c) 2016, OK Media Group LTD.
* File : apicred.js
*/ 


var mongoose = require('mongoose');
//var db = mongoose.createConnection('mongodb://' + process.env.DBHOST + '/' + process.env.DBNAME);
var db = mongoose.connect(process.env.DBURI, { keepAlive: 30000,
    connectTimeoutMS: 30000,
      useMongoClient : true,
    socketTimeoutMS: 30000,
    promiseLibrary: global.Promise});
var Schema = mongoose.Schema;
//Schema

var apicredSchema = new Schema({
  date : Date,
  host : String,
  txkey : String,
  apid : String,
  target : String,
  type : {type : String, enum : ['req', 'res']},
    xml : String
    
}, {minimize : false, timestamps : true});
mongoose.Promise = global.Promise;
//Return model
module.exports = db.model('xmlog', apicredSchema);
