<template>
    <div>
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'forms' }" class="button">Manage Forms</router-link>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <div class="list">
                        <span class="list--separator pt-0">Inboxes</span>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'inbox']" fixed-width class="mr-2"></fa-icon> Inbox</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'star']" fixed-width class="mr-2"></fa-icon> Starred</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'check-circle']" fixed-width class="mr-2"></fa-icon> Closed</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'inbox-in']" fixed-width class="mr-2"></fa-icon> Archived</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'trash-alt']" fixed-width class="mr-2"></fa-icon> Trash</a>
                    </div>

                    <div class="list" v-if="forms.length == 0">
                        <span class="list--separator">Forms</span>

                        <span class="px-2 text-gray-600 leading-loose">No forms available.</span>
                    </div>

                    <div class="list" v-else>
                        <span class="list--separator">Forms</span>

                        <a href="#" class="list--item leading-loose" v-for="form in forms" :key="form.handle"><fa-icon :icon="['far', 'paper-plane']" fixed-width class="mr-2"></fa-icon> {{ form.name }}</a>
                    </div>
                </p-card>
            </div>

            <div class="content-container">
                <p-card no-body>
                    <div class="flex">
                        <div class="border-r leading-none" style="width: 350px;">
                            <div class="border-r-4" v-for="n in 10" :key="n" :class="{'border-primary-400': (n == 1), 'border-gray-200': (n > 1)}">
                                <div class="pl-3 pr-4 py-6 border-t border-gray-200">
                                    <div class="flex">

                                        <div class="mr-3 flex flex-col">
                                            <fa-icon :icon="['far', 'star']" fixed-width class="mb-2"></fa-icon>
                                            <fa-icon :icon="['far', 'check-circle']" fixed-width></fa-icon>
                                        </div>

                                        <div>
                                            <div class="flex justify-between items-center mb-2">
                                                <b>space.is.kinda.cool@spac...</b>
                                                <span class="text-gray-600 text-sm">1 day ago</span>
                                            </div>

                                            <div>
                                                <span class="block text-gray-800 mb-2">Re: Request A Quote</span>
                                                <span class="block text-gray-500 leading-tight text-sm">Lorem ipsum dolor sit amet consectetur elit adipisicing. Voluptates nostrum ut labore et...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="leading-none flex-1">
                            <div class="flex flex-row-reverse border-b py-4 px-6 justify-between items-center">
                                <div>
                                    <fa-icon :icon="['far', 'check-circle']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['far', 'star']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['far', 'inbox-in']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['far', 'trash-alt']" fixed-width></fa-icon>
                                </div>

                                <div class="text-gray-500 flex items-center">
                                    <fa-icon :icon="['far', 'server']" fixed-width></fa-icon> <span class="text-xs font-mono ml-2">192.168.10.10</span>
                                </div>
                            </div>

                            <div class="flex border-b p-6 tracking-wide justify-between items-center">
                                <div class="flex flex-col text-lg">
                                    <b class="mb-2">space.is.kinda.cool@spacex.com</b>
                                    <span>Re: Request A Quote</span>
                                </div>

                                <div class="text-sm">
                                    1 day ago
                                </div>
                            </div>
                            
                            <div class="p-6 leading-loose">
                                <div class="form__group">
                                    <label for="email" class="form__label">Email</label>
                                    <div id="email">
                                        <p><a href="#">space.is.kinda.cool@spacex.com</a></p>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <label for="name" class="form__label">Name</label>
                                    <div id="name">
                                        <p>Elon Musk</p>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <label for="website" class="form__label">Existing Website (if applicable)</label>
                                    <div id="website">
                                        <p><a href="https://spacex.com">https://spacex.com</a></p>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <label for="budget" class="form__label">Budget</label>
                                    <div id="budget">
                                        <p>$100,000 — $300,000</p>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <label for="industry" class="form__label">Industry</label>
                                    <div id="industry">
                                        <p>Aerospace</p>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <label for="message" class="form__label">Message</label>
                                    <div id="message">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna. Morbi tristique senectus et netus et. Aliquet nec ullamcorper sit amet risus nullam eget. Mauris sit amet massa vitae. Quis auctor elit sed vulputate mi sit. Massa ultricies mi quis hendrerit. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisi vitae suscipit tellus mauris a diam maecenas. Hac habitasse platea dictumst quisque sagittis purus sit. Augue lacus viverra vitae congue. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Facilisis gravida neque convallis a.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                forms: [],
                responses: [],
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/forms'),
            ]).then(axios.spread(function (forms) {
                next(function(vm) {
                    vm.forms = forms.data.data
                })
            }))
        },
    }
</script>