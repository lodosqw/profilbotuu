const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Yardım Komutları')
.setTimestamp()
.addField('<:instagramemojisi:830142935483678740> .bayrak', 'Bayrak ayarlar.')
.addField('<a:maviyildiz:793539752858877952> .cinsiyet', 'Cinsiyet ayarlar.')
.addField('<a:maviyildiz:793539752858877952> .İsim', 'İsim ayarlar.')
.addField('<a:maviyildiz:793539752858877952> .Soyisim', 'Bayrak ayarlar.')
.addField('<a:maviyildiz:793539752858877952> .oyun', 'Oyun ayarlar.')
.addField('<a:maviyildiz:793539752858877952> .şarkı', 'Şarkı ayarlar.')
.addField('<a:maviyildiz:793539752858877952> .profilim', 'Profilinizi ayarlarsınız.')
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  