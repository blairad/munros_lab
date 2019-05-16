const PubSub = require('../helpers/pub_sub.js')
const MunrosView = require('./munros_view.js')

const MunroListInfo = function(container) {
    this.container = container
}

MunroListInfo.prototype.bindEvents = function() {
    PubSub.subscribe('Munro:munros_data_ready', (event) => {
        this.render(event.detail);
        // console.log(event.detail)
    })
}

MunroListInfo.prototype.render = function(munros) {
    munros.forEach((munro) => {
        const munrosView = new MunrosView(this.container, munro)
        munrosView.render(); 
    });
}

module.exports = MunroListInfo;