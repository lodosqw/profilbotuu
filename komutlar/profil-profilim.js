const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "❌ `İsim ayarlanmamış!`";
  else isimYazi = `<:onaytiki:813053491445760000>  \`${isim}\``;
  
  let favorioyun = db.fetch(`pfavorioyun_${message.author.id}`);
  let favoriYazi;
  if (favorioyun == null) favoriYazi = "❌`Oyun ayarlanmamış!`";
  else favoriYazi = `<:onaytiki:813053491445760000> \`${favorioyun}\``;
  
    let favorişarkı = db.fetch(`pfavorişarkı_${message.author.id}`);
  let favorisYazi;
  if (favorişarkı == null) favorisYazi = "❌ `Şarkı ayarlanmamış!`";
  else favorisYazi = `<:onaytiki:813053491445760000> \`${favorişarkı}\``;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = "❌ `Soy İsim ayarlanmamış!`";
  else soyisimYazi = `<:onaytiki:813053491445760000> \`${soyisim}\``;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = "❌ `Cinsiyet ayarlanmamış!`";
  if (cinsiyet == "kız") csYazi = "<:onaytiki:813053491445760000> `Kız`";
  if (cinsiyet == "erkek") csYazi = "<:onaytiki:813053491445760000>`Erkek`";
  if (cinsiyet == "yok") csYazi = "<:onaytiki:813053491445760000> `Belirtmek istemiyor.`";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = "❌ `Yaş ayarlanmamış!`";
  else yasYazi = `<:onaytiki:813053491445760000>\`${yas}\``;
 
  let bayrak = await db.fetch(`bayrak.${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = "❌ `Bayrak Girilmemiş.`";
  else bYazi = `<:onaytiki:813053491445760000> ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`, user.displayAvatarURL({dynamic : true}))
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
.setImage(user.displayAvatarURL({dynamic : true}))
  .setColor('#f6ff00')
    .addField("『 İsim 』", isimYazi)
    .addField("『 Soy isim 』", soyisimYazi)
    .addField("『 Yaş 』", yasYazi)
    .addField("『 Cinsiyet 』", csYazi)
    .addField("『 Bayrak! 』", bYazi)
    .addField("『 Favori Oyun 』", favoriYazi)
    .addField("『 Favori Şarkı 』", favorisYazi)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};