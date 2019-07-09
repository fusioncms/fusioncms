<footer class="bg-gray-900 text-gray-500">
    <div class="container mx-auto flex items-center px-2 py-8">
        <div class="w-full mx-auto flex flex-wrap items-center">
            <div class="flex flex-col lg:flex-row items-center w-full lg:w-1/2 justify-center lg:justify-start text-sm tracking-wider pb-6 lg:pb-0">
                <i class="text-2xl fas fa-handshake fa-fw text-yellow-500 mr-3 pb-2 lg:pb-0"></i>
                <span>Built with FusionCMS</span>
            </div>

            <div class="flex w-full lg:w-1/2 justify-center lg:justify-end text-white">
                @can('access.admin')
                    <a href="/admin" class="text-white hover:text-white text-sm font-bold">Control Panel</a>
                @endcan
            </div>
        </div>
    </div>
</footer>