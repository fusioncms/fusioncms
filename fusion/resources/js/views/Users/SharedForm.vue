<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'users' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <p-title
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-title>

                <p-input
                    type="email"
                    name="email"
                    label="E-mail"
                    autocomplete="off"
                    :has-error="form.errors.has('email')"
                    :error-message="form.errors.get('email')"
                    required
                    v-model="form.email">
                </p-input>

                <p-tabs>
                    <p-tab name="Security">
                        <p-input
                            type="password"
                            name="password"
                            label="Password"
                            autocomplete="new-password"
                            :has-error="form.errors.has('password')"
                            :error-message="form.errors.get('password')"
                            required
                            v-model="form.password">
                        </p-input>

                        <p-input
                            type="password"
                            name="password_confirmation"
                            label="Confirm Password"
                            autocomplete="new-password"
                            :has-error="form.errors.has('password_confirmation')"
                            :error-message="form.errors.get('password_confirmation')"
                            required
                            v-model="form.password_confirmation">
                        </p-input>
                    </p-tab>
                </p-tabs>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>

                    <p-select
                        name="role"
                        label="Role"
                        :options="roleOptions"
                        autocomplete="off"
                        value="user"
                        :has-error="form.errors.has('role')"
                        :error-message="form.errors.get('role')"
                        required
                        v-model="form.role">
                    </p-select>
                </div>
            </div>

            <p-definition-list v-if="user">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': user.status, 'text-danger-500': ! user.status}"></fa-icon> {{ user.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Verified">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': user.verified, 'text-danger-500': ! user.verified}"></fa-icon> {{ user.verified ? 'Yes' : 'No' }}
                </p-definition>

                <p-definition name="Registered">
                    {{ $moment(user.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Last Login">
                    <span v-if="user.logged_in_at">{{ $moment(user.logged_in_at.date).format('L') }}</span>
                    <span v-else>Never</span>
                </p-definition>
            </p-definition-list>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },

            user: {
                type: Object,
                required: false,
            },

            roleOptions: {
                type: Array,
                require: true
            }
        }
    }
</script>