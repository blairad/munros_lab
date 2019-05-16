const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helpers.js');

const Munro = function(url) {
    this.data = null;
    this.url = url;
};

Munro.prototype.getData = function() {
    const request = new RequestHelper(this.url);
    console.log('this is my' , request)

    request.get()
    .then((data) => {
        this.data = data;
        console.log(this.data)

        PubSub.publish('Munro:munros_data_ready', this.data)
    })

}


module.exports = Munro;