import FormData from 'form-data'
import Errors from './Errors'
import store from '../vuex'


export default class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data, preventNavigation = false) {
console.log('form constructor')
        this.errors = new Errors
        this.originalData = data
        this.hasChanges = false
        this.preventNavigation = preventNavigation

        let form = this

        this.__data = {};

        for (let field in data) {
            this[field] = data[field]
        
            form.__data[field] = form[field];
            (function(field_name) {
                Object.defineProperty (form, field_name, {
                    get: function () { 
                        return form.__data[field_name];
                    },
                    set: function (new_value) {
                        form.__data[field_name] = new_value;
console.log('change: ' + field_name)
                        if (!form.hasChanges) {
                            form.onFirstChange()
                        }
                    }
                });
            })(field);
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
console.log('submit')        
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data)
                    store.commit('form/setPreventNavigation', false)
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
     * Handle the on failure promise event.
     *
     * @param {object} errors
     */
    onFailure(errors) {
        this.errors.record(errors)
    }

    /** 
     * Handle the first input event. Prevents navigating
     * away from the form if the preventNavigation
     * setting has been enabled.
     *
     * @param {object} data
     */
    onFirstChange(data) {
console.log('firstchange:')
        this.hasChanges = true
        if (this.preventNavigation) {
            store.commit('form/setPreventNavigation', true)
        }
    }

    resetChangeListener(data) {
console.log('reset')
        this.hasChanges = false
        if (this.preventNavigation) {
            store.commit('form/setPreventNavigation', false)
        }
    }
}