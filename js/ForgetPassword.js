
var userData = [{ id: 1, username: 'ali', password: '10100', email: 'ali@gmail.com' },

    { id: 1, username: 'ali', password: '10510', email: 'ali@gmail.com' },
    { id: 2, username: 'mohammad', password: '101010', email: 'mohammad@gmail.com' },
    { id: 3, username: 'saeid', password: '25255', email: 'saeid@gmail.com' },
    { id: 4, username: 'edris', password: '25033', email: 'edris@gmail.com' },
    {id:5,username:'akbar',password:'54545',email:'akbar@gmail.com'}
]

var username = prompt('Enter Your UserName:  ');

var mainUserData = userData.find(function (user) {
    return user.username === username
})
// console.log(mainUserData);

if (mainUserData === undefined) {
    alert('you must register yourname first')
} else {
    alert('your password is '+ mainUserData.password)
}