<template>
	<div
        class="bg-gray-200 mx-auto h-full flex flex-1 flex-col items-center justify-center"
        style="transition: 0.1s;"
    >
        <login-form></login-form>

        <footer class="p-6 text-xs text-gray-600 flex flex-col items-center justify-center leading-loose md:leading-none">
            <div class="mb-4 flex items-center justify-center">
                <a class="mr-3" href="#" v-modal:privacy-policy>Privacy Policy</a>
                <a href="#" v-modal:tos>Terms of Service</a>
            </div>

            <span>Built with <fa-icon :icon="['fas', 'heart']" class="text-danger-200 mx-1"></fa-icon> + <fa-icon :icon="['fas', 'coffee']" class="text-gray-600 mx-1"></fa-icon> by the efelle team</span>
        </footer>

        <tos-modal></tos-modal>
        <privacy-modal></privacy-modal>
    </div>
</template>

<script>
	import LoginForm from '../../components/auth/Login'

	export default {
        head: {
            title() {
                return {
                    inner: 'Log In'
                }
            }
        },

		name: 'login',

		components: {
			'login-form': LoginForm
		}
	}
</script>