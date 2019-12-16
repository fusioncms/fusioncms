<template>
    <div>
        <portal to="title">
            <app-title icon="robot">Playground</app-title>
        </portal>

        <p-card>
            <!--  -->
        </p-card>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Playground'
                }
            }
        },
    }
</script>