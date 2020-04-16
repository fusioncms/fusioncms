export default {
    methods: {
        isImage(asset) {
            return asset.mimetype.startsWith('image/')
        },
    }
}
