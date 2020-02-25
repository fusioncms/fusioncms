<template>
    <div>
        <portal to="title">
            <app-title icon="swatchbook">Styleguide</app-title>
        </portal>

        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Buttons</h2>

                        <div class="row">
                            <div class="col w-1/4">
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

                            <div class="col w-1/4">
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

                            <div class="col w-1/4">
                                <h3>Buttons</h3>

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

                            <div class="col w-1/4">
                                <h3>Button Groups</h3>

                                <div class="buttons">
                                    <div class="buttons__group">
                                        <button class="button">One</button>
                                        <button class="button">Two</button>
                                        <button class="button">Three</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col w-1/2">
                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Forms</h2>

                        <div class="field">
                            <label class="field__label">Name</label>
                            <div class="field__control">
                                <input type="text" class="field__input" name="name" placeholder="Text input" value="Jean-Luc Picard">
                            </div>

                            <p class="field__help">What shall we call you?</p>
                        </div>

                        <div class="field">
                            <label class="field__label">Username</label>
                            <div class="field__control">
                                <input type="text" class="field__input field__input--success" name="username" placeholder="Text input" value="picard">
                            </div>

                            <p class="field__help">What would you like to log in with?</p>
                            <p class="field__help field__help--success">This username is available</p>
                        </div>

                        <div class="field">
                            <label class="field__label">Email</label>
                            <div class="field__control">
                                <input type="email" class="field__input field__input--danger" name="email" placeholder="Text input" value="make.it.so@">
                            </div>

                            <p class="field__help">Where can we contact you?</p>
                            <p class="field__help field__help--danger">This email is invalid</p>
                        </div>

                        <div class="field">
                            <label class="field__label">Message</label>
                            <div class="field__control">
                                <textarea name="message" class="field__textarea" placeholder="Hello universe...">You cannot explain away a wantonly immoral act because you think that it is connected to some higher purpose.</textarea>
                            </div>
                        </div>

                        <div class="field">
                            <label class="field__label field__label--wrapped">
                                <input type="checkbox" name="toc" class="field__checkbox">
                                <span class="checkbox__label">I agree to the <a href="#">terms and conditions</a> set forth by the United Federation of Planets</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col w-1/2">
                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Toolbars</h2>


                            <div class="toolbar">
                                <div class="toolbar__group">
                                    <div class="buttons">
                                        <div class="buttons__group">
                                            <button class="button">
                                                <fa-icon :icon="['fas', 'star']" class="fa-fw md:mr-2"></fa-icon>
                                                <span class="hidden md:inline">Button</span>
                                            </button>

                                            <button class="button">
                                                <fa-icon :icon="['fas', 'star']" class="fa-fw md:mr-2"></fa-icon>
                                                <span class="hidden md:inline">Button</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="toolbar__group toolbar__group--grow">
                                    <div class="field__control">
                                        <input type="text" class="field__input" name="search" placeholder="Search for...">
                                    </div>
                                </div>

                                <div class="toolbar__group">
                                    <button class="button">
                                        <fa-icon :icon="['fas', 'star']" class="fa-fw md:mr-2"></fa-icon>
                                        <span class="hidden md:inline">Button</span>
                                    </button>
                                </div>
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