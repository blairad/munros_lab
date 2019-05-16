const Munro = require('./models/munro.js');
const MunrosView = require('./views/munros_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log("are you still there?")

    const munrosContainer = document.querySelector('div#munros');
    const munrosView = new MunrosView(munrosContainer);
    munrosView.bindEvents();

    const munro = new Munro('https://munroapi.herokuapp.com/munros');
    munro.getData()



})

