const Pool = require("pg").Pool;
const pool = new Pool({
  user: "borisjerrar",
  host: "localhost",
  database: "jsonplaceholder",
  password: "",
  port: 5432,
});
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
const getComments = (request, response) => {
    pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
module.exports = {
    getUsers,
    getComments,
    getPosts
}