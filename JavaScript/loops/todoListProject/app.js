let command = prompt('What would you like to do?');
const todoList = [];

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
        const deleteIndex = parseInt(prompt('Choose an index to remove it'));
        if (!Number.isNaN(deleteIndex)) {
            console.log(`${todoList.splice(deleteIndex, 1)} removed`);
        } else {
            console.log('Unknown index');
        }
    }
    command = prompt('What you would like to do?');
}

console.log(`OK, YOU QUIT THE APP`);