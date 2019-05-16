const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helpers.js')

const MunrosView = function(container) {
    this.container = container

}

MunrosView.prototype.bindEvents = function() {
    PubSub.subscribe('Munro:munros_data_ready', (event) => {
        this.clearMunro();
        this.render(event.detail);
        // console.log(event.detail)
    })
}

MunrosView.prototype.render = function (munros) {
    munros.forEach((munro) => {
    const munroName = this.createTextElement('h2', munro.name)
    this.container.appendChild (munroName)
    // console.log(munro)
    const munroHeight = this.createTextElement('h3', `Height: ${munro.height} `)
    this.container.appendChild (munroHeight)
    const munroMeaning = this.createTextElement('p', `Meaning: ${munro.meaning}`)
    this.container.appendChild(munroMeaning)
    });
    
}

MunrosView.prototype.createTextElement = function(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
    // so when we call the element later for the render this will allow us to just call ... eg ('h2', `string interpolation ${banana}`)
}


MunrosView.prototype.clearMunro = function () {
    this.container.innerHTML = '';
}

module.exports = MunrosView;