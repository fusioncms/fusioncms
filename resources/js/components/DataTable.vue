<template>
    <div>



        <p-input name="search" label="Search" v-model="search"></p-input>

        <renderless-data-table :items="digimon" :search="search" base-url="https://digimon-api.herokuapp.com/api" endpoint="digimon">
            <table class="table" slot-scope="{ data: allDigimon, sort }">
                <thead>
                    <tr>
                        <th @click="sort('id')">ID</th>
                        <th>Image</th>
                        <th @click="sort('name')">Name</th>
                        <th @click="sort('level')">Level</th>
                    </tr>
                </thead>

                <draggable tag="tbody">
                    <tr v-for="digimon in allDigimon" :key="digimon.id">
                        <td>{{ digimon.id }}</td>
                        <td><img :src="digimon.img" :alt="digimon.name" width="30px"></td>
                        <td>{{ digimon.name }}</td>
                        <td>{{ digimon.level }}</td>
                    </tr>
                </draggable>
            </table>
        </renderless-data-table>



    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        data() {
            return {
                search: '',
                digimon: [
                    {
                        id: 1,
                        name: 'Koromon',
                        level: 'In Training',
                        img: 'https://digimon.shadowsmith.com/img/koromon.jpg',
                    },
                ]
            }
        }
    }
</script>