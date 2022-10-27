var express = require('express');

var router = express.Router();



/* GET Computation page. */

router.get('/', function(req,res,next) {

    var num1 = Math.floor(Math.random() * 10);

    var num2 = Math.floor(Math.random() * 10);

    var num3 = Math.floor(Math.random() * 10);

    var num4 = Math.floor(Math.random() * 10);

    var imulFunction = Math.imul(num1,num2);

    var logFunction = Math.log(num3);

    var log10Function = Math.log10(num4);



    res.render('computation',

    {

        title: 'Prudhvi Chigurupati computing functions',

        num1: num1,

        num2: num2,

        num3: num3,

        num4: num4,

        imul: imulFunction,
        log: logFunction,

        log10: log10Function,

       

     });



    });




    module.exports = router;