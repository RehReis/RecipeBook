const db = require('mysql2');
const dbConnection = db.CreateConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'RecipesDB'
})

dbConnection.connect();

let getData = () => {
  return new Promise((reject, resolve) => {
    dbConnection.query('SELECT * FROM recipes', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
};

let saveData = ({name, ingredients, portion}) => {
  return new Promise((reject, resolve) => {
    dbConnection.query('INSERT INTO recipes (name, ingredients, portion) VALUES (?, ?, ?)', [name, ingredients, portion], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
};

module.exports = {
  getData,
  saveData
}