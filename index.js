import yogurt from "yogurt";

/////////////////////////////////////////////
//     tao falando mal de mim? talvez      //
////////////////////////////////////////////

const token = "" //seu token / ou token de algum selfbot em varios servidores


const webhoook = "" //webhook para receber as logs

var id = "" //seu id

var arraynicks = ["yogurt", "ygor", "iorgute", "giovanni", "always", id] //seus nicks 



const client = new yogurt();

const logger = new yogurt.Gateway(token); //gateway  meu pq sou soft



logger.on('message', (y) => {
if(y.author.bot == true) return;
  arraynicks.forEach((meunick) => {
   if (y.content.includes(meunick)) {
     return client.sendWebhook(
      webhoook,
      `<@${id}> | ${y.author.id}/${y.author.username}#${y.author.discriminator}: ${y.content}`
    );  
   }
  });
});
