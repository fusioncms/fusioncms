<template>
	<div>
		<portal to="title">
			<app-title icon="mail-bulk">Mailables</app-title>
		</portal>

		<portal to="actions">
			<p-button v-modal:settings class="button mr-3">Settings</p-button>
		</portal>

		<div class="row">
			<div class="content-container">
				<p-datatable :endpoint="endpoint" name="mailables" sort-by="name" :per-page="10" primary-key="handle">
					<template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'mailables.edit', params: {mailable: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="theme" slot-scope="table">
                        <span class="badge badge--info" v-if="table.record.theme !== false">{{ table.record.theme }}</span>
                        <span v-else></span>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === true">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-dropdown right>
                            <fa-icon :icon="['fas', 'bars']"></fa-icon>
                            
                            <template slot="options">
                                <p-dropdown-item @click.prevent :to="{ name: 'mailables.edit', params: {mailable: table.record.id} }">Edit</p-dropdown-item>
                            </template>
                        </p-dropdown>
                    </template>
				</p-datatable>
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