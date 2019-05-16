const Munro = require('./models/munro.js');
const MunrosView = require('./views/munros_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log("are you still there?")

    const munro = new Munro('https://munroapi.herokuapp.com/munros');
    munro.getData()

})

