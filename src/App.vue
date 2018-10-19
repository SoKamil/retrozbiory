<template>
  <div id="app">
      <div class="masonry" v-masonry transition-duration="0" item-selector=".shelfItem">
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
      showModal: false,
      currentModal: null,
      retrozbiory: retrozbiory
    }
  },
  created () {
  },
  methods: {
    openItemModal (id) {
      this.currentModal = id
      this.showModal = true
    }
  }
}
</script>

<style>
#app {
  /* background-color: #eee; */
}
</style>
