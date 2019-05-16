const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helpers.js')

const MunrosView = function(container, munro) {
    this.munrosContainer = container
    this.munro = munro

}

MunrosView.prototype.render = function () {

        // this.munrosContainer.innerHTML = '';

        const munroName = this.createTextElement('h2', this.munro.name)
        this.munrosContainer.appendChild (munroName)
    
        // console.log(munro)
    
    const munroHeight = this.createTextElement('h3', `Height: ${this.munro.height} `)
        this.munrosContainer.appendChild (munroHeight)
    
        const munroMeaning = this.createTextElement('p', `Meaning: ${this.munro.meaning}`)
        this.munrosContainer.appendChild(munroMeaning)
    };
    
MunrosView.prototype.createTextElement = function(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
    // so when we call the element later for the render this will allow us to just call ... eg ('h2', `string interpolation ${banana}`)
}


module.exports = MunrosView;