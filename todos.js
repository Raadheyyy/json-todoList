const fs = require('fs');

var addTodo = (title) => {
    var todos = fetchTodos();
    var todo = {
        title
    };

    var duplicatetodos  = todos.filter((todo) => todo.title === title);
    
    if(duplicatetodos.length === 0){
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};

var deleteTodo = (title) =>{
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);

    return todos.length !== filteredtodos.length;
};

var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title === title);
    return filteredtodos[0];
};

var listTodos = () => {
    return fetchTodos();
};

var fetchTodos = () => {
    try{
        var todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    } catch(e){
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodos = (todo) => {
    console.log(`Title: ${todo.title}`);
};

module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodos
};




