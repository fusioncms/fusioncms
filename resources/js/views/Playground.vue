<template>
    <div>
        <portal to="title">
            <app-title icon="robot">File Manager</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'users.create' }" class="button">Grid</router-link>
            <router-link :to="{ name: 'users.create' }" class="button">List</router-link>
            <router-link :to="{ name: 'users.create' }" class="button button--danger">Delete</router-link>
            <router-link :to="{ name: 'users.create' }" class="button">Move</router-link>
            <router-link :to="{ name: 'users.create' }" class="button">New Folder</router-link>
            <router-link :to="{ name: 'users.create' }" class="button">Upload</router-link>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <div class="list">
                        <span class="list--separator">Display</span>
                        
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'asterisk']"></fa-icon> Everything</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'image']"></fa-icon> Images</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'video']"></fa-icon> Video</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'volume-up']"></fa-icon> Audio</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'file-alt']"></fa-icon> Documents</router-link>
                    </div>
                </p-card>
            </div>

            <div class="content-container">
                <p-datatable name="list-view" endpoint="/datatable/users" sort-by="name" :per-page="10" no-filtering>
                </p-datatable>

                <p-card>

                </p-card>
            </div>
        </div>
    </div>
</template>
