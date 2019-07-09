<template>
    <div>
        <portal to="title">
            <app-title icon="cog">Cache Settings</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-card>
                    <h3>Coming Soon</h3>
                </p-card>

                <portal to="actions">
                    <router-link :to="{ name: 'settings' }" class="button mr-3">Cancel</router-link>
                </portal>
            </div>
        </div>
    </div>
</template>