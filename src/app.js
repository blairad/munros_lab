const Munro = require('./models/munro.js');
const MunroListInfo = require('./views/munro_list_info.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log("are you still there?")

    const munrosContainer = document.querySelector('div#munros');
    const munrosView = new MunroListInfo(munrosContainer);
    munrosView.bindEvents();

    const munro = new Munro('https://munroapi.herokuapp.com/munros');
    munro.getData()



})

