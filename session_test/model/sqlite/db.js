// Create Table
exports.createTodoTable = ()=>{
    return `create table if not exists user(
        userId text primary key,
        salt text,
        password test
    )`;
};

// String type은 ''로 감싼다.
exports.insertTodo = (userId, password, salt)=>{
    return `insert into user(userId, password, salt) values('${userId}', '${password}', '${salt}')`
};

exports.selectTodos = (userId)=>{
    return `select * from user where userId='${userId}'`;
};

exports.deleteTodo = (todoId)=>{
    return `delete from todo where todoId=${todoId}`
};