<template>
    <div>
        <portal to="title">
            <app-title icon="swatchbook">Styleguide</app-title>
        </portal>

        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Buttons</h2>

        <div class="mb-6 card">
            <div class="card__body">
                <h3>Button Group</h3>

                <div class="buttons">
                    <button class="button">One</button>
                    <button class="button">Two</button>
                    <button class="button">Three</button>
                    <button class="button">Four</button>
                    <button class="button">Five</button>
                    <button class="button">Six</button>
                    <button class="button">Seven</button>
                    <button class="button">Eight</button>
                    <button class="button">Nine</button>
                    <button class="button">Ten</button>
                    <button class="button">Eleven</button>
                    <button class="button">Twelve</button>
                    <button class="button">Thirteen</button>
                    <button class="button">Fourteen</button>
                    <button class="button">Fifteen</button>
                    <button class="button">Sixteen</button>
                    <button class="button">Seventeen</button>
                    <button class="button">Eighteen</button>
                    <button class="button">Nineteen</button>
                    <button class="button">Twenty</button>
                </div>
            </div>
        </div>

        <div class="mb-6 card">
            <div class="card__body">
                <h3>Colors</h3>

                <div class="buttons">
                    <button class="button">Default</button>
                    <button class="button button--primary">Primary</button>
                    <button class="button button--brand">Brand</button>
                </div>

                <div class="buttons">
                    <button class="button button--info">Info</button>
                    <button class="button button--success">Success</button>
                    <button class="button button--warning">Warning</button>
                    <button class="button button--danger">Danger</button>
                </div>
            </div>
        </div>

        <div class="mb-6 card">
            <div class="card__body">
                <h3>Disabled</h3>

                <div class="buttons">
                    <button class="button" disabled>Default</button>
                    <button class="button button--primary" disabled>Primary</button>
                    <button class="button button--brand" disabled>Brand</button>
                </div>

                <div class="buttons">
                    <button class="button button--info" disabled>Info</button>
                    <button class="button button--success" disabled>Success</button>
                    <button class="button button--warning" disabled>Warning</button>
                    <button class="button button--danger" disabled>Danger</button>
                </div>
            </div>
        </div>

        <!--  -->

        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Forms</h2>

        <div class="mb-6 card">
            <div class="card__body">
                <div class="form">
                    <div class="field">
                        <label for="name" class="field__label">Name</label>
                        <div class="field__control">
                            <input type="text" class="field__input" placeholder="Text input">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Styleguide'
                }
            }
        },
    }
</script>