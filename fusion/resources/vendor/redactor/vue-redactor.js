/*
    Redactor Vue Component
    Version 1.1
    Updated: March 25, 2020

    http://imperavi.com/redactor/

    Copyright 2020, Imperavi Ltd.
    License: MIT
*/
Vue.component('Redactor', {
    template: '<textarea ref="redactor" :name="name" :placeholder="placeholder" :value="value" />',
    redactor: false,
    props: {
        value: {
            default: '',
            type: String
        },
        placeholder: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        config: {
            default: {},
            type: Object
        }
    },
    watch: {
        value(newValue, oldValue){
            if (!this.redactor.editor.isFocus()) this.redactor.source.setCode(newValue);
        }
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.destroy()
    },
    methods: {
        init () {
            var me = this;
            var callbacks = {
                changed: function(html) {
                    me.handleInput(html);
                    return html
                }
            };

            // extend config
            Vue.set(this.config, 'callbacks', callbacks);

            // call Redactor
            var app = Redactor(this.$refs.redactor, this.config);

            // set instance
            this.redactor = app;
            this.$parent.redactor = app;
        },
        destroy () {
            // Call destroy on redactor to cleanup event handlers
            Redactor(this.$refs.redactor, 'destroy');

            // unset instance for garbage collection
            this.redactor = null;
            this.$parent.redactor = null;
        },
        handleInput (val) {
            this.$emit('input', val);
        }
    }
});