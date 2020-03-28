require('dotenv').config();


//Mensajes "Motivacionales"

const messages = [
    "Mirate, revisando historias como si no tuvieras cosas que hacer",
    "Hey, no podés pasar todo el día revisando historias de los demás",
    "Creo que tenes cosas que hacer, y vos acá",
    "Sí, muy chidas las historias de otros y toda la onda, pero tenés cosas que hacer",
    "Disculpá que te arruine el rato, pero tenés cosas que hacer, 'aquello' acordate",
    "Tanto que pasaste hablando de terminar tus ondas, solo sos paja",
    "¡Uy si! 'Tomando un descando', no cuenta si lo hacés cada 15 minutos",
    "Vergón, supongamos que ya no tenés nada que hacer, supongamos",
    "Chidas las historias, te comprendo, pero puya, terminá lo que tenés que hacer",
    "Teniendo la oportunidad de desocuparte rápido pero, perdés el tiempo",
    "El día que sin tanta vuelta hagás lo que tenés que hacer, ése día será bueno",
    "¿Sabías que cada vez que organizás tus tiempos se salva un perrito abandonado?",
    "Siempre decís que para mañana, pero, que casualidad, por lo visto nunca es 'mañana'",
    "Bien, es hora de ponernos serios, pensá, ¿Qué tenés que hacer hoy?",
    "Talvéz no vas a llegar a ser el mejor, pero tampoco seás de los peores",
    "No, no soy psicólogo, no necesito serlo para decirte que dejés de perder el tiempo",
    "¿De qué sirve que planiés todo si al final de cuentas nunca hacés las ondas?",
    "¿Sabías que aparte de ver fotos de comida por acá, podés pensar en las cosas pendientes?",
    "No tengo una frase por el momento, estoy descansando. ¡Pajas! Mejor andá terminá 'aquello'",
    "Podría decirte frases bonitas de motivación, pero lo siento, no soy de esa onda de Forex",
    "Mis frases de motivación son un chiste, pero no más que tu organización de tiempo",
    "Dejá de perder el tiempo",
    "No dejés todo para mañana",
    "Seguís perdiendo el tiempo",
    "Tenés cosas que hacer",
    "Todo progresan menos vos",
    "Aprovechá el tiempo",
    "Dejá de poner excusas",
    "¿Qué tareas para hoy?",
    "Después te quejás",
    "No seás incompetente",
    "El tiempo avanza",
    "Si no es hoy, ¿Cuándo?",
    "Hay que hacerle eggs",
    "Después mirás la movie",
    "El dinero no se gana solo",
    "Dejá de peinar la gata",
    "No seás solo bulla",
    "¿Y si hacés algo?",
    "¿De nuevo para mañana?",
    "Hay que hacer la diferencia",
    "Preocupate por ti mismo",
    "No dejés todo a la suerte",
    "No perdás una oportunidad",
    "Mucho tiempo por aća",
    "Organizate bien",
    "Que te de pena perder el time",
    "Ehm, no pongás tantas excusas",
    "Ya mucho IG ¿No?",
    "Suficiente IG por hoy",
    "Ponete serio, dude",
    "Solo excusa, excusa y excusa"
]


//Imágenes "Motivacionales"
const images = [
    'https://cdn140.picsart.com/286770672011211.png',
    "https://www.migatapersa.com/wp-content/uploads/2020/02/gata-meow-meow-enfadada-e1582630484674.png",
    "https://files.genial.guru/files/news/part_92/924660/15864160-g3sF9Ox-1545663517-728-a863a59a17-1546219936.jpg",
    "https://www.debate.com.mx/__export/1573327309940/sites/debate/img/2019/11/09/gato_designado.jpg_1062489978.jpg",
    "https://thumbs.dreamstime.com/b/face-angry-hissing-cat-yellow-eyes-face-angry-hissing-cat-yellow-eyes-house-cat-lowered-ears-153606983.jpg",
    "https://i.imgur.com/4V1ZGtW.jpg"

]


//Credenciales de Twilio.
const config={
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN
}

//Datos del contacto a enviar mensajes
const persona={
    telefono: process.env.TELEFONO,
    nombre: process.env.NOMBRE
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

const client = require('twilio')(config.accountSid,config.authToken)


//Calculamos un número random para elegir un mensaje a enviar.
let msgRandom = getRandom(0,messages.length-1)

//Calculamos una imagen random para elegir un mensaje a enviar.
let imgRandom = getRandom(0,images.length-1)

console.log({msgRandom,imgRandom})


//Enviamos el mensaje
client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: messages[msgRandom],
        to: 'whatsapp:'+persona.telefono,
        mediaUrl:[images[imgRandom]]
    })
    .then(message => console.log(message.sid));

