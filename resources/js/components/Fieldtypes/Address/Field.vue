<template>
    <div class="card p-3">
        <div class="row px-2">
            <div class="w-1/2">
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
            <div class="w-1/2">
                <div class="h-full" :id="mapID">
                    
                </div>
            </div>
        </div>
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
                    formatted_address: this.addressLookup || '',
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

        computed: {
            mapID() {
                return this.field.handle + '_map'
            },

            addressLookup: function() {
                let addressString = this.data.address1 + ' ' + this.data.address2

                if (this.data.city) {
                    addressString = addressString + ', ' + this.data.city;
                }

                if (this.data.state || this.data.zip) {
                    addressString = addressString + ', ' + this.data.state + ' ' + this.data.zip;
                }

                if (this.data.country) {
                    addressString = addressString + ', ' + this.data.country;
                }

                return addressString.replace(/ +/g, ' ');
            },
        },

        watch: {
            addressLookup: function() {
                this.locateAddress();
            }
        },

        methods: {
            updateValue(event, handle) {
                this.data[handle] = event
                this.$emit('input', JSON.stringify(this.data))
            },

            createMap: function() {
                if (! _.isUndefined(window.google)) {
                    this.map = new google.maps.Map(document.getElementById(this.mapID));

                    this.locateAddress();
                }
            },

            locateAddress: _.debounce(
                function() {
                    if (_.isUndefined(window.google)) return;

                    google.maps.event.trigger(this.map, 'resize');

                    var geocoder = new google.maps.Geocoder();
                    var vm = this;
                    var address = this.addressLookup;
                    var zoom = 16;

                    if (address == '' || address == ' ') {
                        if (this.marker !== null) {
                            this.marker.setMap(null);
                        }

                        this.map.setCenter(new google.maps.LatLng(0, 0));
                        this.map.setZoom(1);

                        this.data.formatted_address = '';
                        this.data.lat = '';
                        this.data.lng = '';

                        return;
                    }

                    geocoder.geocode({ address }, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            vm.map.setCenter(results[0].geometry.location);
                            vm.map.setZoom(zoom);

                            vm.data.formatted_address = results[0].formatted_address;
                            vm.data.lat = results[0].geometry.location.lat();
                            vm.data.lng = results[0].geometry.location.lng();

                            if (address !== '' || address !== ' ') {
                                if (vm.marker !== null) {
                                    vm.marker.setMap(null);
                                }

                                vm.marker = new google.maps.Marker({
                                    map: vm.map,
                                    position: results[0].geometry.location
                                });
                            }
                        }
                    });
                }, 500
            )
        },

        mounted() {
            let apiKey = ''
            if (_.isUndefined(window.google)) {
                let vm = this
                window.mapInit = function() {
                    vm.createMap()
                }
                let mapScript = document.createElement('script')
                mapScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=${`apiKey`}&callback=mapInit')
                document.head.appendChild(mapScript)
            } else {
                vm.createMap();
            }
        }
    }
</script>

