<template>
    <div>
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <p-button class="w-full">Manage Forms</p-button>

                    <div class="list">
                        <span class="list--separator">Inboxes</span>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'inbox']" fixed-width class="mr-2"></fa-icon> Inbox</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'star']" fixed-width class="mr-2"></fa-icon> Starred</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'check-circle']" fixed-width class="mr-2"></fa-icon> Closed</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'trash-alt']" fixed-width class="mr-2"></fa-icon> Trash</a>

                        <span class="list--separator">Forms</span>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Career Opportunities</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Contact Us</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Request A Quote</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['far', 'clipboard-list']" fixed-width class="mr-2"></fa-icon> Suggestions</a>

                        <span class="list--separator">Tags</span>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-primary-500 text-xs"></fa-icon> Lorem</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-secondary-500 text-xs"></fa-icon> Ipsum</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-warning-500 text-xs"></fa-icon> Dolor</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-danger-500 text-xs"></fa-icon> Sit</a>
                        <a href="#" class="list--item leading-loose"><fa-icon :icon="['fas', 'circle']" fixed-width class="mr-2 text-success-500 text-xs"></fa-icon> Amet</a>
                    </div>
                </p-card>
            </div>

            <div class="content-container">
                <p-card no-body>
                    <div class="flex">
                        <div class="border-r leading-none" style="width: 350px;">
                            <div class="border-r-4 border-primary-400">
                                <div class="p-6 border-t border-gray-200">
                                    <div class="flex justify-between items-center mb-2">
                                        <b>Elon Musk</b>
                                        <span class="text-gray-600 text-sm">1 day ago</span>
                                    </div>
                                    
                                    <span class="block text-gray-800 mb-2">Re: Request A Quote</span>

                                    <span class="block text-gray-500 leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum aut...</span>
                                </div>
                            </div>

                            <div class="border-r-4 border-gray-200" v-for="n in 10" :key="n">
                                <div class="p-6 border-t border-gray-200">
                                    <div class="flex justify-between items-center mb-2">
                                        <b>Elon Musk</b>
                                        <span class="text-gray-600 text-sm">1 day ago</span>
                                    </div>
                                    
                                    <span class="block text-gray-800 mb-2">Re: Request A Quote</span>

                                    <span class="block text-gray-500 leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum aut...</span>
                                </div>
                            </div>
                        </div>

                        <div class="leading-none flex-1">
                            <div class="flex border-b py-4 px-6 justify-between items-center">
                                <div>
                                    <fa-icon :icon="['far', 'star']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['far', 'check-circle']" fixed-width></fa-icon>
                                </div>

                                <div>
                                    <fa-icon :icon="['far', 'trash-alt']" fixed-width></fa-icon>
                                </div>
                            </div>

                            <div class="flex border-b p-6 tracking-wide justify-between items-center">
                                <div class="flex flex-col text-lg">
                                    <b class="mb-2">Elon Musk</b>
                                    <span>Re: Request A Quote</span>
                                </div>

                                <div class="text-sm">
                                    1 day ago
                                </div>
                            </div>
                            
                            <div class="p-6 leading-loose">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna. Morbi tristique senectus et netus et. Aliquet nec ullamcorper sit amet risus nullam eget. Mauris sit amet massa vitae. Quis auctor elit sed vulputate mi sit. Massa ultricies mi quis hendrerit. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisi vitae suscipit tellus mauris a diam maecenas. Hac habitasse platea dictumst quisque sagittis purus sit. Augue lacus viverra vitae congue. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Facilisis gravida neque convallis a.</p>
                                <p>Ultrices vitae auctor eu augue ut. Purus sit amet volutpat consequat mauris nunc. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vel turpis nunc eget lorem dolor sed. Mattis aliquam faucibus purus in massa tempor nec feugiat. Accumsan in nisl nisi scelerisque. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. At risus viverra adipiscing at in tellus. Velit egestas dui id ornare. In ante metus dictum at tempor commodo ullamcorper a lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Sagittis orci a scelerisque purus semper eget duis. Diam volutpat commodo sed egestas egestas fringilla. Imperdiet nulla malesuada pellentesque elit eget gravida. Ullamcorper morbi tincidunt ornare massa eget.</p>
                                <p>Velit laoreet id donec ultrices tincidunt. Sit amet commodo nulla facilisi. Morbi tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra. Vitae semper quis lectus nulla at volutpat diam. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Euismod elementum nisi quis eleifend quam adipiscing vitae. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Faucibus et molestie ac feugiat. Pulvinar mattis nunc sed blandit. Sit amet mattis vulputate enim nulla.</p>
                                <p>Nunc sed velit dignissim sodales ut eu. Mauris a diam maecenas sed. Velit laoreet id donec ultrices. Pellentesque elit ullamcorper dignissim cras. Mauris a diam maecenas sed enim ut sem viverra. Donec enim diam vulputate ut pharetra. Tincidunt arcu non sodales neque. Nisi est sit amet facilisis magna etiam tempor orci. Nec dui nunc mattis enim ut tellus. Dignissim convallis aenean et tortor at risus viverra adipiscing at. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Id aliquet lectus proin nibh. Nunc mattis enim ut tellus elementum sagittis. Ac felis donec et odio. Dignissim sodales ut eu sem integer vitae justo eget magna. Nunc sed id semper risus in hendrerit gravida.</p>
                                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Orci a scelerisque purus semper eget duis at tellus. Ac ut consequat semper viverra nam libero justo. Elementum curabitur vitae nunc sed velit dignissim. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Sed euismod nisi porta lorem. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Id porta nibh venenatis cras sed felis eget. Morbi enim nunc faucibus a pellentesque sit. Nec nam aliquam sem et. Dictumst quisque sagittis purus sit amet volutpat consequat. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Neque laoreet suspendisse interdum consectetur libero id faucibus. Enim blandit volutpat maecenas volutpat. Nisl rhoncus mattis rhoncus urna neque viverra justo.</p>
                            </div>
                        </div>
                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 
            }
        }
    }
</script>