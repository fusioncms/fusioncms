<template>
    <div class="row">
        <div class="content-container">
            <p-card>
                <form @submit.prevent="submit">
                    <div class="row mb-6">
                        <div class="side-container">
                            <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                <!--  -->
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

                    <div v-if="sections.body.length > 0" :key="menu.slug">
                        <!-- Loop through each section -->
                        <div v-for="(section, index) in sections.body" :key="section.handle">
                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>{{ section.name }}</h3>
                                        <p class="text-sm">{{ section.description }}</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <!-- Loop through each section field -->
                                    <div v-for="field in section.fields" :key="field.handle" class="form__group">
                                        <component
                                            :is="field.type.id + '-fieldtype'"
                                            :field="field"
                                            v-model="form[field.handle]"
                                        >
                                        </component>
                                    </div>
                                </div>
                            </div>

                            <hr v-if="index !== sections.body.length - 1">
                        </div>
                    </div>

                    <portal to="actions">
                        <router-link :to="{ name: 'menu.nodes', params: {menu: menu.id} }" class="button mr-3">Go Back</router-link>
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

                        <!-- <p-select
                            name="parent_id"
                            label="Parent"
                            help="Should this node belong to another?"
                            :options="nodes"
                            :has-error="form.errors.has('parent_id')"
                            :error-message="form.errors.get('parent_id')"
                            v-model="form.parent_id">
                        </p-select> -->

                        <p-select
                            name="new_window"
                            label="Open link where"
                            help="Determine where the link should open."
                            :options="[
                                {
                                    'label': 'New Window',
                                    'value': 1,
                                },
                                {
                                    'label': 'Same Window',
                                    'value': 0,
                                },
                            ]"
                            v-model="form.new_window">
                        </p-select>
                    </div>
                </div>
            </p-card>

            <p-card v-for="(section) in sections.sidebar" :key="section.handle" class="mt-6">
                <h3>{{ section.name }}</h3>
                <p class="text-sm">{{ section.description }}</p>

                <div class="w-full">
                    <!-- Loop through each section field -->
                    <div v-for="field in section.fields" :key="field.handle" class="form__group">
                        <component
                            :is="field.type.id + '-fieldtype'"
                            :field="field"
                            v-model="form[field.handle]"
                        >
                        </component>
                    </div>
                </div>
            </p-card>

            <p-card class="text-sm mt-6" v-if="node">
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
            node: {
                type: Object,
            },

            nodes: {
                type: Array,
                required: true,
            },

            menu: {
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

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.menu.fieldset) {
                    body = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
        },
    }
</script>