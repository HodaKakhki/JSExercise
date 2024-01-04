var cities = {
    tehran: ['Tehran', 'Shahriar', 'rudehen', 'bumehen'],
    shiraz: ['shiraz', 'fars', 'perspolis', 'pars'],
    Mashhad: ['mashhad', 'fariman', 'quchan'],
    tabriz: ['tabriz', 'marand', 'jolfa', 'ahar']
}

var startProvine = prompt(" Enter your Province:")

var mainProvinceCities = cities[startProvine];

mainProvinceCities.forEach(function(city){
    console.log(city);
});