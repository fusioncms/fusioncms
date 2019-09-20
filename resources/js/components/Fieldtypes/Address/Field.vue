<template>
    <div class="card p-3">
        <p-input
            :name="field.handle + '_address1'"
            label="Address 1"
            :value="data.address1"
            @input="updateValue($event, 'address1')"
        ></p-input>
        <p-input
            :name="field.handle + '_address2'"
            label="Address 2"
            :value="data.address2"
            @input="updateValue($event, 'address2')"
        ></p-input>
        <p-input
            :name="field.handle + '_city'"
            label="City"
            :value="data.city"
            @input="updateValue($event, 'city')"
        ></p-input>
        <p-input
            :name="field.handle + '_state'"
            label="State"
            :value="data.state"
            @input="updateValue($event, 'state')"
        ></p-input>
        <p-input
            :name="field.handle + '_zip'"
            label="ZIP"
            :value="data.zip"
            @input="updateValue($event, 'zip')"
        ></p-input>
        <p-input
            :name="field.handle + '_country'"
            label="Country"
            :value="data.country"
            @input="updateValue($event, 'country')"
        ></p-input>
    </div>
</template>

<script>
    export default {
        name: 'address-fieldtype',

        data() {
            let data = {}
            let value = JSON.parse(this.value)
            if (this.value) {
                data = {
                    address1: value.address1 || '',
                    address2: value.address2 || '',
                    city: value.city || '',
                    state: value.state || '',
                    zip: value.zip || '',
                    country: value.country || '',
                    lat: value.lat || '',
                    lng: value.lng || '',
                    formatted_address: value.formatted_address || '',
                }
            } else {
                data = {
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: '',
                    lat: '',
                    lng: '',
                    formatted_address: '',
                }
            }

            return {
                marker: null,
                data: data,
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: null,
            },
        },

        methods: {
            updateValue(event, handle) {
                this.data[handle] = event
                this.$emit('input', JSON.stringify(this.data))
            }
        }
    }
</script>

