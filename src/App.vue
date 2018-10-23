<template>
  <div id="app">
    <image-preloader :srcs="getAllImagesArray()" @loaded="loadedOne" @loaded-all="preloadedAllImages"/>
    <div class="shelf-item-container" :class="{'while-loading' : !imagesPreloaded}">
        <while-loading v-if="!imagesPreloaded" :progress="preloadingProgress"/>
        <shelf-item :class="{'hideItem':!imagesPreloaded}" v-for="(item, index) in retrozbiory" :key="index" :tooltip="item.title" :thumbnail="item.images[0]" @click.native="openItemModal(index)"></shelf-item>
    </div>
    <modal v-if="showModal" @close="showModal = false" :retrozbiory="retrozbiory" :currentModal="currentModal"/>
  </div>
</template>
<style lang="stylus">
  #app {
  }
  
  .while-loading {
    position: relative
    cursor: wait
  }
  
  .hideItem {
    visibility: hidden
    pointer-events: none
  }
  
  .ps:hover>.ps__scrollbar-y-rail:hover {
      background-color: #7b7b7b;
      opacity: .9;
  }
  
  .fade-enter-active {
    // position: absolute;
  }
  .fade-leave-active {
      position: absolute;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
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

      this.$ga.event({
        eventCategory: 'modal',
        eventAction: 'click',
        eventLabel: id,
        eventValue: 2
      })
    },
    loadedOne (e) {
      this.preloadingProgress = e.progress
    },
    preloadedAllImages () {
      this.imagesPreloaded = true

      this.$ga.event({
        eventCategory: 'app',
        eventAction: 'load',
        eventLabel: 'App initialised',
        eventValue: 1
      })
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

