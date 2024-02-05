let $ = document
let inputElement = $.querySelector('input')
let addTodoForm = $.querySelector('.add')
let todoUIElement = $.querySelector('.todos')
// for creating todo with li in html page
function addNewTodo (newTodoValue) {
    let newTodoLi=$.createElement('li') 
    newTodoLi.className = 'list-group-item d-flex justify-content-between align-items-center'

    let newTodoTitleSpan = $.createElement('span')
    newTodoTitleSpan.innerHTML = newTodoValue

    let newTodoTrash = $.createElement('i')
    newTodoTrash.className = 'fa fa-trash-o delete'

    newTodoTrash.addEventListener('click', function (event) {
        event.target.parentElement.remove()
    })

    newTodoLi.append(newTodoTitleSpan, newTodoTrash)
    
    todoUIElement.append(newTodoLi)
}
//getting value from input Element with two steps
addTodoForm.addEventListener('submit', function (event) {
    event.preventDefault()
})

inputElement.addEventListener ('keydown', function (event) {
    let newTodoValue = event.target.value.trim();
    if (event.keyCode === 13) {
        if (newTodoValue) {
            inputElement.value=''
           addNewTodo(newTodoValue)     
    }}
})