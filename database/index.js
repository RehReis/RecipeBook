const db = require('mysql2');
const dbConnection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'RecipesDB'
})

dbConnection.connect();

let getData = () => {
  return new Promise((resolve, reject) => {
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
  return new Promise((resolve, reject) => {
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