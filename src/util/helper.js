const DateNew = new Date()
const month = ["jan","feb","mar","april","may"]
function printDate(){
    console.log(DateNew.getDate())
}
 //printDate()
function printMonth(){
    console.log(month[DateNew.getMonth()])
}
// printMonth()
//- getgeBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	

function getBatchInfo(batchName,week,dAy,topic){
    console.log(`${batchName}, W${week}D${dAy} ,  ${topic} `)
}
 //getBatchInfo("california",5,5,"Nodejs module system")
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo