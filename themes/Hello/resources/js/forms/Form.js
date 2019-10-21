import Errors from './Errors'

export default class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.errors = new Errors
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }
    }

    set(field, value) {
        this.data[field] = value
    }

    get(field) {
        return this.data[field]
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = this.originalData[field]
        }

        this.errors.clear()
    }

    data() {
        let data = {}

        for (let property in this.originalData)
            data[property] = this[property]
        
        return data
    }

    /**
    * Submit a POST request.
    *
    * @param {string} url
    */
    post(url) {
        return this.submit('post', url)
    }

    /**
     * Submit a PATCH request.
     *
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url)
    }

    /**
     * Submit a PUT request.
     *
     * @param {string} url
     */
    put(url) {
        return this.submit('put', url)
    }

    /**
     * Submit a DELETE request.
     *
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url)
    }

    /**
     * Submit the form by the given request type and url.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {        
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data)

                    resolve(response.data)
                })
                .catch(errors => {
                    this.onFailure(errors.response.data)

                    reject(errors.response.data)
                })
        })
    }

    /**
     * Handle the on success promise event.
     *
     * @param {object} data
     */
    onSuccess(data) {
        // We'll leave it up to the implementation on
        // if they want the form reset afterwards.
        //
        // this.reset()
    }

    /**
     * Handle the on failture promise event.
     *
     * @param {object} errors
     */
    onFailure(errors) {
        this.errors.record(errors)
    }
}