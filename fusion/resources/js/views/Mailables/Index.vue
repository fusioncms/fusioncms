<template>
	<div>
		<portal to="title">
			<app-title icon="mail-bulk">Mailables</app-title>
		</portal>

		<portal to="actions">
			<button v-modal:settings class="button">Settings</button>
		</portal>

		<div class="row">
			<div class="content-container">
				<p-table :endpoint="endpoint" id="mailables" sort-by="name" primary-key="handle" key="mailables_table">
					<template slot="name" slot-scope="table">
                        <p-status :value="table.record.status" class="mr-2"></p-status>

                        <router-link :to="{ name: 'mailables.edit', params: {mailable: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="theme" slot-scope="table">
                        <span class="badge badge--info" v-if="table.record.theme !== false">{{ table.record.theme }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'mail_' + table.record.id + '_actions'" :key="'mail_' + table.record.id + '_actions'">
                            <p-dropdown-item :to="{ name: 'mailables.edit', params: {mailable: table.record.id} }">Edit</p-dropdown-item>
                        </p-actions>
                    </template>
				</p-table>
			</div>
		</div>

		<portal to="modals">
            <settings-modal section="mail"></settings-modal>
		</portal>
	</div>
</template>

<script>
	export default {
		head: {
            title() {
                return {
                    inner: 'Mailables'
                }
            }
        },

		data() {
            return {
                endpoint: '/datatable/mailables',
            }
        },

	}
</script>