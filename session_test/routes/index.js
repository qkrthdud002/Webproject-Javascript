var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userId != undefined)
    res.render('adminCoffee', { title: 'Express', userId:req.session.userId });
  else
    res.render('adminCoffee', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render("home")
});

router.get('/adminLogin', function(req, res, next){
  res.render('adminLogin')
})

router.get('/adminCoffee', function(req, res, next){
  res.render('adminCoffee')
})

router.get('/home', function(req, res, next){
  res.render('home')
})

router.get('/coffee', function(req, res, next){
  res.render('coffee')
})

router.get('/smoothie', function(req, res, next){
  res.render('smoothie')
})

router.get('/ade', function(req, res, next){
  res.render('ade')
})

router.get('/tea', function(req, res, next){
  res.render('tea')
})

router.get('/juice', function(req, res, next){
  res.render('juice')
})

router.get('/bubble', function(req, res, next){
  res.render('bubble')
})

router.get('/sideMenu', function(req, res, next){
  res.render('sideMenu')
})


module.exports = router;
