export default class Errors {
    constructor() {
        this.bag = {}
    }

    has(field) {
        return this.bag.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.bag).length > 0
    }

    get(field) {
        if (this.bag[field]) {
            return this.bag[field][0]
        }
    }

    record(bag) {
        this.bag = bag
    }

    clear(field) {
        if (field) {
            delete this.errors[field]
            return
        }

        this.errors = {}
    }

    reset() {
        this.errors = {}
    }
}