<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Importer</app-title>
		</portal>

		<portal to="actions">
            <router-link :to="{ name: 'importer.create' }" class="button">Create</router-link>
		</portal>

		<div class="row">
			<div class="content-container">
				<p-table :endpoint="endpoint" name="imports" sort-by="name" :per-page="10" primary-key="handle" key="importer_table">
					<template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'importer.view', params: {importer: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="source" slot-scope="table">
                        <em>{{ table.record.source | shorten }}</em>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-dropdown right>
                            <fa-icon :icon="['fas', 'bars']"></fa-icon>

                            <template slot="options">
                                <p-dropdown-item @click.prevent :to="{ name: 'importer.edit', params: {importer: table.record.id} }">Edit</p-dropdown-item>
                                <p-dropdown-item @click.prevent v-modal:delete-importer="table.record">Delete</p-dropdown-item>
                            </template>
                        </p-dropdown>
                    </template>
				</p-table>
			</div>
		</div>

		<portal to="modals">
			<p-modal name="delete-importer" title="Delete Import">
                <p>Are you sure you want to permenantly delete this import?</p>

                <template slot="footer" slot-scope="importer">
                    <p-button v-modal:delete-importer @click="destroy(imports.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-importer>Cancel</p-button>
                </template>
            </p-modal>
		</portal>
	</div>
</template>

<script>
	export default {
        head: {
            title() {
                return {
                    inner: 'Import'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/imports',
            }
        },

        filters: {
            shorten(value) {
                return _.truncate(value, {
                    'length': 50
                })
            }
        },

        methods: {
            destroy(id) {
                axios.delete(`/api/imports/${id}`).then((response) => {
                    toast('Import successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-imports')
                })
            }
        }
    }
</script>