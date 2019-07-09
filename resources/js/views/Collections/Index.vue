<template>
    <div>
        <portal to="title">{{ matrix.name }} Dashboard</portal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                matrix: {},
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.matrix).then((response) => {
                next(function(vm) {
                    vm.matrix = response.data.data

                    if (vm.matrix.type == 'page') {
                        vm.$router.push({name: 'matrix.edit', param: {matrix: vm.matrix.slug}})
                    }
                })
            })
        },
    }
</script>