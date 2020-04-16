<template>
    <div class="leading-none flex-1 flex">
        <div v-if="response.id" class="w-full">
            <div class="flex flex-row-reverse border-b py-4 px-6 justify-between items-center" style="height: 52px;">
                <div>
                    <!-- <fa-icon :icon="['fas', 'check-circle']" fixed-width class="mr-3"></fa-icon>
                    <fa-icon :icon="['fas', 'star']" fixed-width class="mr-3"></fa-icon>
                    <fa-icon :icon="['fas', 'history']" fixed-width class="mr-3"></fa-icon>
                    <fa-icon :icon="['fas', 'trash-alt']" fixed-width></fa-icon> -->
                </div>

                <div class="text-gray-500 flex items-center">
                    <fa-icon :icon="['fas', 'server']" fixed-width></fa-icon> <span class="text-xs font-mono ml-2">{{ response.identifiable_ip_address }}</span>
                </div>
            </div>

            <mq-layout mq="sm">
                <div class="border-b p-6 tracking-wide">
                    <div class="text-lg font-bold">
                        {{ response.identifiable_email_address }}
                    </div>

                    <div class="mt-3 text-sm">
                        <div class="flex mb-1">
                            <div class="text-gray-700" style="width: 75px;">Regarding</div>
                            <div class="flex-grow">{{ response.form.name }}</div>
                        </div>

                        <div class="flex">
                            <div class="text-gray-700" style="width: 75px;">Date</div>
                            <div class="flex-grow">{{ $moment(response.created_at).format('LLL') }}</div>
                        </div>
                    </div>
                </div>
            </mq-layout>

            <mq-layout mq="md+">
                <div class="flex border-b p-6 tracking-wide justify-between items-center">
                    <div class="flex flex-col text-lg">
                        <b class="mb-2">{{ response.identifiable_email_address }}</b>
                        <span>Re: {{ response.form.name }}</span>
                    </div>

                    <div class="text-sm">
                        {{ $moment(response.created_at).format('LLL') }}
                    </div>
                </div>
            </mq-layout>

            <div class="p-6 leading-loose">
                <div class="form__group" v-for="field in fields" :key="field.handle">
                    <label :for="field.handle" class="form__label">{{ field.name }}</label>
                    <div :id="field.handle">
                        <p>{{ response[field.handle] }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full flex flex-1 justify-center items-center text-5xl text-gray-300" v-else>
            <fa-icon :icon="['far', 'envelope']" class="fa-fw fa-3x"></fa-icon>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'response-view',

        computed: {
            ...mapGetters({
                response: 'inbox/getResponse',
                fields: 'inbox/getFields',
            }),
        },

        methods: {
            ...mapActions({

            }),
        }
    }
</script>