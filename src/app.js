//import unirest module for http request
const unirest = require('unirest');


unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous")
.header("X-Mashape-Key", "HGt1yD5Z3PmshGmhhSr8nxRBo1j0p1ISynQjsn4rD1bJL8y8GP")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (response) {
    //parse the return json string to json object
    let body = JSON.parse(response.body);
    
    if(response.status === 200){
        console.log('Randome Quote: '+ body.quote+' \n');
        console.log('Author: '+ body.author+' \n');
    }else{
        console.log('Error occurred getting quotes');
    }
  
});