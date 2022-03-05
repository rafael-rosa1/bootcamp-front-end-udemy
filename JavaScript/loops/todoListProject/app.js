let command = prompt('What you would like to do?');
let todoList = [];

while (command !== 'quit') {
    if (command === 'new') {
        let newTodo = prompt('Insert a new todo.');
        todoList.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (command === 'list') {
        console.log('*********************');
        for (todo of todoList) {
            console.log(`${todoList.indexOf(todo)}: ${todo}`);
        }
        console.log('*********************');
    } else if (command === 'delete') {
        let deleteIndex = prompt('Choose a todo to remove');
        console.log(`${todoList[deleteIndex]} removed`);
        todoList.splice(deleteIndex, 1);
    } else {
        command = prompt('What you would like to do?');
    }
    command = prompt('What you would like to do?');
}

console.log(`OK, YOU QUIT THE APP`);