<template>
    <div class="row">
        <div class="content-container">
            <form @submit.prevent="$parent.submit" @input.once="form.onFirstChange">
                <p-card>
                    <div class="row">
                        <div class="col form-sidebar">
                            <div class="xl:mr-10">
                                <h3>Personal</h3>
                                <p class="text-sm">Information to identify the user both within the CMS and by means of login.</p>
                            </div>
                        </div>

                        <div class="col form-content">
                            <p-input
                                name="name"
                                label="First Name"
                                autocomplete="off"
                                :has-error="form.errors.has('name')"
                                :error-message="form.errors.get('name')"
                                autofocus
                                required
                                v-model="form.name">
                            </p-input>

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
                        </div>
                    </div>

                    <hr>

                    <div class="row">
                        <div class="col form-sidebar">
                            <div class="xl:mr-10">
                                <h3>Security</h3>
                                <p class="text-sm">Secure the account by specifying the role and setting a strong password.</p>
                            </div>
                        </div>

                        <div class="col form-content">
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
                                v-model="form.passwordConfirmation">
                            </p-input>
                        </div>
                    </div>
                </p-card>
            </form>
        </div>

        <div class="side-container">
            <form @submit.prevent="$parent.submit">
                <p-card class="mb-6">
                    <p-select
                        name="status"
                        label="Status"
                        :options="[
                            {
                                'label': 'Enabled',
                                'value': '1',
                            },
                            {
                                'label': 'Disabled',
                                'value': '0',
                            },
                        ]"
                        v-model="form.status">
                    </p-select>

                    <portal to="actions">
                        <router-link :to="{ name: 'users' }" class="button mr-3">Go Back</router-link>
                        <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save User</button>
                    </portal>
                </p-card>
            </form>

            <slot name="side-container"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            form: {
                type: Object,
                required: true,
            },
            roleOptions: {
                type: Array,
                require: true
            }
        }
    }
</script>