<template>
  <div id="app">
    <image-preloader :srcs="getAllImagesArray()" @loaded="loadedOne" @loaded-all="preloadedAllImages"/>
    <div class="masonry" v-if="imagesPreloaded" v-masonry transition-duration="0" item-selector=".shelfItem">
      <shelf-item v-masonry-tile v-for="(item, index) in retrozbiory" :key="index" :tooltip="item.title" :thumbnail="item.images[0]" @click.native="openItemModal(index)"></shelf-item>
    </div>
    <modal v-if="showModal" @close="showModal = false" :retrozbiory="retrozbiory" :currentModal="currentModal"/>
  </div>
</template>

<script>
import modal from './components/modal.vue'
import shelfItem from './components/shelfItem.vue'

import retrozbiory from './assets/retrozbiory.json'

export default {
  name: 'app',
  components: {
    modal,
    shelfItem
  },
  data () {
    return {
      currentModal: null,
      imagesPreloaded: false,
      showModal: false,
      retrozbiory: retrozbiory
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
      console.log('loaded one',e)
    },
    preloadedAllImages () {
      this.imagesPreloaded = true
    },
    getAllImagesArray () {
      let buffer = []
      for (let item of this.retrozbiory) {
        let imagesArray = item.images
        // console.log(imagesArray)
        buffer.push(...imagesArray)
      }
      return buffer
    }
  }
}
</script>

<style lang="stylus">
</style>
