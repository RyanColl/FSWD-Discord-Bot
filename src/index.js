const { User } = require('discord.io');
const { ClientUser } = require('discord.js');
const Discord = require('discord.js');
const config = require('../config.json');
const client = new Discord.Client();
const fs = require('fs');
const dir = __dirname;
const path = require('path')


const read = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, contents))
    })
}
 



client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    let content = [];
    content.push(message.author.id)
    if (message.content === '!help') {
        // send back "Pong." to the channel the message was sent in
        let msg = message.channel.send(`${"https://developers.google.com/maps/documentation/javascript/adding-a-google-map"}`);
        message.delete( { timeout: 1000 } )
        msg.then((msg) => {
           console.log(msg.guild.members)
        })
        
    }
    if (message.content === "!health") {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`${"Ensure a healthy and productive day by getting out for at least two walks a day and getting up for 5 minutes every hour! It's important we take care of ourselves, its going to be a tough week! #botlyfe"}`);
        message.channel.send(`Also, there is nothing like starting your day with a healthy breakfast. Make sure you get all of the four food groups! I would recommend yogurt and grains with fruit and maybe some eggs! To each there own, stay safe out there today!`)
        message.channel.send(message.author.tag)
        message.delete( { timeout: 1000 } )
    }
    

    if (message.content === '!hw') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`So much hw ${message.author}`);
        message.delete( { timeout: 1000 } )
    }
    if (message.content === '!Artin') {
        message.channel.send(`You have such good jokes Artin`);
        message.delete( { timeout: 1000 } )
    }
    content.forEach(content => console.log(content))
    
});

client.login(config.token);