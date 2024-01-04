
var taskArrays = {
    sara: ['css', 'html', 'js'],
    ali: ['seo', 'link building'],
    shamsi: ['admin', 'content'],
    pedram: ['react', 'vue', 'js']
}

console.log(taskArrays);

var newTaskName = prompt('Enter the New Task Name');
var employeName = prompt('Enter the employe Name');

var employesTasks = taskArrays[employeName]
employesTasks.push(newTaskName);
console.log(taskArrays);