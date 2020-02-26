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

                                <div class="buttons">
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

                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Dropdowns</h2>

                        <div class="flex flex-wrap">
                            <renderless-dropdown class="mr-3 mb-3">
                                <div slot-scope="props">
                                    <button class="button button--icon" @click="props.toggle()" data-reference><fa-icon icon="ellipsis-h"></fa-icon></button>

                                    <div class="dropdown__menu" v-show="props.isOpen" data-popper>
                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="cog"></fa-icon>

                                            Settings
                                        </a>

                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="credit-card"></fa-icon>

                                            Billing
                                        </a>

                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="moon"></fa-icon>

                                            Switch to Dark Mode
                                        </a>

                                        <hr class="dropdown__divider">

                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="sign-out-alt"></fa-icon>

                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </renderless-dropdown>

                            <renderless-dropdown class="mr-3 mb-3">
                                <div slot-scope="props">
                                    <button class="button" @click="props.toggle()" data-reference>Dropdown With Content <fa-icon icon="angle-down" class="fa-fw ml-3"></fa-icon></button>

                                    <div class="dropdown__menu" v-show="props.isOpen" data-popper>
                                        <div class="dropdown__item">
                                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                                        </div>

                                        <hr class="dropdown__divider">

                                        <div class="dropdown__item">
                                            <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                                        </div>
                                    </div>
                                </div>
                            </renderless-dropdown>

                            <renderless-dropdown class="mr-3 mb-3">
                                <div slot-scope="props">
                                    <button class="button" @click="props.toggle()" data-reference>Dropdown With Links <fa-icon icon="angle-down" class="fa-fw ml-3"></fa-icon></button>

                                    <div class="dropdown__menu" v-show="props.isOpen" data-popper>
                                        <a href="#" class="dropdown__link">
                                            This is a regular link
                                        </a>

                                        <router-link to="/" class="dropdown__link">
                                            This is a router link
                                        </router-link>

                                        <hr class="dropdown__divider">

                                        <a href="#" class="dropdown__link link--danger">
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </renderless-dropdown>

                            <renderless-dropdown class="mr-3 mb-3">
                                <div slot-scope="props">
                                    <button class="button" @click="props.toggle()" data-reference>Dropdown With Icons <fa-icon icon="angle-down" class="fa-fw ml-3"></fa-icon></button>

                                    <div class="dropdown__menu" v-show="props.isOpen" data-popper>
                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="star"></fa-icon>

                                            One
                                        </a>

                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="star"></fa-icon>

                                            Two
                                        </a>

                                        <a href="#" class="dropdown__link">
                                            <fa-icon class="dropdown__icon" icon="star"></fa-icon>

                                            Three
                                        </a>
                                    </div>
                                </div>
                            </renderless-dropdown>

                            <renderless-dropdown class="mr-3 mb-3">
                                <div slot-scope="props">
                                    <button class="button" @click="props.toggle()" data-reference>Dropdown With Images <fa-icon icon="angle-down" class="fa-fw ml-3"></fa-icon></button>

                                    <div class="dropdown__menu" v-show="props.isOpen" data-popper>
                                        <a href="#" class="dropdown__link">
                                            <img src="https://placeimg.com/50/50/animals" alt="NASA" class="dropdown__image rounded">

                                            This is an image
                                        </a>

                                        <a href="#" class="dropdown__link">
                                            <img src="https://placeimg.com/50/50/animals" alt="NASA" class="dropdown__image rounded">

                                            This is an image
                                        </a>

                                        <a href="#" class="dropdown__link">
                                            <img src="https://placeimg.com/50/50/animals" alt="NASA" class="dropdown__image rounded">

                                            This is an image
                                        </a>
                                    </div>
                                </div>
                            </renderless-dropdown>
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