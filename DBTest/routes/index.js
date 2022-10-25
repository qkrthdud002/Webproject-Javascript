const express = require('express');
// const db = require('../models/sqlite/db');
// const sql = require('../models/sqlite/todo-sql');
// const tododb = require('../models/mariadb/todo');
const Todo = require('../models/sequelize/todoModel');

const router = express.Router();

/* GET home page. */
// sqlite 사용
// router.get('/', function(req, res, next) {
//   db.executeQuery(sql.selectTodos(), (err, rows)=>{
//     if(err){
//       res.render('index');
//     } else{
//       res.render('index', {todos:rows})
//     }
//   });
// });

// mariadb 사용
// router.get('/', async (req, res) => {
//   const rows = await tododb.selectTodos();
//   res.render('index', {todos:rows});
// });

// sequelize 사용
router.get('/', async (req, res) => {
  const rows = await Todo.findAll();
  res.render('index', {todos:rows});
});

module.exports = router;
