<template>
    <div>
        <portal to="title">
            <app-title icon="robot">Playground</app-title>
        </portal>

        <p-card>
            <p-select name="test_select" :options="[
                {
                    label: 'Lorem',
                    value: 'lorem',
                },

                {
                    label: 'Ipsum',
                    value: 'ipsum'
                },
            ]" v-model="selected">
            </p-select>

            <select name="test_select" v-model="selected" class="form__select">
                <option value="lorem">Lorem</option>
                <option value="ipsum">Ipsum</option>
            </select>
        </p-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: 'foo',
            }
        }
    }
</script>