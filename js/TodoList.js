var todosArray = [
  { id: 1, title: "reading a book", isDoing: false },
  { id: 2, title: "doing homework", isDoing: true },
  { id: 3, title: "learning cource", isDoing: false },
  { id: 4, title: "vue js", isDoing: false },

];

var userMenu = prompt('choose one of them:\n 1-Add Todo\n 2-Remove Todo \n 3-Do Todo');

if (userMenu === '1') {
     var newTodoName = prompt('Enter the New Todo Name:', '')
    var newTodoObject = {
        id: todosArray.length+1,
        title: newTodoName,
        isDoing:false
    }
    todosArray.push(newTodoObject);
    console.log("Todos Array:", todosArray);


} else if (userMenu === '2') {
    var removeTodoName = prompt('Enter the Remove Todo Name:', '')
    var removeableTodoIndex = todosArray.findIndex(function (todo) {
        return todo.name === removeTodoName
    })
    todosArray.splice(removeableTodoIndex, 1)
    console.log("Todos Array", todosArray);

} else if (userMenu === '3') { 
    var editableTodoName = prompt('Enter the editable Todo Name', '');

if (editableTodoName !== null && editableTodoName !== '') {
    todosArray.forEach(function (todo) {
        console.log('editableTodoName:', editableTodoName);
        console.log('todo.name:', todo.title);
       if(editableTodoName === todo.title)
           todo.isDoing = true;
            console.log('isDoing set to true:', todo);
    });
}

    
    console.log("Todos array", todosArray);
} else {
    console.log('Please try agian');
}

