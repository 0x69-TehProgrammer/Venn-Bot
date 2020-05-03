// how to make a super basic config handler <3 | discord.js from line 1-6

require('dotenv').config(); // setting up dotenv which helps you situate out your '.env' file, basically adding in your variables from .env to this file
const discord = require('discord.js'); // adding in the discord.js library to start writing the code in this file
const bot = new discord.Client(); // stating the bot's user (for logging it later!)
const prefix = process.env.prefix // calling/adding in the prefix of your bot from your '.env' file as stated above

// printing Hello, I am Now Online! into your console from line 8-11
bot.on('ready', () => {
  console.log("Hello, I am Now Online!");
}); // telling the machine to write in the console (console is the machines input and output), "Hello, I am Now Online!" which helps you know that the bot has officially started

