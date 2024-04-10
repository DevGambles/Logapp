var express = require('express');
var LogEntry = require('../models/logentry');
var xmLog = require('../models/xmlog');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', async (req,res) => {
  var entry = new LogEntry({
    date : new Date(),
    host : req.body.host,
    txkey : req.body.txkey,
    level : req.body.level,
    msg : req.body.msg
  });
  var x = await entry.save();
  res.json({entry : x._id});
})
router.post('/xml', async (req,res) => {
  var entry = new xmLog({
    date : new Date(),
    host : req.body.host,
    txkey : req.body.txkey,
    type : req.body.type,
    target : req.body.target,
    apid : req.body.apid,
    xml : req.body.xml
  });
  var x = await entry.save();
  res.json({entry : x._id});
})

module.exports = router;
