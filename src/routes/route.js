const express = require('express');
const router = express.Router();
const jogger = require("../jogger/jogger")
const helper= require("../util/helper")
const format=require("../validator/format")
const mylodash=require("../lodashNew.js")


router.get('/test-me', function (req, res) {
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo("california",5,5,"Nodejs module system")
    format.trim("     functionup     ")
    format.toLowerCase("HUSTLER")
    format.toUpperCase("faizalzehrila")
    mylodash.chunk(["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"],4)
    mylodash.tail([1,3,5,7,9,11,13,15,17,19,21])
    mylodash.union([[12,25,45,89],[12,25,44,77],[12,5,8],[8,13,14],[8,12,44]])
    mylodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    res.send('My first ever api!')
});

router.get('/welcome', function (req, res) {
    jogger.welcome 
    res.send('i am going to  kill you')
});

module.exports = router;