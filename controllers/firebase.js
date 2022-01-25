
const admin = require("firebase-admin");
const service_key = require("./service_key.json");

admin.initializeApp({
    credential:admin.credential.cert(service_key)
  });



const db =  admin.firestore();



module.exports = db;