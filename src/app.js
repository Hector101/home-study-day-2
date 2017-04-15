//import unirest module for http request
const unirest = require('unirest');
const prompt = require('prompt');
const colors = require('colors/safe');

//start the prompt
prompt.start();

console.log(colors.yellow("Enter the category you wish to get random quotes\n"));
console.log(colors.bgYellow("Tips: 'movies' or 'famous' \n\n"));

prompt.get([{
    name: 'category',
    required: true
}], (err, result)=>{
    if(result.category === 'movies' || result.category === 'famous'){
        unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat="+result.category)
        .header("X-Mashape-Key", "HGt1yD5Z3PmshGmhhSr8nxRBo1j0p1ISynQjsn4rD1bJL8y8GP")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Accept", "application/json")
        .end(function (response) {
            //parse the return json string to json object
            let body = JSON.parse(response.body);
            
            if(response.status === 200){
                console.log(colors.blue('\nRandome Quote: ')+ colors.magenta(body.quote)+' \n');
                console.log(colors.cyan('Author: '+ body.author+' \n'));
            }else{
                console.log(colors.red('Error occurred getting quotes'));
            }
    
        });
    }else{
        console.log(colors.red("\nCategory Entered doesn't exist\n"));
        console.log(colors.grey("Try 'movies or famous'"));
    }
    
});

