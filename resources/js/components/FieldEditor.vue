<template>
    <div v-if="loaded">
        <div class="row">
            <div class="col w-1/2">
                <p-input 
                    name="field-name" 
                    label="Name"
                    required
                    v-model="field.name">
                </p-input>
            </div>

            <div class="col w-1/2">
                <p-slug
                    name="handle"
                    label="Handle"
                    autocomplete="off"
                    required
                    delimiter="_"
                    :watch="field.name"
                    v-model="field.handle">
                </p-slug>
            </div>
        </div>

        <div class="row">
            <div class="col w-full">
                <redactor name="field-help" label="Help Instructions" v-model="field.help"></redactor>
            </div>
        </div>

        <hr>

        <component v-if="field.type" :is="field.type.handle + '-fieldtype-options'" v-model="field.options"></component>
    </div>
</template>

<script>
    export default {
        name: 'field-editor',

        props: ['field'],

        computed: {
            loaded() {
                if(this.field.name) {
                    return true
                }
                return false
            }
        },

        data() {
            return {}
        },

        mounted() {
            console.log(this.field)
        }
    }
</script>