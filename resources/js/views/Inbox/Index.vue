<template>
    <div>
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    Sidebar
                </p-card>
            </div>

            <div class="content-container">
                <p-card>Body</p-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 
            }
        }
    }
</script>