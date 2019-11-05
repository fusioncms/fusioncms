<template>
    <div>
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <div class="mb-6">
                        <span class="block uppercase text-gray-500 tracking-wider text-sm font-semibold">Inboxes</span>

                        <ul>
                            <li><fa-icon :icon="['far', 'inbox']" fixed-width class="mr-2"></fa-icon> Inbox</li>
                            <li><fa-icon :icon="['far', 'star']" fixed-width class="mr-2"></fa-icon> Starred</li>
                            <li><fa-icon :icon="['far', 'check-circle']" fixed-width class="mr-2"></fa-icon> Closed</li>
                            <li><fa-icon :icon="['far', 'trash-alt']" fixed-width class="mr-2"></fa-icon> Trash</li>
                        </ul>
                    </div>

                    <div class="mb-6">
                        <span class="block uppercase text-gray-500 tracking-wider text-sm font-semibold">Forms</span>

                        <ul>
                            <li><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Career Opportunities</li>
                            <li><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Contact Us</li>
                            <li><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Request A Quote</li>
                            <li><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Suggestions</li>
                        </ul>
                    </div>

                    <div>
                        <span class="block uppercase text-gray-500 tracking-wider text-sm font-semibold">Tags</span>

                        <ul>
                            <li><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-primary-500 text-xs"></fa-icon> Lorem</li>
                            <li><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-secondary-500 text-xs"></fa-icon> Ipsum</li>
                            <li><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-warning-500 text-xs"></fa-icon> Dolor</li>
                            <li><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-danger-500 text-xs"></fa-icon> Sit</li>
                            <li><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-success-500 text-xs"></fa-icon> Amet</li>
                        </ul>
                    </div>
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