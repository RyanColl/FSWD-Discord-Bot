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


    

    if (message.content === '!hw') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`So much hw ${message.author}`);

    }
    if (message.content === '!Artin') {
        message.channel.send(`You have such good jokes Artin`);
    }
    content.forEach(content => console.log(content))
    
});

client.login(config.token);
