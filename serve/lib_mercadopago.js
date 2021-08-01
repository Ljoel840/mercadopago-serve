const mercadopago = require('mercadopago')
const access_token = 'TEST-249990498541732-111921-2816a666f0beff32e1ab99afbc02a2ee-77301215'
// const access_token = 'APP_USR-249990498541732-111921-b776a229899a0a6fbfcda582fa0a4bfc-77301215'
mercadopago.configurations.setAccessToken(access_token)
module.exports = (entrada) => new Promise ((resolve, reject) => {
    mercadopago.payment.save(entrada)
    .then(payment => {
        resolve(payment)
    })
    .catch(error => {
        console.warn(error)
        reject({
            ErrorSDT: {
                ErrorCode: 22,
                ErrorDescription: error.toString()
            }
        })
    })
})


// mercadopago.payment.save(payment_data)
//   .then(function(response) {
//     res.status(response.status).json({
//       status: response.body.status,
//       status_detail: response.body.status_detail,
//       id: response.body.id
//     });
//   })
//   .catch(function(error) {
//     res.status(response.status).send(error);
//   });