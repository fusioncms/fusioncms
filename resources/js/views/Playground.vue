<template>
    <div>
        <portal to="title">
            <app-title icon="robot">Playground</app-title>
        </portal>

        <p-card>
            <p-autocomplete v-model="test" :items="['foo', 'bar', 'lorem', 'ipsum']"></p-autocomplete>

            <p class="font-mono">{{ test }}</p>
        </p-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: '',
            }
        }
    }
</script>