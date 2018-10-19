<template>
    <div class="item-image-container">
        <div class="leftArrow image-carousel-nav" @click="prevImage" v-if="activeImage != 0"></div>
        <img :src="currentImage">
        <div class="rightArrow image-carousel-nav" @click="nextImage" v-if="activeImage < this.images.length - 1"></div>
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
<style>
.item-image-container {
    width: 400px;
    height: 400px;
    background-image: url('../assets/images/img-container-border.png');
    display:flex;
    justify-content:center;
    align-items:center;
    float: left;
    position: relative;
}

.item-image-container img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
}

.leftArrow {
    background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIgNDkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTIgNDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE5OC42MDgsMjQ2LjEwNEwzODIuNjY0LDYyLjA0YzUuMDY4LTUuMDU2LDcuODU2LTExLjgxNiw3Ljg1Ni0xOS4wMjRjMC03LjIxMi0yLjc4OC0xMy45NjgtNy44NTYtMTkuMDMybC0xNi4xMjgtMTYuMTIgICAgQzM2MS40NzYsMi43OTIsMzU0LjcxMiwwLDM0Ny41MDQsMHMtMTMuOTY0LDIuNzkyLTE5LjAyOCw3Ljg2NEwxMDkuMzI4LDIyNy4wMDhjLTUuMDg0LDUuMDgtNy44NjgsMTEuODY4LTcuODQ4LDE5LjA4NCAgICBjLTAuMDIsNy4yNDgsMi43NiwxNC4wMjgsNy44NDgsMTkuMTEybDIxOC45NDQsMjE4LjkzMmM1LjA2NCw1LjA3MiwxMS44Miw3Ljg2NCwxOS4wMzIsNy44NjRjNy4yMDgsMCwxMy45NjQtMi43OTIsMTkuMDMyLTcuODY0ICAgIGwxNi4xMjQtMTYuMTJjMTAuNDkyLTEwLjQ5MiwxMC40OTItMjcuNTcyLDAtMzguMDZMMTk4LjYwOCwyNDYuMTA0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=) no-repeat left top;
    width: 32px;
    height: 32px;
    cursor: pointer;
    position: absolute;
    left: -6px;
}
.rightArrow {
    background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Mi4wMDQgNDkyLjAwNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODIuNjc4LDIyNi44MDRMMTYzLjczLDcuODZDMTU4LjY2NiwyLjc5MiwxNTEuOTA2LDAsMTQ0LjY5OCwwcy0xMy45NjgsMi43OTItMTkuMDMyLDcuODZsLTE2LjEyNCwxNi4xMiAgICBjLTEwLjQ5MiwxMC41MDQtMTAuNDkyLDI3LjU3NiwwLDM4LjA2NEwyOTMuMzk4LDI0NS45bC0xODQuMDYsMTg0LjA2Yy01LjA2NCw1LjA2OC03Ljg2LDExLjgyNC03Ljg2LDE5LjAyOCAgICBjMCw3LjIxMiwyLjc5NiwxMy45NjgsNy44NiwxOS4wNGwxNi4xMjQsMTYuMTE2YzUuMDY4LDUuMDY4LDExLjgyNCw3Ljg2LDE5LjAzMiw3Ljg2czEzLjk2OC0yLjc5MiwxOS4wMzItNy44NkwzODIuNjc4LDI2NSAgICBjNS4wNzYtNS4wODQsNy44NjQtMTEuODcyLDcuODQ4LTE5LjA4OEMzOTAuNTQyLDIzOC42NjgsMzg3Ljc1NCwyMzEuODg0LDM4Mi42NzgsMjI2LjgwNHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K) no-repeat right top;
    width: 32px;
    height: 32px;
    cursor: pointer;
    position: absolute;
    right: -6px;
}

.image-carousel-nav {
    transition: ease-in-out 0.1s;
}

.image-carousel-nav:active {
    transform: scale(0.9);
}
</style>