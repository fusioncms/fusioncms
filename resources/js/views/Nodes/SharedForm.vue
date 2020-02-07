<template>
    <div class="row">
        <div class="content-container">
            <p-card>
                <form @submit.prevent="submit">
                    <div class="row">
                        <div class="side-container">
                            <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                <h3>General</h3>
                                <p class="text-sm">What will this node be called and what will it link to?</p>
                            </div>
                        </div>

                        <div class="content-container">
                            <p-input
                                name="name"
                                label="Name"
                                help="What this node will be called."
                                autocomplete="off"
                                autofocus
                                required
                                :has-error="form.errors.has('name')"
                                :error-message="form.errors.get('name')"
                                v-model="form.name">
                            </p-input>

                            <p-input
                                name="url"
                                label="URL"
                                help="The URL of the node."
                                autocomplete="off"
                                required
                                :has-error="form.errors.has('url')"
                                :error-message="form.errors.get('url')"
                                v-model="form.url">
                            </p-input>
                        </div>
                    </div>

                    <portal to="actions">
                        <router-link :to="{ name: 'menus' }" class="button mr-3">Go Back</router-link>
                        <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save Node</button>
                    </portal>
                </form>
            </p-card>
        </div>

        <div class="side-container">
            <p-card>
                <div class="row">
                    <div class="col w-full">
                        <p-select
                            name="status"
                            label="Status"
                            :options="[
                                {
                                    'label': 'Enabled',
                                    'value': 1,
                                },
                                {
                                    'label': 'Disabled',
                                    'value': 0,
                                },
                            ]"
                            v-model="form.status">
                        </p-select>

                        <p-select
                            name="parent_id"
                            label="Parent"
                            help="Should this node belong to another?"
                            :options="[
                                {
                                    'label': 'Node 1',
                                    'value': 1,
                                }
                            ]"
                            :has-error="form.errors.has('parent_id')"
                            :error-message="form.errors.get('parent_id')"
                            v-model="form.parent_id">
                        </p-select>
                    </div>
                </div>
            </p-card>

            <p-card class="text-sm" v-if="node">
                <dl class="flex flex-wrap">
                    <dt class="w-1/3">Status</dt>
                    <dd class="w-2/3"><fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': node.status, 'text-danger-500': ! node.status}"></fa-icon> {{ node.status ? 'Enabled' : 'Disabled' }}</dd>

                    <dt class="w-1/3">Created At</dt>
                    <dd class="w-2/3">{{ $moment(node.created_at).format('Y-MM-DD, hh:mm a') }}</dd>

                    <dt class="w-1/3">Updated At</dt>
                    <dd class="w-2/3">{{ $moment(node.updated_at).format('Y-MM-DD, hh:mm a') }}</dd>
                </dl>
            </p-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                required: false,
                default: 0
            },

            node: {
                type: Object,
            },

            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },
        },
    }
</script>