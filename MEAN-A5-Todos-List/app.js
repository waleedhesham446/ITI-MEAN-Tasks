const express = require('express');
const app = express();

const todos = [];


app.get('/', (req, res) => {
    let todosHtml = todos.map((todo) => {
        return todo.task;
    });
    res.send(`
        <h1>Todos List</h1>
        <form action="/add">
            <input name="todo">
            <button>Add</button>
        </form>
        <ul>
        ${todosHtml.join('')}
        </ul>
    `);
});


app.get('/add', (req, res) => {
    let ID = Date.now();
    todos.push({
        todo: req.query.todo,
        task: 
                `<li>
                    <form action="/toggle">
                        <input type="checkbox" class="checkbox" name="state" onchange="this.form.submit()">
                        <input value="${ID}" hidden name="id">
                        ${req.query.todo}
                    </form>
                </li>
                `,
        id: ID
    });
    res.redirect('/');
});

app.get('/toggle', (req, res) => {
    
    let checked = (req.query.state == "on")? 'checked' : '';
    let i;
    for(i = 0; i < todos.length; i++){
        if(todos[i].id == req.query.id)
            break
    }
    console.log(i);
    todos[i].task = `<li>
                        <form action="/toggle">
                            <input type="checkbox" ${checked} class="checkbox" name="state" onchange="this.form.submit()">
                            <input value="${todos[i].id}" hidden name="id">
                            ${todos[i].todo}
                        </form>
                    </li>`

    res.redirect('/');
});



app.listen(3000, () => {
    console.log('Listening On Port 3000');
});