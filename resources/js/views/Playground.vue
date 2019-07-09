<template>
    <div>
        <portal to="title">Playground</portal>

        <div class="row">
            <div class="col w-full">
                <p-card>
                    <h4>File Manager Modal</h4>

                    <p-button @click="$bus.$emit('openAssetManager')" theme="primary">Launch Modal</p-button>
                </p-card>
            </div>
        </div>    
    </div>
</template>
