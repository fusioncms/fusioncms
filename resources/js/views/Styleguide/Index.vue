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

                                <div class="buttons mb-6">
                                    <div class="buttons__group">
                                        <button class="button">Years</button>
                                        <button class="button">Months</button>
                                        <button class="button">Days</button>
                                    </div>
                                </div>

                                <div class="buttons mb-6">
                                    <div class="buttons__group">
                                        <button class="button button--icon"><fa-icon icon="chevron-left" class="icon"></fa-icon></button>
                                        <button class="button button--icon"><fa-icon icon="chevron-right" class="icon"></fa-icon></button>
                                    </div>
                                </div>

                                <div class="buttons mb-6">
                                    <div class="buttons__group">
                                        <button class="button button--info"><fa-icon icon="bookmark" class="icon"></fa-icon> Bookmark</button>
                                        <button class="button">12.5k</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col w-1/4">
                                <h3>Sizes</h3>

                                <div class="buttons">
                                    <button class="button button--small">Small</button>
                                    <button class="button">Normal</button>
                                    <button class="button button--large">Large</button>
                                </div>
                            </div>

                            <div class="col w-1/4">
                                <h3>Icons</h3>

                                <div class="buttons mb-6">
                                    <button class="button button--icon"><fa-icon icon="moon"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="star"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="meteor"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="sun"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="satellite"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="user-astronaut"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="robot"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="brain"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="rocket"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="hand-spock"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="bars"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="ellipsis-h"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon></button>
                                    <button class="button button--icon"><fa-icon icon="sync" class="fa-spin"></fa-icon></button>
                                </div>

                                <div class="buttons mb-6">
                                    <button class="button button--icon button--primary"><fa-icon icon="moon"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="star"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="meteor"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="sun"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="satellite"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="user-astronaut"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="robot"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="brain"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="rocket"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="hand-spock"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="bars"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="ellipsis-h"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon></button>
                                    <button class="button button--icon button--primary"><fa-icon icon="sync" class="fa-spin"></fa-icon></button>
                                </div>

                                <div class="buttons mb-6">
                                    <button class="button button--icon button--rounded"><fa-icon icon="moon"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="star"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="meteor"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="sun"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="satellite"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="user-astronaut"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="robot"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="brain"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="rocket"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="hand-spock"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="bars"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="ellipsis-h"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon></button>
                                    <button class="button button--icon button--rounded"><fa-icon icon="sync" class="fa-spin"></fa-icon></button>
                                </div>

                                <div class="buttons mb-6">
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="moon"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="star"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="meteor"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="sun"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="satellite"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="user-astronaut"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="robot"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="brain"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="rocket"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="hand-spock"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="bars"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="ellipsis-h"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon></button>
                                    <button class="button button--icon button--rounded button--primary"><fa-icon icon="sync" class="fa-spin"></fa-icon></button>
                                </div>
                            </div>

                            <div class="col w-1/4">
                                <h3>Loading</h3>

                                <div class="buttons">
                                    <p-button :value="true">Default</p-button>
                                    <p-button :value="true" classes="button--primary">Primary</p-button>
                                    <p-button :value="true" classes="button--brand">Brand</p-button>
                                </div>

                                <div class="buttons">
                                    <p-button :value="true" classes="button--info">Info</p-button>
                                    <p-button :value="true" classes="button--success">Success</p-button>
                                    <p-button :value="true" classes="button--warning">Warning</p-button>
                                    <p-button :value="true" classes="button--danger">Danger</p-button>
                                </div>

                                <hr>

                                <div class="buttons">
                                    <p-button @click="start">Start</p-button>
                                    <p-button @click="stop">Stop</p-button>
                                    <p-button v-model="defaultTest" classes="button--primary">Save</p-button>
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

                        <p-checkbox name="toc" v-model="toc" true-value="yes" false-value="no">
                            I agree to the <a href="#">terms and conditions</a> set forth by the United Federation of Planets
                        </p-checkbox>

                        <!-- <div class="field">
                            <label class="field__label field__label--wrapped">
                                <input type="checkbox" name="toc" class="field__checkbox" v-model="toc">
                                <span class="checkbox__label">I agree to the <a href="#">terms and conditions</a> set forth by the United Federation of Planets</span>
                            </label>
                        </div> -->

                        <p>{{ toc }}</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Dropdowns</h2>

                        <p-dropdown icon no-arrow class="mr-3 mb-3" id="account-menu-test">
                            <fa-icon icon="ellipsis-h"></fa-icon>

                            <template v-slot:menu>
                                <p-dropdown-item>
                                    <p>You are signed in as <strong>picard.jean.luc@starfleet.com</strong></p>
                                </p-dropdown-item>

                                <p-dropdown-divider />

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="cog"></fa-icon>
                                    Settings
                                </p-dropdown-link>

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="credit-card"></fa-icon>
                                    Billing
                                </p-dropdown-link>

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="moon"></fa-icon>
                                    Switch to dark mode
                                </p-dropdown-link>

                                <p-dropdown-divider />

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="sign-out-alt"></fa-icon>
                                    Logout
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-content">
                            Dropdown With Content

                            <template v-slot:menu>
                                <p-dropdown-item>
                                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                                </p-dropdown-item>

                                <p-dropdown-item>
                                    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                                </p-dropdown-item>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-links">
                            Dropdown With Links

                            <template v-slot:menu>
                                <p-dropdown-link href="#">
                                    This is a link
                                </p-dropdown-link>

                                <p-dropdown-link to="/">
                                    This is another link
                                </p-dropdown-link>

                                <p-dropdown-link href="https://google.com">
                                    Google
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-icons">
                            Dropdown With Icons

                            <template v-slot:menu>
                                <p-dropdown-link href="#">
                                    <fa-icon class="icon" icon="star"></fa-icon>

                                    Star
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <fa-icon class="icon" icon="moon"></fa-icon>

                                    Moon
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <fa-icon class="icon" icon="robot"></fa-icon>

                                    Robot
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-images">
                            Dropdown With Images

                            <template v-slot:menu>
                                <p-dropdown-link href="#">
                                    <img src="https://placeimg.com/50/50/animals" alt="Animal" class="dropdown__image rounded">

                                    Animal
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <img src="https://placeimg.com/50/50/arch" alt="Architecture" class="dropdown__image rounded">

                                    Architecture
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <img src="https://placeimg.com/50/50/nature" alt="Nature" class="dropdown__image rounded">

                                    Nature
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat dolorum vitae vero obcaecati explicabo quis, quibusdam odio nostrum in necessitatibus vel facere rem officia, deserunt adipisci possimus temporibus ab!</p>
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

                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Table</h2>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="index in 5" :key="index">
                                <td>Bernard Lane</td>
                                <td>Director, Human Resources</td>
                                <td>bernardlane@example.com</td>
                                <td>Owner</td>
                                <td class="actions">
                                    <p-dropdown icon no-arrow right :id="'action-dropdown-for-' + index">
                                        <fa-icon icon="ellipsis-h" class="icon"></fa-icon>

                                        <template v-slot:menu>
                                            <p-dropdown-link href="/" target="_blank">
                                                <fa-icon icon="pencil-alt" class="icon"></fa-icon>
                                                Edit
                                            </p-dropdown-link>

                                            <p-dropdown-link href="/" target="_blank">
                                                <fa-icon icon="trash-alt" class="icon"></fa-icon>
                                                Delete
                                            </p-dropdown-link>
                                        </template>
                                    </p-dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

        data() {
            return {
                defaultTest: false,
                toc: 'no',
            }
        },

        methods: {
            start() {
                this.defaultTest = true
            },

            stop() {
                this.defaultTest = false
            }
        }
    }
</script>