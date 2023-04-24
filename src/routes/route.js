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


[‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]


Example of a request url -> localhost:3000/movies/2


*/

router.get('/movies', function (req, res) {
     
    res.send(['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'])
});
/*Handle a scenario in problem 2 where if the index is greater than the valid maximum value or smaller that the valid minimum value, a message is returned that tells the user to use a valid index in an error message.
*/

router.get('/movies/:indexNumber',function(req,res){
    let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    if(req.params.indexNumber>=0 && req.params.indexNumber<arr.length){
    res.send(arr[req.params.indexNumber])
    }
    else {
        res.send("use a valid index in an error message")
    }
})


/*Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have attributes - id and name. An example of movies array is 
[ {
 “id”: 1,
 “name”: “The Shining”
}, {
 “id”: 2,
 “name”: “Incendies”
}, {
 “id”: 3,
 “name”: “Rang de Basanti”
}, {
 “id”: 4,
 “name”: “Finding Nemo”
}]

Return the entire array in this api’s response

*/
router.get('/flims',function(req,res){
    const arr =[ {
        'id': 1,
        'name': 'The Shining'
       }, {
    
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }
    ]
    res.send(arr)

})
/*Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
*/
router.get('/flims/:flimId',function(req,res){
    const arr =[ {
        'id': 1,
        'name': 'The Shining'
       }, {
    
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }
    ]
    if (req.params.flimId>0 && req.params.flimId<arr.length){
        res.send(arr.find(x=>x.id==[req.params.flimId]))

    }else{
        res.send("No movie exists with this id")
    }
      
})

   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
 router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let sum = arr.reduce((a,b)=>a+b)
    let arrayPerfectSum = arr[arr.length-1]*(arr[arr.length-1]+1)/2 
    let missingNumber = arrayPerfectSum - sum

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});

//Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
        //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
        let arr= [33, 34, 35, 37, 38]
        let sum = arr.reduce((a,b)=>a+b)
        let arrayPerfectSum = (arr.length+1)*(arr[0]+arr[arr.length-1])/2
        let missingNumber = arrayPerfectSum - sum

        ///LOGIC WILL GO HERE 


        res.send(  { data: missingNumber  }  );
});

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
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   router.post('/players', function (req, res) {


    //LOGIC WILL COME HERE
    let newPlayer =req.body
    players.push(newPlayer)
    if(players.find(x=>x.name === newPlayer.name)){
        return res.send(`${newPlayer.name}  is already exist in players`)
    }
    return res.send(  { data: players , status: true }  )
})






module.exports = router;