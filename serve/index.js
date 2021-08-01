const express = require('express')
const app = express()
const cors = require('./cors')

app.use(express.json())
app.use(cors)

const router = express.Router()
// const api_pago = require('./api_pago')
// api_pago(router)
let respuesta = {
	error: false,
	codigo: 200,
	mensaje: '',
    parametros: ''
};
// app.post('/mercadopago', function (req, res) {
//     try {
//         respuesta = {
//             error: false,
//             codigo: 200,
//             mensaje: 'Mercadopago',
//             parametros: req.body
//         };
//         const mercadoPago = await require('./lib_mercadoPago')(req.body.pago)
//         res.send(mercadoPago)
//         console.log(mercadoPago)
//         // res.send(respuesta);

//     } catch (error) {
//         res.send(error)
//     }
// });

app.post('/mercadopago', function (req, res) {
        const mercadopago = require('mercadopago')
        const access_token = 'TEST-7641951728543747-073017-f6bfa82320c717f6a694210ed84de328-77301215'
        mercadopago.configurations.setAccessToken(access_token)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Mercadopago',
            parametros: req.body
        };
        mercadopago.payment.save(req.body.pago)
            .then(payment => {
                res.send(payment)
                console.log(payment)
            })
            .catch(error => {
                console.warn(error)
                res.send(error)
            })

});

app.use(function (req, res, next) {
	respuesta = {
		error: true,
		codigo: 404,
		mensaje: 'URL no encontrada',
	};
	res.status(404).send(respuesta);
});

app.use(router)

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
    console.log(`El servidor está iniciado en:${host}:${port}`)

});