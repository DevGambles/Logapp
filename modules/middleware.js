var os = require("os");
var hostname = os.hostname();
var middle = async function (req,res,next) {
    res.header('X-App-Node', hostname);
    next();
}
module.exports = middle;