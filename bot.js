const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'spoons ';

client.once('ready', () => {
    console.log('spoonsbot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    } else if (command == 'jamie'){
        message.channel.send('fuck me up the arse and call me patricia');
    } else if (command == 'zintor'){
        message.channel.send('monki');
    } else if (command == 'hex'){
        message.channel.send('GOOGLE SHUT THE FUCK UP');
    } else if (command == 'clark'){
        message.channel.send('I like trains');
    } else if (command == 'becs'){
        message.channel.send('abSSSSSSSSSSSSSSoluuuuuuuuuuuuuutely not');
    } else if (command == 'caramel'){
        message.channel.send('https://youtu.be/FSljkfpNUfo');
    } else if (command == 'daddy'){
        message.channel.send('https://media.discordapp.net/attachments/772923307875106816/775085048243421194/Snapchat-1694575404.jpg?width=316&height=611');
    } else if (command == 'invite'){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=744316668318056468&scope=bot&permissions=67144768');
}
});



client.login('NzQ0MzE2NjY4MzE4MDU2NDY4.Xzhc6g.PouqVUXCNkt5hPbkh5IJTYnh8xk');