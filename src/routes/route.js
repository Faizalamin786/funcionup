const express = require('express');
const router = express.Router();
const jogger = require("../jogger/jogger")
const helper= require("../util/helper")
const format=require("../validator/format")
const mylodash=require("../lodashNew.js");
const { functions } = require('lodash');


router.get('/test-me', function (req, res) {
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo("california",5,5,"Nodejs module system")
    format.trim("     functionup     ")
    format.toLowerCase("HUSTLER")
    format.toUpperCase("faizal")
    mylodash.chunk(["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"],4)
    mylodash.tail([1,3,5,7,9,11,13,15,17,19,21])
    mylodash.union([[12,25,45,89],[12,25,44,77],[12,5,8],[8,13,14],[8,12,44]])
    mylodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    res.send('My first ever api!')
});

router.get('/welcome', function (req, res) {
    jogger.welcome 
    res.send('welcome to my function')
});

/*Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
	
Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

*/
router.get('/movies',function(req,res){
    res.send(['rang de basanti','the shining','lords of ring','my name is khan'])
})

router.get('/movies/:indexNumber',function(req,res){
    let arr = ['rang de basanti','the shining','lords of ring','my name is khan']
    res.send (arr[req.params.indexNumber])
})




let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]


   router.post('/players', function (req, res) {


       //LOGIC WILL COME HERE
       let Newplayer = req.body
       if(players.find(x=>x.name==Newplayer.name)){
           return res.send(`${Newplayer.name} is already exist`)
        }else{
        players.push(Newplayer)
        }
       res.send(  { data: players , status: true }  )
   })
  



module.exports = router;