<<<<<<< Updated upstream
import { getDatabase } from "firebase/database";

// Get a database reference to our posts
const db = getDatabase();
const ref = db.ref('server/saving-data/fireblog/posts');

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
=======
import { getDatabase } from "firebase/database";

// Get a database reference to our posts
const db = getDatabase();
const ref = db.ref('server/saving-data/fireblog/posts');

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
>>>>>>> Stashed changes
}); 