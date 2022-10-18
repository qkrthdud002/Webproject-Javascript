const express = require('express');
const router = express.Router();
const db = require('../../models/sqlite/db');
const sql = require('../../models/sqlite/todo-sql');

// 할 일 리스트 조회
router.get('/', (req, res)=> {
    db.executeQuery(sql.selectTodos(), (err, rows)=>{
        if(err) {
            res.end();
        } else {
            res.json(rows);
        }
    });
});

// 할 일 추가
router.post('/', (req, res)=>{
    const {job} = req.body;
    db.executeUpdate(sql.insertTodo(job));
    res.json({result:'ok'});
});

// 할 일 삭제
router.delete('/:todoId', (req, res)=>{
    const todoId = req.params.todoId;
    db.executeUpdate(sql.deleteTodo(todoId));
    res.json({result:'ok'});
});

module.exports=router;