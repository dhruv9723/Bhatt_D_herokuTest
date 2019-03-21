var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UPPABABY' , message:'UPPAbaby is an innovative American company with one mission: To make high-quality baby products that fit the needs of your new life as a parent, while appealing to the sense of style you’ve always had. To do this successfully, UPPAbaby draws on a three decades of experience in the juvenile industry and on our own inspirations as parents of young children. We look for ways to make our strollers and baby products lighter, more savvy, easier-to-use, even fun. We explore ways to deliver greater comfort and safety for baby, with convenience and style for Mom and Dad. We even challenge the homogenous look of most baby products, by creating sleek designs and more sophisticated, modern fashions. UPPAbaby strives to deliver the personal attention and customer service that you expect and deserve.'});
});


//dynamic user via router paramaeter
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
