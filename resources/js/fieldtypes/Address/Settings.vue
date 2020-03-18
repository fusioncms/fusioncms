<template>
  <div>
    <p-input
        name="settings.api_key"
        label="API Key"
        help='You will need to generate a <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> in order to view the map component and retrieve latitude and longitude coordinates for your address'
        autocomplete="off"
        placeholder=""
        v-model="settings.api_key"
        :has-error="errors.has('settings.api_key')"
        :error-message="errors.get('settings.api_key')">
    </p-input>
  </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'address-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>

