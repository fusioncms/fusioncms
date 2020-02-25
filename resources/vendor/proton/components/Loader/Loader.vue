<template>
    <div class="loader--overlay">
        <div class="loader">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-loader',
    }
</script>

<style scoped>
    .loader {
        margin: auto;
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;
    }

    .loader > div {
        height: 100%;
        width: 6px;
        display: inline-block;

        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .loader .rect2 {
        animation-delay: -1.1s;
    }

    .loader .rect3 {
        animation-delay: -1.0s;
    }

    .loader .rect4 {
        animation-delay: -0.9s;
    }

    .loader .rect5 {
        animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { transform: scaleY(0.4) }
        20% { transform: scaleY(1.0) }
    }

    @keyframes sk-stretchdelay {
        0%, 40%, 100% { 
            transform: scaleY(0.4);
        }  20% { 
            transform: scaleY(1.0);
        }
    }
</style>
