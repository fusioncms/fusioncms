<template>
    <div class="card">
        <div class="card__body">
            <div class="w-full xxl:max-w-3/4 mx-auto">
                <div class="form__grid">
                    <div class="form__grid--side">
                        <slot name="side"></slot>
                    </div>

                    <div class="form__grid--body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-pane',


    }
</script>