<nav id="header" class="bg-white fixed w-full z-10 top-0 border-t-4" style="border-color: {{ theme('setting.primary_color') }};">
    <div class="w-full border-b border-gray-200">
        <div class="w-full container mx-auto mb-px flex flex-wrap items-center">
            <div class="w-1/2 px-6 flex items-center">
                <div class="group">
                    <a class="font-bold text-xl mr-20 text-black group-hover:text-blue-500 tracking-wider" href="/">{{ setting('system.website_title') }}</a>
                </div>

                <ul class="items-center px-4 md:px-0 hidden lg:flex">
                    {{-- @if(Module::exists('bigcommerce') and Module::enabled('bigcommerce'))
                        <li class="mr-6 my-2 md:my-0">
                            <a href="/store" class="group block py-1 md:py-4 px-2 align-middle text-gray-500 no-underline border-b-2 border-white hover:border-gray-900">
                                <i class="fas fa-store-alt fa-fw mr-1 group-hover:text-blue-500"></i>
                                <span class="pb-1 md:pb-0 text-sm group-hover:text-gray-900">Store</span>
                            </a>
                        </li>
                    @endif --}}
                </ul>
            </div>

            <div class="w-1/2 pr-0">
                <div class="w-full flex flex-row items-center justify-end px-6">
                    <a href="#" @click.prevent v-collapse:mobile-menu class="lg:hidden block py-4 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-gray-900">
                        <i class="fas fa-bars text-lg"></i>
                    </a>
                </div>

                <ul class="hidden lg:flex flex-row flex-1 items-center justify-end px-4 md:px-0">
                    {{-- @if(Module::exists('bigcommerce') and Module::enabled('bigcommerce'))
                        <li class="my-2 md:my-0">
                            <a href="/cart" class="group block py-1 md:py-4 px-2 align-middle text-gray-500 no-underline border-b-2 border-white hover:border-gray-900">
                                <i class="fas fa-shopping-basket fa-fw mr-3 group-hover:text-blue-500"></i>
                                <span class="pb-1 md:pb-0 text-sm mr-1 group-hover:text-gray-900">Cart</span>
                                <span class="text-xs border border-gray-200 rounded inline-flex items-center justify-center px-1 py-1 bg-gray-300 group-hover:text-gray-900 text-gray-600 leading-none">{{ $_COOKIE['bigcommerce_cart_count'] ?? 0 }}</span>
                            </a>
                        </li>
                    @endif --}}

                    @auth
                        <li class="ml-6 my-2 md:my-0">
                            <a href="/settings/account" class="group block py-1 md:py-4 px-2 align-middle text-gray-500 no-underline border-b-2 border-white hover:border-gray-900">
                                <span class="pb-1 md:pb-0 text-sm group-hover:text-gray-900">Settings</span>
                            </a>
                        </li>
                        <li class="ml-6 my-2 md:my-0">
                            <a href="/logout" class="group block py-1 md:py-4 px-2 align-middle text-gray-500 no-underline border-b-2 border-white hover:border-gray-900">
                                <span class="pb-1 md:pb-0 text-sm group-hover:text-gray-900">Logout</span>
                            </a>
                        </li>
                    @else
                        <li class="ml-6 my-2 md:my-0">
                            <a href="/login" class="group block py-1 md:py-4 px-2 align-middle text-gray-500 no-underline border-b-2 border-white hover:border-gray-900">
                                <span class="pb-1 md:pb-0 text-sm group-hover:text-gray-900">Login</span>
                            </a>
                        </li>

                        <li class="my-2 md:my-0">
                            <a href="/register" class="group block py-1 md:py-4 px-2 align-middle text-gray-500 no-underline border-b-2 border-white hover:border-gray-900">
                                <span class="pb-1 md:pb-0 text-sm group-hover:text-gray-900">Register</span>
                            </a>
                        </li>
                    @endauth
                </ul>
            </div>
        </div>

        <p-collapse name="mobile-menu">
            <div class="w-full py-4 bg-gray-900 text-gray-100 text-right overflow-y-scroll max-h-screen lg:hidden shadow-lg">
                <ul class="pb-10 container mx-auto px-6">
                    {{-- @if(Module::exists('bigcommerce') and Module::enabled('bigcommerce'))
                        <li class="py-px"><a href="/store" class="text-gray-500 hover:text-gray-700">Store</a></li>
                    @endif --}}

                    <li class="py-px border-b border-gray-800"></li>

                    {{-- @if(Module::exists('bigcommerce') and Module::enabled('bigcommerce'))
                        <li class="py-px"><a href="/cart" class="text-gray-500 hover:text-gray-700">Cart</a></li>
                    @endif --}}

                    <li class="py-px border-b border-gray-800"></li>

                    @auth
                        <li class="py-px"><a href="/settings/account" class="text-gray-500 hover:text-gray-700">Settings</a></li>
                        <li class="py-px"><a href="/logout" class="text-gray-500 hover:text-gray-700">Logout</a></li>
                    @else
                        <li class="py-px"><a href="/login" class="text-gray-500 hover:text-gray-700">Login</a></li>
                        <li class="py-px"><a href="/register" class="text-gray-500 hover:text-gray-700">Register</a></li>
                    @endauth
                </ul>
            </div>
        </p-collapse>
    </div>
</nav>