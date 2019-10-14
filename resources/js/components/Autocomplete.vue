<template>
    <div>
        <p-renderless-autocomplete
            :items="items"
            :value="value"
        >
            <div class="form__select" :class="{ 'form__select--open': isOpen }" slot-scope="{ arrowCounter, value, isOpen, results, inputEvents, inputBindings }">
                <input
                    type="text"
                    v-bind="{...inputBindings}"
                    v-on="{...inputEvents}"
                    class="form__control"
                    :placeholder="placeholder"
                    @keydown.enter="onEnter"
                />

                <div v-show="isOpen" class="form__select-dropdown" ref="dropdown">
                    <ul class="form__select-options m-0">
                        <li
                            v-for="(result, i) in results"
                            :key="i"
                            @click="setResult(result)"
                            class="form__select-option"
                            :class="{'form__select-option--highlighted': i === arrowCounter}"
                        >
                            {{ result }}
                        </li>
                    </ul>
                </div>
            </div>
        </p-renderless-autocomplete>
    </div>
</template>

<script>
    export default {
        name: 'p-autocomplete',

        props: ['value', 'items', 'placeholder'],

        methods: {
            onEnter(e) {
                console.log('enter pressed')
            }
        }
    }
</script>