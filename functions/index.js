/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.placeOrder = functions.https.onRequest(async (req, res) => {
    try {
        const order = req.body;
        const db = admin.firestore();
        await db.collection('orders').add(order);

        res.status(200).send({ message: 'Order placed successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to place order.' });
    }
});


