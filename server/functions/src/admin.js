const admin = require("firebase-admin");
// Creates a client
admin.initializeApp();
const db = admin.firestore();

module.exports = {admin, db};
