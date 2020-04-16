<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div
            @dragover.prevent="enter"
            @dragenter.prevent="enter"
            @dragleave.prevent="leave"
            @dragend.prevent="leave"
            @drop.prevent="onFileChange"
            class="upload__container"
            :class="{'upload__container--dragged': isDraggedOver}"
        >
            <input
                class="upload__control"
                type="file"
                ref="input"
                :name="name"
                :id="name"
                :multiple="multiple"
                :required="required"
                @change="onFileChange"
            >
            
            <label :for="name" class="upload__label">
                <strong>Drag files here</strong> or click to select
            </label>
        </div>
        
        <table v-if="files.length" class="upload__files">
            <tbody>
                <tr v-for="(file, index) in files" :key="file.name" class="upload__file">
                    <td class="upload__file--name">{{ file.name }}</td>
                    <td class="upload__file--size">{{ filesize(file.size) }}</td>
                    <td class="upload__file--actions"><p-button @click.prevent="remove(index)">Remove</p-button></td>
                </tr>
            </tbody>
        </table>

        <div class="form__control--meta" v-if="help || errorMessage || error">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
                <span v-if="error" class="form__error--message" v-html="error"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-upload',

        data() {
            return {
                files: [],
                isDraggedOver: false,
                error: '',
            }
        },

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            multiple: Boolean,
            accept: String,
            required: Boolean,
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
        },

        methods: {
            enter() {
                this.isDraggedOver = true
            },

            leave() {
                this.isDraggedOver = false
            },

            drop(event) {
                this.leave()

                this.onFileChange(event)
            },

            resetError() {
                this.error = ''
            },

            setError(message) {
                this.error = message
            },

            onFileChange(event) {
                this.resetError()

                let files = Array.from(event.target.files || event.dataTransfer.files)

                files = _.filter(files, function(file) {
                    return this.checkAcceptance(file)
                }.bind(this))

                if (! this.multiple && files.length > 1) {
                    files.length = 1
                }

                this.files = files

                this.emitInput()
            },

            remove(index) {
                this.files.splice(index, 1)

                this.emitInput()
            },

            emitInput() {
                if (this.multiple) {
                    this.$emit('input', this.files)
                } else {
                    this.$emit('input', this.files[0])
                }
            },

            filesize(bytes) {
                let thresh = 1000

                if (Math.abs(bytes) < thresh) {
                    return bytes + ' B'
                }

                let units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                let index = -1

                do {
                    bytes /= thresh
                    ++index
                } while (Math.abs(bytes) >= thresh && index < units.length - 1)

                return bytes.toFixed(1) + ' ' + units[index]
            },

            checkAcceptance(file) {
                if (! this.accept) return true

                const types = this.accept.split(',')
                if (types.length === 0) return true
                
                let isValid = false
                
                for (let i = 0; i < types.length && ! isValid; i++) {
                    const type = types[i].trim()

                    if (type) {
                        if (type.substring(0, 1) === '.') {
                            const extIndex = file.name.lastIndexOf('.')
                            const extension = extIndex >= 0
                                ? file.name.substring(extIndex) : ''
                            
                            if (extension.toLowerCase() === type.toLowerCase()) {
                                isValid = true
                            }
                        } else {
                            if (file.type.match(type)) {
                                isValid = true
                            }
                        }
                    }
                }

                if (! isValid) {
                    this.setError('Only files of type <b>' + types.join(', ') + '</b> are accepted.')
                }

                return isValid
            }
        },
    }
</script>
