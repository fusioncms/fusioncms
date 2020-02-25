<template>
    <div class="tabs">
        <ul class="tab__list">
            <li
                v-for="tab in tabs"
                :key="tab.name"
                class="tab"
                :class="{ 'tab--active': tab.isActive, 'tab--hovering': isHovering(tab.hash) }"
                @dragover.prevent="dragOver(tab.hash)"
                @dragenter.prevent="dragEnter"
                @dragleave.prevent="dragLeave"
                @dragend.prevent="dragLeave"
                @drop.prevent
            >
                <a :href="tab.hash" class="tab__link" @click.prevent="selectTab(tab.hash, true)" @focus="selectTab(tab.hash, true)">{{ tab.name }}</a>
            </li>
        </ul>

        <div class="tab__panel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-tabs',

        props: {
            replace: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                tabs: null,
                foundActiveTab: false,
                hoveringOver: null,
                dragOverAt: false,
                dragEnterAt: false,
                dragLeaveAt: false,
                dragEndAt: false,
                enteredTab: false,
                hoveringOverFor: false,
            }
        },

        computed: {
            count() {
                return this.tabs.length
            }
        },

        watch: {
            tabs() {
                this.findAndSelectTab()
            },

            dragOverAt() {
                let start = this.dragEnterAt
                let end = this.dragOverAt
                let duration = end - start

                if (duration > 400 && this.enteredTab == false) {
                    console.log('selecting tab')

                    this.selectTab(this.hoveringOver, true)
                    
                    this.enteredTab = true
                }

                this.hoveringOverFor = duration
            }
        },

        methods: {
            isHovering(hash) {
                return this.hoveringOver == hash
            },

            findTab(hash) {
                return this.tabs.find((tab) => {
                    return tab.hash == hash
                })
            },

            selectTab(hash) {
                const selected = this.findTab(hash)

                if (typeof selected === 'undefined') {
                    return
                }

                _.each(this.tabs, (tab, index) => {
                    if (tab.hash == selected.hash) {
                        tab.activate()

                        this.active = index
                    } else {
                        tab.deactivate()
                    }
                })

                if (this.replace) {
                    this.$router.replace({
                        hash: selected.hash
                    }).catch((err) => {})
                }
            },

            findAndSelectTab() {
                _.each(this.tabs, (tab) => {
                    if (tab.isActive) {
                        this.selectTab(tab.hash)

                        this.foundActiveTab = true

                        return false
                    }
                })

                if (! this.foundActiveTab && this.tabs[0]) {
                    this.selectTab(this.tabs[0].hash)
                }

                if (this.$route.hash) {
                    this.selectTab(this.$route.hash)
                }
            },

            dragEnter() {
                this.dragEnterAt = Date.now()
                this.enteredTab = false
            },

            dragOver(hash) {
                this.dragOverAt = Date.now()
                this.hoveringOver = hash
            },

            dragLeave() {
                this.hoveringOver = null
            }
        },

        created() {
            this.tabs = this.$children
        },

        mounted() {
            this.findAndSelectTab()
        }
    }
</script>
