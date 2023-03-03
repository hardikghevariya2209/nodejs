const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
    }
    order() {
        this.emit('order', 'large', 'black olives')
        this.orderNumber++
    }
    displayOrderNumber() {
        console.log(this.orderNumber)
    }
}
module.exports = PizzaShop