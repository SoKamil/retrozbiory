<template>
    <div class="item-image-container">
        <div class="top-left-corner border-corner"></div>
        <div class="top-right-corner border-corner"></div>
        <div class="bottom-left-corner border-corner"></div>
        <div class="bottom-right-corner border-corner"></div>
        <div class="leftArrow image-carousel-nav" @click="prevImage" v-show="activeImage != 0"></div>
        <img :src="currentImage" draggable="false">
        <div class="rightArrow image-carousel-nav" @click="nextImage" v-show="activeImage < this.images.length - 1"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeImage: 0
        }
    },
    props: ['images'],
     computed: {
        // currentImage gets called whenever activeImage changes
        // and is the reason why we don't have to worry about the 
        // big image getting updated
        currentImage() {
            return this.images[this.activeImage]
        }
    },
    methods: {
        // Go forward on the images array 
        // or go at the first image if you can't go forward :/ 
        nextImage() {
            var active = this.activeImage + 1
            if(active >= this.images.length) {
                active = 0
            }
            this.activateImage(active)
        },
        // Go backwards on the images array
        // or go at the last image
        prevImage() {
            var active = this.activeImage - 1
            if(active < 0) {
                active = this.images.length - 1
            }
            this.activateImage(active)
        },
        activateImage(imageIndex) {
            this.activeImage = imageIndex
        }
    }
}
</script>
<style lang="stylus">
</style>