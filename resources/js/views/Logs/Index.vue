<template>
    <div>
        <portal to="title">
            <app-title icon="chart-network">Error Logs</app-title>
        </portal>

        <div class="row">
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                endpoint: '/datatable/matrices',
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/logs').then((response) => {
                next((vm) => {
                    console.log(response)
                })
            })
        },
    }
</script>
