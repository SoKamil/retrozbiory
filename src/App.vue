<template>
  <div id="app">
    <image-preloader :srcs="getAllImagesArray()" @loaded="loadedOne" @loaded-all="preloadedAllImages"/>
    <transition name="fade">
      <while-loading v-if="!imagesPreloaded" :progress="preloadingProgress"/>
      <div id="shelf-item-container" v-if="imagesPreloaded">
        <shelf-item v-for="(item, index) in retrozbiory" :key="index" :tooltip="item.title" :thumbnail="item.images[0]" @click.native="openItemModal(index)"></shelf-item>
      </div>
    </transition>
    <modal v-if="showModal" @close="showModal = false" :retrozbiory="retrozbiory" :currentModal="currentModal"/>
  </div>
</template>

<script>
import modal from './components/modal.vue'
import shelfItem from './components/shelfItem.vue'
import whileLoading from './components/whileLoading.vue'

import retrozbiory from './assets/retrozbiory.json'

export default {
  name: 'app',
  components: {
    modal,
    shelfItem,
    whileLoading
  },
  data () {
    return {
      currentModal: null,
      imagesPreloaded: false,
      preloadingProgress: 0,
      retrozbiory: retrozbiory,
      showModal: false
    }
  },
  created () {
  },
  methods: {
    openItemModal (id) {
      this.currentModal = id
      this.showModal = true
    },
    loadedOne (e) {
      this.preloadingProgress = e.progress
    },
    preloadedAllImages () {
      this.imagesPreloaded = true
    },
    getAllImagesArray () {
      let buffer = []
      for (let item of this.retrozbiory) {
        let imagesArray = item.images
        buffer.push(...imagesArray)
      }
      return buffer
    }
  }
}
</script>

<style lang="stylus">
#app {
  position: relative
}

#whileLoading {
  position: absolute
}

.ps:hover>.ps__scrollbar-y-rail:hover {
    background-color: #7b7b7b;
    opacity: .9;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
