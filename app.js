const express = require('express');
const app = express();
require('dotenv').config();

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
const client = require('twilio')(config.accountSid,config.authToken)


//Función para facilitar el envío de mensajes.
const enviarMensaje = (telefono,texto) =>{
    client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: texto,
        to: 'whatsapp:'+telefono,
    })
}

app.use(express.urlencoded())


app.post('/',(req,res)=>{
    let {body} = req

    //Este se ejecutará cuando el usuario lea nuestro mensaje.
    if(body.MessageStatus==="read"){
        enviarMensaje(persona.telefono,`Hola ${persona.nombre} *RESPONDEME*`);
    }


    //Este se ejecutará cuando recibamos un mensaje
    if(body.SmsStatus==='received'){
        enviarMensaje(persona.telefono,`Hola ${persona.nombre} muchas gracias por tu respuesta: ${body.Body}`);
    }

    res.send('hola')
})

app.listen(process.env.API_PORT,()=>console.log('Corriendo en '+process.env.API_PORT))