var express = require('express');
var router = express.Router();
const klgIndex  = require("../api/klgIndex");
const count  = require("../api/count");
const shopcart  = require("../api/shopcart");
router.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
})

router.get('/', function(req, res, next) {
  res.render('index',{title:"Express"});
});

router.get("/klgIndex", (req, res) => {
  let data = klgIndex.getData();
  res.json(data);
});

router.get("/count", (req, res) => {
  let data = count.getData();
  res.json(data);
})

router.get("/shopcart", (req, res) => {
  let data = count.getData();
  res.json(data);
})

module.exports = router;
